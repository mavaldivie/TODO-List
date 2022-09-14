import React, { useEffect, useState } from "react";
import {FaPencilAlt, FaTrash, FaCheck, FaExclamation} from 'react-icons/fa'
import { Link } from "react-router-dom";

const http = require('../../services/http');

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        http.getAll().then(res => setData(res.data)).catch(err => console.error(err));
    }, []);

    const onClick = (id) => 
    {
        http.del(id).then(res => {
            const arr = data.filter(x => x._id !== id);
            setData(arr);    
        }).catch(err => console.error(err));
    }
    
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            ID
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Description
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>
                            <tr className="border-b" key={item._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item._id}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.date}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.description}</td>
                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap ">
                                    <div className={(item.status ? "text-red-600" : "text-green-600")}>
                                        {item.status ? <FaExclamation /> : <FaCheck />}
                                    </div>
                                </td>
                                <td>
                                <div className="flex space-x-2 justify-center">
                                    <div className="p-1">
                                        <Link to={'/' + item._id}>
                                            <button type="button" className="inline-block rounded-full bg-blue-600 
                                                text-white leading-normal uppercase shadow-md hover:bg-blue-700 
                                                hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-6 h-6">
                                                <FaPencilAlt className="w-3 mx-auto" viewBox="0 0 512 512"/>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="p-1">
                                        <button type="button" className="inline-block rounded-full bg-red-600 text-white 
                                            leading-normal uppercase shadow-md hover:bg-red-700 focus:bg-red-700 
                                            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
                                            transition duration-150 ease-in-out w-6 h-6"
                                            onClick={() => onClick(item._id)}>
                                            <FaTrash className="w-3 mx-auto" viewBox="0 0 512 512"/>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Table;