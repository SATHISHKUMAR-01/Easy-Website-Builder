// Select the draggable button and the canvas area
const draggable = document.querySelector(".draggable");
const canvas = document.getElementById("canvas");

// Handle the dragstart event
draggable.addEventListener("dragstart", (e) => {
  // Pass the ID of the button as data
  e.dataTransfer.setData("text/plain", draggable.id);
});

// Handle the dragover event on the canvas
canvas.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow dropping
});

// Handle the drop event
canvas.addEventListener("drop", (e) => {
  e.preventDefault();

  // Get the ID of the draggable element
  const buttonId = e.dataTransfer.getData("text/plain");
  const button = document.getElementById(buttonId);

  // Clone the button to drop a copy (optional)
  const droppedButton = button.cloneNode(true);

  // Set the position of the button relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left; // X coordinate inside canvas
  const y = e.clientY - rect.top;  // Y coordinate inside canvas

  // Style the dropped button
  droppedButton.style.left = `${x}px`;
  droppedButton.style.top = `${y}px`;
  droppedButton.classList.add("dropped");

  // Add the button to the canvas
  canvas.appendChild(droppedButton);

  // Optional: Add functionality to the dropped button
  droppedButton.addEventListener("click", () => {
    alert("You clicked the dropped button!");
  });
});
