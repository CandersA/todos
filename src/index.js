import './styles.css';

const element = document.getElementById('content');
const addProj = document.querySelector('.create-proj');
const toDoProj = document.querySelector('.add-todo');
const showProject = document.querySelector('.showoff');
element.textContent = 'Hello webpack';

const getChecklist = (() => {

})();

const getNotes = (() => {

})();

const toDo = (title, description, dueDate) => {
  const complete = false;
  const checkList = () => getChecklist();
  const priority = 0;

  const notes = () => getNotes();
  const getTitle = () => title;
  const getDesc = () => description;
  const getDueDate = () => dueDate;

  return { getTitle, getDesc, getDueDate };
};

const Project = (title) => {
  const todos = [];
  const getTitle = () => title;

  function addToDo(id, todoTitle, description, dueDate) {
    const newToDo = toDo(todoTitle, description, dueDate);
    todos.push(newToDo);
  }

  return { getTitle, addToDo, todos };
};

const allProjects = (() => {
  const projects = [];

  function addProject(projectName) {
    projects.push(Project(projectName));
  }

  return { addProject, projects };
})();

const displayController = (() => {
  const { projects } = allProjects;

  function displayProjects() {
    let i = 0;
    let projectAddTodo;

    element.textContent = '';
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      const projectSpan = document.createElement('span');
      projectAddTodo = document.createElement('button');
      projectAddTodo.textContent = 'Add ToDo to this project';
      projectAddTodo.setAttribute('id', i);
      projectAddTodo.classList.add('project-add');
      projectDiv.classList.add('project');
      projectSpan.textContent = project.getTitle();
      projectDiv.appendChild(projectSpan);
      projectDiv.appendChild(projectAddTodo);
      element.appendChild(projectDiv);
      i += 1;
      return { i, projectAddTodo };
    });
  }

  return { displayProjects };
})();

addProj.addEventListener('click', () => {
  const projName = prompt('Please enter project name');
  allProjects.addProject(projName);
  displayController.displayProjects();
  const projectsDOM = Array.from(document.getElementsByClassName('project-add'));

  projectsDOM.forEach((projectDOM) => {
    projectDOM.addEventListener('click', () => {
      const todoName = prompt('Please enter name');
      const todoDesc = prompt('Please enter description');
      const todoDuoDate = prompt('Please enter due date');
      allProjects.projects[projectDOM.id].addToDo(todoName, todoDesc, todoDuoDate);
    });
  });

  console.log(allProjects.projects);
});

toDoProj.addEventListener('click', () => {});
showProject.addEventListener('click', () => {});

// Click on add project

/// / Add a project to website with (Input title)

// Click on add todo to specific project

/// / (Input Title, Description, DueDate, priority)
/// / Get project that has been clicked and add toDo to that project
