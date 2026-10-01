/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// deno-lint-ignore prefer-const
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <h2>The Button of Evil<h2>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Dont Click :)</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter = counter - 1;

  counterElement.textContent = String(counter);

  console.log(counter);
  console.log(
    "I have these thingies:",
    button,
    counterElement,
    String(counter),
  );
});
