import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const http = require('../../services/http');

const EditForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [todo, setTodo] = useState({description: '', status: false});
    useEffect(() => {
        async function fetchTodo(){
            let res = await http.getById(id);
            setTodo(res.data);
        }
        fetchTodo();
    }, [id]);

    const onClick = async () => {
        console.log('Editing', todo);
        await http.put(todo);
        navigate('/');
    }

    return (
        <>
            <div>
                <label className="form-label mb-2 text-gray-700">
                    Description
                </label>
                <input  type="text"
                        className="form-control w-full px-3 py-1.5
                            text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                            focus:border-blue-600 focus:outline-none"
                        placeholder="Description"
                        value={todo.description}
                        onChange={(e) => setTodo({...todo, description: e.target.value})}
                />
            </div>
            <div  className="mt-2 w-full flex flex-col">
                <label className="form-label text-gray-700">
                    Status
                </label>
                <select className="w-full text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                            focus:border-blue-600 focus:outline-none"  
                        onChange={(e) => setTodo({...todo, status: e.target.value === 'true'})}
                        value={todo.status}>
                    <option value={true}>Pending</option>
                    <option value={false}>Completed</option>
                </select>
            </div>
            <br />
            <div className="flex flex-row justify-between">
                <Link to='../'>
                    <div className="flex space-x-2 justify-center">
                        <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 
                        text-blue-600 font-medium text-xs leading-tight uppercase rounded 
                        hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 
                        transition duration-150 ease-in-out">Back</button>
                    </div>
                </Link>
                <div className="flex space-x-2 justify-center">
                        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 
                            text-white font-medium text-xs leading-tight uppercase rounded 
                            shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
                            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                            active:shadow-lg transition duration-150 ease-in-out"
                            onClick={onClick}
                            >Edit</button>
                    </div>
            </div>
            
        </>
    )
};

export default EditForm;