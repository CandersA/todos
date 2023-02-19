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
    const ProjectNames = TodoList.projects.map((project) =>
      project.getName()
    );
    return ProjectNames;
  };

  const taskDisplay = (taskName, taskDate, taskDesc, id) => {
    const taskHTML = `<div class="task" id="task-${id}">
      <div class="task-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="expand-desc" viewBox="0 0 24 24"><title>Details</title><path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" /></svg>
        <span>${taskName}</span>
        <span>${taskDate}</span>
        <div class="taskicons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit Task</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Change priority</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Move to different project</title><path d="M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </div>
      </div>
      <div class="description">
        <p>${taskDesc}</p>
      </div>
    </div>`;
    return taskHTML;
  };

  const projectRemoveIcon = () => {
    const icon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
    return icon;
  };

  return {
    changeProjectName,
    changeTaskDate,
    changeTaskName,
    getProjects,
    taskDisplay,
    projectRemoveIcon,
  };
})();

export default Storage;
