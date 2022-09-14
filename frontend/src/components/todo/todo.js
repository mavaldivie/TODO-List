import React from 'react'
import Table from '../table/table';
import { Link } from 'react-router-dom';

class Todo extends React.Component {
    render() {
        return (
            <>
                <h5 className="text-gray-900 text-xl font-medium mb-2">TO-DO List</h5>
                <Table />
                <br />

                <div className='flex flex-row justify-around'>
                    <Link to='./add'>
                        <div className="flex space-x-2 justify-center">
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 
                                text-white font-medium text-xs leading-tight uppercase rounded 
                                shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
                                focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                                active:shadow-lg transition duration-150 ease-in-out">Add</button>
                        </div>
                    </Link>
                </div>
                
            </>
    )}
}

export default Todo;