**Document Title: Drag-and-Drop Functionality Setup**

**Objective:**  
The objective of this code is to enable drag-and-drop functionality for elements with the class "item" between two containers, represented by elements with classes "left" and "right".

**Overview:**

- This code sets up event listeners and handlers to facilitate dragging and dropping of items.
- It allows items to be dragged from a source container to a destination container.

**Code Breakdown:**

1. **Element Selection:**

   - `listItems`: Selects all elements with the class "item", representing draggable items.
   - `leftSide`: Selects the container element on the left side with the class "left".
   - `rightSide`: Selects the container element on the right side with the class "right".

2. **Initialization:**

   - `selected`: Initializes a variable to keep track of the currently selected item. Initially set to null.

3. **Event Handlers:**

   - `dragOverItem(event)`: Prevents the default browser behavior when an item is dragged over. This ensures drop events can be handled.
   - `dropItem(side)`: Returns a function that handles the drop event. It appends the selected item to the specified side container.

4. **Event Listeners:**

   - `dragover` event listeners attached to both `leftSide` and `rightSide`: These listen for when an item is dragged over either container, invoking the `dragOverItem` function.
   - `drop` event listeners attached to both `leftSide` and `rightSide`: These listen for when an item is dropped onto either container. They call the `dropItem` function with the appropriate side as an argument.

5. **Dragstart Event:**
   - Iterates through each item in `listItems` and attaches a `dragstart` event listener to each one.
   - When an item is dragged, it sets the `selected` variable to the dragged item.

**Functionality:**

- Users can drag items with the class "item" from one container to another.
- Dragging an item triggers the `dragstart` event, marking the item as selected.
- Dropping an item onto a container triggers the `drop` event, moving the selected item to that container.
