# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    Context API solves the problem of prop-drilling. Using the Context API, higher level components can share props with deeply nested components without having to be passed down through the whole state tree. With context API, we can simply wrap the component we want to have access to our prop value and insert these props directly into whichever nested components we want.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store in redux is known as the 'single source of truth' as it contains the entire state tree of our application. There is only one store per app. The state here is immutable--we can never change the object directly. Instead, through a reducer function, we create a brand new state object and update application state with that. Reducers are pure functions that take in a state and an action. These actions always include a "type" and may include a "payload". State is updated based on what type of action is sent in to the reducer and potential information sent in through the action payload. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux thunk is a type of middleware. It allows us to perform asynchronous actions when using redux. Using thunk, we can write an action that returns a function which takes dispatch as an argument. Within this function, we can go through our async actions and when they are completed, we can dispatch synchronous actions which are then sent to our reducer.

4. What is your favorite state management system you've learned and this sprint? Please explain why!