// const lists = document.querySelectorAll(".list");
// const leftSide = document.querySelector(".left");
// const rightSide = document.querySelector(".right");
// let selected = null; // Declaring selected outside the function for better scope

// function dragOverItem(e) {
//   e.preventDefault();
// }

// function dropItem(side) {
//   return function () {
//     if (selected) {
//       side.appendChild(selected);
//       selected = null;
//     }
//   };
// }

// leftSide.addEventListener("dragover", dragOverItem);
// rightSide.addEventListener("dragover", dragOverItem);

// leftSide.addEventListener("drop", dropItem(leftSide));
// rightSide.addEventListener("drop", dropItem(rightSide));

// for (item of lists) {
//   item.addEventListener("dragstart", function (e) {
//     selected = e.target;
//   });
// }

const listItems = document.querySelectorAll(".item");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
let selected = null;

const dragOverItem = (e) => {
  e.preventDefault();
};

const dropItem = (side) => {
  return function () {
    if (selected) {
      side.appendChild(selected);
      selected = null;
    }
  };
};

rightSide.addEventListener("dragover", dragOverItem);
leftSide.addEventListener("dragover", dragOverItem);

rightSide.addEventListener("drop", dropItem(rightSide));
leftSide.addEventListener("drop", dropItem(leftSide));

for (item of listItems) {
  item.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
}
