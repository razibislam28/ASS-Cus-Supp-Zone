React Basics – Questions & Answers

1. What is JSX, and why is it used?

JSX (JavaScript XML) is a computable and executable code that resembles HTML. JSX enables developers to create and code user interfaces in a simple and relatively html-like manner while keeping it 100% JavaScript. JSX is not a requirement but it helps in stressing React Codes Out.

JSX gets translated to plain JavaScript function calls (React.createElement).

Example:

const element = <h1>Hello, React!</h1>;

2. What is the difference between State and Props?

Difference Between State and Props in React React components manage and maintain state internal data React components manage and maintain state internal data which usually changes due to some user activity or an event And when an internal state changes, the component renders again to reflect the current state. For example, a counter value starded with useState, is a portion of the component’s state.

Conversely, the term "props" is an abbreviation for properties. Props are inputs a component gets from its parent which are to some degree are props. A child component props are fixed, However, they enable the passing of data and functions down the component tree which helps in building reusable and dynamic components.

To summarize:

(i)State is internal and mutable managed inside the component.

(ii)Props are external and immutable passed from parent to child.

3. What is the useState hook, and how does it work?

Each functional component gets to use useState to keep track of its own local state, essentially allowing it to trap and remember some information. How it works is It returns two items. The active state The corresponding setter function. Upon invoking the setter function, the component is re-rendered with current state values.

Example:

import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (

<div>
<p>You clicked {count} times.</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}

4. How can you share state between components in React?

There are several methodologies to share state.
Lift State Up – Relocate the state to the closest shared parent and distribute it through props.
API Context – Utilize React’s createContext and useContext for global state propagation to eliminate prop drilling. State Management Libraries – Use Redux, Zustand, or Recoil for more intricate application.

5. How is event handling done in React?

Events in React are handled using camelCase syntax (e.g., onClick, onChange).
Instead of strings, you pass a function as the event handler.
React uses a synthetic event system, which wraps native browser events for cross-browser compatibility.

Example:
function Button() {
function handleClick() {
alert("Button clicked!");
}

return <button onClick={handleClick}>Click Me</button>;
}
