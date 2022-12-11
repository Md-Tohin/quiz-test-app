import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound';
import QuizContainer from './components/QuizContainer/QuizContainer';
import Statistics from './components/Statistics/Statistics';
import TopicsContainer from './components/TopicsContainer/TopicsContainer';
import MainLayout from './layouts/MainLayout';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <TopicsContainer></TopicsContainer>,
                },
                {
                    path: "quiz/:quizId",
                    loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                    element: <QuizContainer></QuizContainer>,
                },
                {
                    path: 'statistics',
                    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <Statistics></Statistics>
                },
                {
                    path: 'blog',
                    element: <Blog></Blog>
                },
                {
                    path: '*',
                    element: <NotFound></NotFound>
                }
            ],            
        },
    ]);
    return (
        <div className="">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
