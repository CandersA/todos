import './styles.css';

import allProjects from './system';

import { displayController, listenToProjects } from './displayController';

const addProj = document.querySelector('.create-proj');
const allProjectsDiv = document.querySelector('.all-projects');
allProjectsDiv.textContent = 'My default project';

addProj.onclick = () => {
  const projName = prompt('Please enter project name');
  allProjects.addProject(projName);
  displayController.displayProjects(allProjects.projects, allProjectsDiv);
  listenToProjects(allProjects.projects);
};

function displayDefault() {
  allProjects.addProject('Default project');
  displayController.displayProjects(allProjects.projects, allProjectsDiv);
  listenToProjects(allProjects.projects);
  displayController.addTodoButton(0, allProjects.projects);
}

window.onload = displayDefault;

// Click on add project

/// / Add a project to website with (Input title)

// Click on add todo to specific project

/// / (Input Title, Description, DueDate, priority)
/// / Get project that has been clicked and add toDo to that project
