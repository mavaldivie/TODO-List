import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const http = require('../../services/http')

const AddForm = () => {
    const [value, setValue] = useState([]);
    const navigate = useNavigate();
    const onClick = async () => {
        await http.post({description: value});
        navigate('/');
    };

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
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                />
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
                        onClick={onClick}>Add</button>
                </div>
            </div>
            
        </>
    ) 
}

export default AddForm;