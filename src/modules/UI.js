import Project from "./Project";
import Task from "./Task";
import TodoList from "./TodoList";
import Storage from "./Stroage";

const UI = (() => {
  const displayTasks = (project) => {
    const taskDiv = document.querySelector(".TodoList");
    const tasksDOM = Array.from(
      taskDiv.getElementsByClassName("task")
    );
    tasksDOM.forEach((task) => {
      task.remove();
    });
    const projectTasks = project.getTasks();
    projectTasks.forEach((task) => {
      const taskName = task.getName();
      const taskDate = task.getDate();
      taskDiv.innerHTML += Storage.taskDisplay(
        taskName,
        taskDate
      );
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
    const taskProject =
      document.getElementById("assignproject");
    let selectedProject = "";

    popUp.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        popUp.classList.contains("active") &&
        selectedProject.value !== ""
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
        displayTasks(selectedProject);
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
    newSelection.textContent = projectName;
    projectSelect.appendChild(newSelection);
  };

  const displayProject = (project, id) => {
    const appendToDiv = document.querySelector(".projects");
    const projectName = project.getName();
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", `project-${id}`);
    const projectSpan = document.createElement("span");
    projectSpan.textContent = projectName;
    projectDiv.appendChild(projectSpan);
    appendToDiv.appendChild(projectDiv);

    addProjectToSelection(id, projectName);

    projectDiv.addEventListener("click", () => {
      displayTasks(TodoList.getProject(id));
      getProjectHeading(TodoList.getProject(id));
    });
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
      if (e.key === "Enter") {
        const projectName = inputProjectName.value;
        TodoList.addProject(projectName);
        displayProject(TodoList.getProject(id), id);
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

  const loadHomepage = () => {
    const defaultProject = TodoList.getProject(0);

    document.addEventListener("keydown", handleKeyInput);
    initEventListeners();
    displayProject(defaultProject, 0);
    displayTasks(defaultProject);
    getProjectHeading(defaultProject);
    id += 1;
  };

  return { loadHomepage };
})();

export default UI;
