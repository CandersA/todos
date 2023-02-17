import TodoList from "./TodoList";

const Storage = (() => {

  const changeProjectName = (project, newName) => {
    project.setName(newName);
  };

  const changeTaskName = (task, newName) => {
    task.setName(newName);
  };

  const changeTaskDate = (task, newDate) => {
    task.setDate(newDate);
  };

  const getProjects = () => {
    const ProjectNames = TodoList.projects.map((project) => project.getName());
    return ProjectNames;
  };

  return { changeProjectName, changeTaskDate, changeTaskName, getProjects };
})();

export default Storage;
