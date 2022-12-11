import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  BarChart, Bar } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className='container mt-28'>
            <div className="w-3/5 mx-auto">
                <p className='font-bold text-2xl text-gray-600 text-center mb-3'>Example of LineChart</p>
                <div>
                    <LineChart width={600} height={300} data={data.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    <br />
                </div>
                <p className='font-bold text-2xl text-gray-600 text-center mt-3 mb-3'>Example of BarChart</p>
                <div>
                    <BarChart width={400} height={250} data={data.data}>
                        <Bar dataKey="total" fill="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;