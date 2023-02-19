import Task from "./Task";

const Project = (name = "Default Title") => {
  const tasks = [];
  let projectName = name;

  const getName = () => projectName;
  const setName = (Name) => {
    projectName = Name;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTasks = () => {
    const projectTasks = tasks;
    return projectTasks;
  };

  const getTask = (taskName) => {
    const selectTask = tasks.filter(
      (task) => task.getName() === taskName
    );
    return selectTask[0];
  };

  addTask(Task("Default task"));

  return { setName, getName, getTasks, addTask, getTask };
};

export default Project;
