import './styles.css';

const element = document.getElementById('content');
const addProj = document.querySelector('.create-proj');
const allProjectsDiv = document.querySelector('.all-projects');
allProjectsDiv.textContent = 'My default project';

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

  function displayProjects() {
    let i = 0;
    let projectAddTodo;

    allProjectsDiv.textContent = '';
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      const projectSpan = document.createElement('span');
      projectSpan.textContent = project.getTitle();

      projectAddTodo = document.createElement('button');
      projectAddTodo.textContent = '+';
      projectAddTodo.setAttribute('id', i);
      projectAddTodo.classList.add('project-add');

      projectDiv.classList.add('project');
      projectDiv.setAttribute('id', i);
      projectDiv.appendChild(projectSpan);
      projectDiv.appendChild(projectAddTodo);

      allProjectsDiv.appendChild(projectDiv);
      i += 1;
      return { i };
    });
  }

  function displayToDos(getTodos) {
    let j = 0;

    const todoContainer = document.querySelector('.todos');
    todoContainer.textContent = '';
    getTodos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      const todoTitle = document.createElement('span');
      const todoDesc = document.createElement('span');
      const todoDue = document.createElement('span');
      todoDiv.classList.add('todo');
      todoDiv.setAttribute('id', j);
      todoTitle.textContent = todo.getTitle();
      todoDesc.textContent = todo.getDesc();
      todoDue.textContent = todo.getDueDate();
      todoDiv.appendChild(todoTitle);
      todoDiv.appendChild(todoDesc);
      todoDiv.appendChild(todoDue);
      todoContainer.appendChild(todoDiv);
      j += 1;
      return { j };
    });
  }

  return { displayProjects, displayToDos };
})();

addProj.addEventListener('click', () => {
  const projName = prompt('Please enter project name');
  allProjects.addProject(projName);
  displayController.displayProjects();

  const projectsAddTodo = Array.from(document.getElementsByClassName('project-add'));
  const projectsDOM = Array.from(document.getElementsByClassName('project'));

  projectsDOM.forEach((project) => {
    project.addEventListener('click', () => {
      const thisProjectsToDos = allProjects.projects[project.id].getToDos();
      displayController.displayToDos(thisProjectsToDos);
    });
  });

  projectsAddTodo.forEach((addTodo) => {
    addTodo.addEventListener('click', () => {
      const todoName = prompt('Please enter name');
      const todoDesc = prompt('Please enter description');
      const todoDuoDate = prompt('Please enter due date');
      allProjects.projects[addTodo.id].addToDo(todoName, todoDesc, todoDuoDate);
    });
  });

  console.log(allProjects.projects);
});

// Click on add project

/// / Add a project to website with (Input title)

// Click on add todo to specific project

/// / (Input Title, Description, DueDate, priority)
/// / Get project that has been clicked and add toDo to that project
