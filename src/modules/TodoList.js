import Project from "./Project";

const TodoList = (() => {
  const projects = [];
  projects.push(Project("Default Project"));

  const addProject = (projectName) => {
    projects.push(Project(projectName));
  };

  return { addProject, projects };
})();

export default TodoList;
