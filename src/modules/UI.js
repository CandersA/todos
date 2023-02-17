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
      taskDiv.innerHTML += `<div class="task">
        <span>${taskName}</span>
        <span>${taskDate}</span>
        <div class="taskicons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit Task</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Change priority</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Move to different project</title><path d="M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </div>
      </div>`;
    });
  };

  const togglePopup = () => {
    const popUp = document.querySelector(".addpopup");
    if (popUp.classList.contains("active")) {
      popUp.classList.remove("active");
    } else {
      popUp.classList.add("active");
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
        popUp.classList.contains("active")
      ) {
        selectedProject = TodoList.getProject(
          taskProject.value
        );
        selectedProject.addTask(
          Task(taskName.value, taskDate.value)
        );
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

    const projectSelect = document.getElementById("assignproject");
    const newSelection = document.createElement("option");
    newSelection.setAttribute("value", id);
    newSelection.textContent = projectName;
    projectSelect.appendChild(newSelection);

    projectDiv.addEventListener("click", () => {
      displayTasks(TodoList.getProject(id));
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
    document.addEventListener("keydown", handleKeyInput);
    initEventListeners();
    displayProject(TodoList.getProject(0), 0);
    id += 1;
  };

  return { loadHomepage };
})();

export default UI;
