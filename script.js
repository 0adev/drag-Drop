const lists = document.querySelectorAll(".list");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");

for (item of lists) {
  const draglistItem = (e) => {
    let selected = e.target;

    const dragOverItem = (e) => {
      e.preventDefault();
    };
    rightSide.addEventListener("dragover", dragOverItem);

    const dropItem = () => {
      rightSide.appendChild(selected);
      selected = null;
    };
    rightSide.addEventListener("drop", dropItem);

    const dragOverItem2 = (e) => {
      e.preventDefault();
    };
    leftSide.addEventListener("dragover", dragOverItem2);

    const dropItem2 = () => {
      leftSide.appendChild(selected);
      selected = null;
    };
    leftSide.addEventListener("drop", dropItem2);
  };

  item.addEventListener("dragstart", draglistItem);
}
