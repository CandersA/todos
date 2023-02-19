import Task from "./Task";
import TodoList from "./TodoList";
import Storage from "./Stroage";

const UI = (() => {
  const initExpandDescListener = (id) => {
    const tasks = Array.from(document.getElementsByClassName("task"));
    const thisTask = tasks[id];

    const expandButton =
      thisTask.querySelector(".expand-desc");
    const description =
      thisTask.querySelector(".description");

    expandButton.addEventListener("click", () => {
      description.classList.toggle("visable");
    });
  };

  const displayTasks = (project) => {
    const taskDiv = document.querySelector(".TodoList");
    const tasksDOM = Array.from(
      taskDiv.getElementsByClassName("task")
    );
    tasksDOM.forEach((task) => {
      task.remove();
    });

    let projectID = 0;

    const projectTasks = project.getTasks();
    projectTasks.forEach((task) => {
      const taskName = task.getName();
      const taskDate = task.getDate();
      const taskDesc = task.getDesc();
      taskDiv.innerHTML += Storage.taskDisplay(
        taskName,
        taskDate,
        taskDesc,
        projectID
      );
      initExpandDescListener(projectID);
      projectID += 1;
    });
  };

  const getProjectHeading = (project) => {
    const headingDiv =
      document.querySelector(".project-head");
    headingDiv.textContent = "";
    const projectHeading = project.getName();
    headingDiv.prepend(projectHeading);
  };

  const changeStateofButton = (newState) => {
    const addTodo = document.querySelector(".addicon");

    if (newState === "close") {
      addTodo.innerHTML = "Close";
      addTodo.style.width = "70px";
      addTodo.style.right = "-100px";
    } else if (newState === "open") {
      addTodo.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='50px'><title>Add task</title><path d='M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /></svg>";
      addTodo.style.width = "50px";
      addTodo.style.right = "-80px";
    }
  };

  const togglePopup = () => {
    const popUp = document.querySelector(".addpopup");
    const disableElements =
      document.querySelector(".disable");

    if (popUp.classList.contains("active")) {
      popUp.classList.remove("active");
      disableElements.classList.remove("active");
      changeStateofButton("open");
    } else {
      popUp.classList.add("active");
      disableElements.classList.add("active");
      changeStateofButton("close");
    }
  };

  const getInput = (popUp) => {
    const taskName = document.getElementById("tasktext");
    const taskDate = document.getElementById("taskdate");
    const taskDesc = document.getElementById("taskdesc");
    const taskProject =
      document.getElementById("assignproject");
    let selectedProject = "";

    popUp.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        popUp.classList.contains("active") &&
        selectedProject.value !== "default"
      ) {
        selectedProject = TodoList.getProject(
          taskProject.value
        );
        if (taskDate.value === "") {
          selectedProject.addTask(Task(taskName.value));
        } else {
          selectedProject.addTask(
            Task(taskName.value, taskDate.value)
          );
        }
        if (taskDesc.value !== "") {
          const thisTask = selectedProject.getTask(
            taskName.value
          );
          thisTask.setDesc(taskDesc.value);
        }
        displayTasks(selectedProject);
        taskDesc.value = "";
        taskName.value = "";
        taskDate.value = "";
        taskProject.value = "default";
        togglePopup();
      }
    });
  };

  const handleKeyInput = (e) => {
    if (e.key === "Escape") {
      togglePopup();
    }
  };

  const addProjectToSelection = (id, projectName) => {
    const projectSelect =
      document.getElementById("assignproject");
    const newSelection = document.createElement("option");

    newSelection.setAttribute("value", id);
    newSelection.setAttribute("id", `selection-${id}`);
    newSelection.textContent = projectName;
    projectSelect.appendChild(newSelection);
  };

  const initRemoveButtonForProject = (
    addTo,
    project,
    id
  ) => {
    const previousButtons = Array.from(
      document.getElementsByClassName("project-remove")
    );
    previousButtons.forEach((button) => {
      button.remove();
    });

    const projectRemoveIcon = document.createElement("div");

    projectRemoveIcon.classList.add("project-remove");
    projectRemoveIcon.innerHTML =
      Storage.projectRemoveIcon();

    addTo.prepend(projectRemoveIcon);

    projectRemoveIcon.addEventListener("click", () => {
      const appendToDiv =
        document.querySelector(".projects");
      const projectToRemoveFromDOM =
        document.getElementById(`project-${id}`);
      const projectSelect = document.getElementById(
        `selection-${id}`
      );

      appendToDiv.removeChild(projectToRemoveFromDOM);
      TodoList.removeProject(id);
      projectSelect.remove();

      const firstProject =
        document.querySelector(".project");
      if (firstProject === null) {
        document.querySelector(
          ".project-head"
        ).textContent = "There are no projects";
      } else {
        firstProject.click();
      }
    });
  };

  const displayProject = (project, id) => {
    const appendToDiv = document.querySelector(".projects");
    const projectName = project.getName();
    const projectDiv = document.createElement("div");
    const projectSpan = document.createElement("span");

    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", `project-${id}`);
    projectSpan.textContent = projectName;

    projectDiv.appendChild(projectSpan);
    appendToDiv.appendChild(projectDiv);

    addProjectToSelection(id, projectName);

    projectDiv.addEventListener("click", () => {
      initRemoveButtonForProject(projectDiv, project, id);
      displayTasks(TodoList.getProject(id));
      getProjectHeading(TodoList.getProject(id));
    });
  };

  const switchProject = (projectName) => {
    const projects = Array.from(
      document.getElementsByClassName("project")
    );
    const projectToClick = projects.filter(
      (project) =>
        project.lastChild.textContent === projectName
    );
    projectToClick[0].click();
  };

  let id = 0;

  const initNewProject = () => {
    const addProjectButton =
      document.querySelector(".newproject");
    const inputProjectName =
      document.querySelector(".projectinput");

    addProjectButton.style.display = "none";
    inputProjectName.style.display = "block";
    inputProjectName.focus();
    inputProjectName.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        inputProjectName.value !== ""
      ) {
        const projectName = inputProjectName.value;
        TodoList.addProject(projectName);
        displayProject(TodoList.getProject(id), id);
        switchProject(projectName);
        addProjectButton.style.display = "block";
        inputProjectName.style.display = "none";
        inputProjectName.value = "";
        id += 1;
      }
    });
  };

  const initEventListeners = () => {
    const addProjectButton =
      document.querySelector(".newproject");
    const addTodo = document.querySelector(".addicon");
    const popUp = document.querySelector(".addpopup");

    addProjectButton.addEventListener(
      "click",
      initNewProject
    );
    addTodo.addEventListener("click", togglePopup);
    getInput(popUp);
  };

  const getDefaultProject = () => {
    const defaultProject = TodoList.getProject(0);

    displayProject(defaultProject, 0);
    displayTasks(defaultProject);
    getProjectHeading(defaultProject);
    id += 1;
  };

  const loadHomepage = () => {
    document.addEventListener("keydown", handleKeyInput);
    initEventListeners();
    getDefaultProject();
  };

  return { loadHomepage };
})();

export default UI;
