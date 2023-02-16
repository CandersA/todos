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

export default allProjects;
