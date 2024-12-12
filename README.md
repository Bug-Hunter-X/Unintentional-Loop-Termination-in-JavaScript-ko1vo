# Unintentional Loop Termination in JavaScript

This repository demonstrates a common but subtle error in JavaScript loops: unintentional premature termination. The `bug.js` file contains a `while` loop that's designed to iterate 10 times but can exit earlier based on a specific condition. However, if this condition is changed or added to, the loop might terminate unexpectedly.  The `bugSolution.js` file shows how to improve the code's robustness and clarity to avoid this problem.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the output.
3. Modify the condition within the `if` statement (e.g., change `i === 5` to `i > 3` or introduce another condition). Rerun to observe the effect on the loop's execution.
4. Compare the results with the expected behavior and the fix provided in `bugSolution.js`

## How to Fix
The solution (`bugSolution.js`) uses a `for` loop, which is often better structured for this situation and demonstrates a clearer exit strategy using only the loop counter and the explicit loop condition to terminate the loop.  Avoid using `break` statements unless absolutely necessary for exceptional cases.

This example highlights the importance of carefully considering loop control flow and avoiding potentially ambiguous termination conditions for improved code maintainability and correctness.