const UI = (() => {
  const togglePopup = () => {
    const popUp = document.querySelector(".addpopup");
    if (popUp.classList.contains("active")) {
      popUp.classList.remove("active");
    } else {
      popUp.classList.add("active");
    }
  };

  const initAddTodoButton = () => {
    const addTodo = document.querySelector(".addicon");
    addTodo.onclick = () => {
      togglePopup();
    };
  };

  const handleKeyInput = (e) => {
    if (e.key === "Escape") {
      togglePopup();
    }
  };

  const loadHomepage = () => {
    initAddTodoButton();
    document.addEventListener("keydown", handleKeyInput);
  };

  return { loadHomepage };
})();

export default UI;
