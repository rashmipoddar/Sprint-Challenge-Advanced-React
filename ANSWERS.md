- [ ] Why would you use class component over function components (removing hooks from the question)?

Functional components are stateless components. State refers to data for our application. Without state the application won't be of any use because data changes cannot be passed on to the user.

- [ ] Name three lifecycle methods and their purposes.

ComponentDidMount - It will be called once after the webpage is mounted. Here we can make network requests, add timers and event listeners.
ComponentDidUpdate - It will be called everytime a component is updated.
ComponentWillUnmount - It will be called once just before the component dies/unmounts. This is where we clean up and remove any event listeners or timers in the component.

- [ ] What is the purpose of a custom hook?
A custom hook is helpful because it can save us from code repitation. For eg, in forms we have a number of input boxes. All of the input boxes will have the same method of getting the value. So, instead of writing the same repititive code for each input box we can create a custom hook for an input and reuse that for all our inputs.

- [ ] Why is it important to test our apps?

It is important to test our apps so that we are able to find any errors in the app early on and when the app is in production. It saves both time and money if we test our apps before production. It helps in refactoring code without any fear of the app breaking down.

