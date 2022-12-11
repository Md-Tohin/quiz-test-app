Question:-
	what is the purpose of the react router ?
Answer:- 
	The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
    
Question:- 
	How does context api work ?
Answer:- 
	Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
	React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

Question:- 
	What is the purpose of the use ref in react ?
Answer:- 
	Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.