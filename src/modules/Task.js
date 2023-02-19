const Task = (name, dueDate = "No date", Desc = "No description") => {
  let taskDesc = Desc;
  let taskName = name;
  let taskDueDate = dueDate;
  const getName = () => taskName;
  const getDate = () => taskDueDate;
  const setName = (newName) => {
    taskName = newName;
    return taskName;
  };
  const setDate = (newDate) => {
    taskDueDate = newDate;
    return taskDueDate;
  };
  const setDesc = (newDesc) => {
    taskDesc = newDesc;
    return taskDesc;
  };

  const getDesc = () => taskDesc;

  return {
    getName,
    getDate,
    setName,
    setDate,
    setDesc,
    getDesc,
  };
};

export default Task;
