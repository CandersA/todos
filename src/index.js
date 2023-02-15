import './styles.css';

const addProj = document.querySelector('.create-proj');
const allProjectsDiv = document.querySelector('.all-projects');
allProjectsDiv.textContent = 'My default project';

const getChecklist = (() => {

})();

const getNotes = (() => {

})();

const toDo = (title, description, dueDate) => {
  // const complete = false;
  // const checkList = () => getChecklist();
  // const priority = 0;

  // const notes = () => getNotes();
  const getTitle = () => title;
  const getDesc = () => description;
  const getDueDate = () => dueDate;

  return { getTitle, getDesc, getDueDate };
};

const Project = (title) => {
  const todos = [];
  const getTitle = () => title;

  function addToDo(todoTitle, description, dueDate) {
    const newToDo = toDo(todoTitle, description, dueDate);
    todos.push(newToDo);
  }

  function getToDos() {
    return todos;
  }

  return { getTitle, addToDo, getToDos };
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
  const todoContainer = document.querySelector('.todos');

  function addTodoButton(id) {
    const previousBtns = Array.from(todoContainer.getElementsByClassName('project-add'));
    previousBtns.forEach((btn) => btn.remove());

    const projectAddTodo = document.createElement('button');
    projectAddTodo.textContent = 'Add a To Do item';
    projectAddTodo.setAttribute('id', id);
    projectAddTodo.classList.add('project-add');
    todoContainer.appendChild(projectAddTodo);

    projectAddTodo.addEventListener('click', () => {
      const todoName = prompt('Please enter name');
      const todoDesc = prompt('Please enter description');
      const todoDuoDate = prompt('Please enter due date');
      projects[id].addToDo(todoName, todoDesc, todoDuoDate);
      const thisProjectsToDos = allProjects.projects[id].getToDos();
      displayController.displayToDos(thisProjectsToDos, id);
    });
  }

  function displayProjects() {
    let i = 0;
    allProjectsDiv.textContent = '';
    todoContainer.textContent = '';

    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      const projectSpan = document.createElement('span');
      projectSpan.textContent = project.getTitle();

      projectDiv.classList.add('project');
      projectDiv.setAttribute('id', i);
      projectDiv.appendChild(projectSpan);

      allProjectsDiv.appendChild(projectDiv);
      addTodoButton(i);
      i += 1;
      return { i };
    });
  }

  function displayToDos(getTodos, id) {
    let j = 0;

    const todoElements = Array.from(todoContainer.getElementsByClassName('todo'));
    todoElements.forEach((element) => element.remove());

    addTodoButton(id);

    getTodos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      const todoTitle = document.createElement('span');
      const todoDesc = document.createElement('span');
      const todoDue = document.createElement('span');

      todoTitle.textContent = todo.getTitle();
      todoDesc.textContent = todo.getDesc();
      todoDue.textContent = todo.getDueDate();

      todoDiv.classList.add('todo');
      todoDiv.setAttribute('id', j);
      todoDiv.appendChild(todoTitle);
      todoDiv.appendChild(todoDesc);
      todoDiv.appendChild(todoDue);
      todoContainer.appendChild(todoDiv);
      j += 1;
      return { j };
    });
  }

  return { displayProjects, displayToDos, addTodoButton };
})();

function listenToProjects() {
  const projectsDOM = Array.from(document.getElementsByClassName('project'));

  projectsDOM.forEach((project) => {
    project.addEventListener('click', () => {
      const thisProjectsToDos = allProjects.projects[project.id].getToDos();
      displayController.displayToDos(thisProjectsToDos, project.id);
    });
  });
}

addProj.onclick = () => {
  const projName = prompt('Please enter project name');
  allProjects.addProject(projName);
  displayController.displayProjects();
  listenToProjects();
};

function displayDefault() {
  allProjects.addProject('Default project');
  displayController.displayProjects();
  listenToProjects();
  displayController.addTodoButton(0);
}

window.onload = displayDefault;

// Click on add project

/// / Add a project to website with (Input title)

// Click on add todo to specific project

/// / (Input Title, Description, DueDate, priority)
/// / Get project that has been clicked and add toDo to that project
