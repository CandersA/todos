import Project from "./Project";

const TodoList = (() => {
  const projects = [];
  projects.push(Project("Default Project"));

  const addProject = (projectName) => {
    projects.push(Project(projectName));
  };

  const getProject = (index) => {
    const project = projects[index];
    return project;
  };

  return { addProject, getProject };
})();

export default TodoList;
