import Project from "./Project";
import Task from "./Task";
import TodoList from "./TodoList";
import Storage from "./Stroage";

const UI = (() => {
  const togglePopup = () => {
    const popUp = document.querySelector(".addpopup");
    if (popUp.classList.contains("active")) {
      popUp.classList.remove("active");
    } else {
      popUp.classList.add("active");
    }
  };

  const handleKeyInput = (e) => {
    if (e.key === "Escape") {
      togglePopup();
    }
  };

  const displayProjects = () => {
    const projects = Storage.getProjects();
    const appendToDiv = document.querySelector(".projects");
    appendToDiv.textContent = "";
    projects.forEach((project) => {
      appendToDiv.innerHTML += 
      `<div class='project'>
        <span>${project}</span>
      </div>`;
    });
  };

  const createProject = (name) => {
    TodoList.addProject(name);
  };

  const displayNewProject = () => {
    const addProjectButton = document.querySelector(".newproject");
    const inputProjectName = document.querySelector(".projectinput");

    addProjectButton.style.display = "none";
    inputProjectName.style.display = "block";
    inputProjectName.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const projectName = inputProjectName.value;
        createProject(projectName);
        displayProjects();
        addProjectButton.style.display = "block";
        inputProjectName.style.display = "none";
        inputProjectName.value = "";
      }
    });
  };

  const initEventListeners = () => {
    const addProjectButton = document.querySelector(".newproject");
    const addTodo = document.querySelector(".addicon");

    addProjectButton.addEventListener("click", displayNewProject);
    addTodo.addEventListener("click", togglePopup);
  };

  const loadHomepage = () => {
    document.addEventListener("keydown", handleKeyInput);
    initEventListeners();
    displayProjects();
  };

  return { loadHomepage };
})();

export default UI;
