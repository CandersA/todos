const Project = (name = "Default Title") => {
  const tasks = [];
  let projectName = name;
  const getName = () => projectName;
  const setName = (Name) => {
    projectName = Name;
  };

  return { setName, getName };
};

export default Project;
