export const displayController = (() => {
  const todoContainer = document.querySelector('.todos');

  function addTodoButton(id, projects) {
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
      const thisProjectsToDos = projects[id].getToDos();
      displayController.displayToDos(thisProjectsToDos, id, projects);
    });
  }

  function displayProjects(projects, placeToDisplay) {
    let i = 0;
    const projectsAll = placeToDisplay;
    projectsAll.textContent = '';
    todoContainer.textContent = '';

    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      const projectSpan = document.createElement('span');
      projectSpan.textContent = project.getTitle();

      projectDiv.classList.add('project');
      projectDiv.setAttribute('id', i);
      projectDiv.appendChild(projectSpan);

      projectsAll.appendChild(projectDiv);
      addTodoButton(i, projects);
      i += 1;
      return { i };
    });
  }

  function displayToDos(getTodos, id, projects) {
    let j = 0;

    const todoElements = Array.from(todoContainer.getElementsByClassName('todo'));
    todoElements.forEach((element) => element.remove());

    addTodoButton(id, projects);

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

export function listenToProjects(projects) {
  const projectsDOM = Array.from(document.getElementsByClassName('project'));

  projectsDOM.forEach((project) => {
    project.addEventListener('click', () => {
      const thisProjectsToDos = projects[project.id].getToDos();
      displayController.displayToDos(thisProjectsToDos, project.id, projects);
    });
  });
}
