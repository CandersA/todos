import './styles.css';

const element = document.getElementById('content');
element.textContent = 'Hello webpack';

const toDo = (title, description, dueDate) => {
  const complete = false;
  const checkList = () => getChecklist();

  const getTitle = () => title;
  const getDesc = () => description;
  const getDueDate = () => dueDate;

  return { getTitle, getDesc, getDueDate };
};

const todo1 = toDo('Make bed', 'I want to make the bed', 'Tomorrow');

console.log(todo1);
