## How to pass the child state into parent component? WITHOUT CONTEXT-API or REDUX



https://user-images.githubusercontent.com/67383465/218669243-7ff86f81-0f1e-4418-9234-fe02d0d38beb.mp4

# Approach :

The method used to pass the child state to a parent component is known as "lifting state up". This is a common pattern in React, where a parent component manages the state of one or more child components, and the child components notify the parent component of state changes through callback functions passed as props.

By lifting state up to a common ancestor, it makes it easier to share data between components and keep the state of the application in one central location. This can help simplify the application's logic and make it easier to reason about the code.



# Solution : 
Passing the state from a child component to a parent component can be done using a callback function. The parent component can pass a callback function as a prop to the child component, and the child component can call that function and pass its state as an argument when it changes.

Here is an example:

Refer Parent.js and Child.js files

In this example, the parent component uses the useState hook to manage a piece of state called childState. The parent component also defines a handleChildState function that updates the childState state when called. This function is passed as a prop onStateChange to the Child component.

The Child component receives the onStateChange prop and uses the useState hook to manage its own state, state. The Child component also defines a handleChange function that updates its state when the input value changes and a handleSubmit function that calls the onStateChange prop and passes its state as an argument when the form is submitted.
