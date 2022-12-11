import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-28'>
            <p className='font-bold text-2xl text-gray-600 text-center'>Ask Your Question...</p>
            <div className="w-9/12 mx-auto shadow-lg p-3  my-4">
                <div className="border p-3 hover:shadow-md mb-3">
                    <h5 className='text-gray-700 text-lg font-bold'>#1 What is the purpose of the react router ?</h5>
                    <p className='text-gray-600 m-0'>The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.</p>
                </div>
                <div className="border p-3 hover:shadow-md mb-3">
                    <h5 className='text-gray-700 text-lg font-bold'>#2 How does Context API work ?</h5>
                    <p className='text-gray-600 m-0'>Context is a built-in API introduced in React . It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className="border p-3 hover:shadow-md">
                    <h5 className='text-gray-700 text-lg font-bold'>#3 What is the purpose of the use ref in react ?</h5>
                    <p className='text-gray-600 m-0'>Ref are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;