const Task = (name, dueDate = "No date") => {
  let taskName = name;
  let taskDueDate = dueDate;
  const getName = () => taskName;
  const getDate = () => taskDueDate;
  const setName = (newName) => {
    taskName = newName;
  };
  const setDate = (newDate) => {
    taskDueDate = newDate;
  };

  return { getName, getDate, setName, setDate };
};

export default Task;
