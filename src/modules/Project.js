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
  }

  const getTasks = () => {
    const projectTasks = tasks;
    return projectTasks;
  };

  addTask(Task("Default task"));

  return { setName, getName, getTasks, addTask };
};

export default Project;
