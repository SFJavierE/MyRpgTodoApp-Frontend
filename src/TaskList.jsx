import { useEffect, useState } from "react";
import taskApi from "./api/taskApi";
import TaskForm from "./TaskForm";

const TaskList = () => {
    const [taskList, setTaskList] = useState([])
    const [updateTask, setUpdateTask] = useState({
        update: false,
        id: ''
    })
    const [taskToUpdate, setTaskToUpdate] = useState({
        title: '',
        description: ''
    })
    const [addNewTask, setIfAddNewTask] = useState(false)

    const fetchList = async () => {
        try{
            const res = await taskApi.get('/');
            console.log(res.data);
            setTaskList(res.data);
        }
        catch{

        }
    }

    const deleteItem = async (id) => {
        try{
            const res = await taskApi.delete(`/${id}`);
            let oldTaskList = taskList;
            let newTaskList = oldTaskList.filter((task)=> (task._id != id))
            setTaskList(newTaskList);
        }
        catch{

        }
    }

    const updateItem = async (id) => {
        try{
            const res = await taskApi.put(`/${id}`, taskToUpdate);
            let index = taskList.findIndex((task) => task._id == id);
            let list = taskList;
            list[index] = res.data;
            setTaskList(list);
            setUpdateTask({update: false, id: ''});
            setTaskToUpdate({title: '', description: ''});
        }
        catch{

        }
    }

    const setTitle = (e) => {
        setTaskToUpdate({
            ...taskToUpdate,
            title: e.target.value
        })
    }

    const setDescription = (e) => {
        setTaskToUpdate({
            ...taskToUpdate,
            description: e.target.value
        })
    }

    const startToUpdate = (id, title, description) => {
        setUpdateTask({update: true, id});
        setTaskToUpdate({title, description});
    }

    const cancelUpdate = () => {
        setUpdateTask({update: false, id: ''});
        setTaskToUpdate({title: '', description: ''});
    }

    useEffect(() => {
        fetchList();
    }, [])

    return(
        <ul>
            {
                !!taskList.length &&
                taskList.map(({_id, title, description, completed}) => (
                    <li key={_id} className=" 
                        flex flex-col sm:flex-row
                        items-start sm:items-center
                        justify-between p-4
                        border-b border-pink-300
                        last:border-b-0
                        bg-pink-100
                        hover:bg-pink-200
                        rounded-lg shadow-md mb-3">
                        {updateTask.update && updateTask.id === _id ? (
                            <div className="flex flex-col w-full sm:w-3/4 mb-4 sm:mb-0">
                                <input
                                    type="text"
                                    placeholder={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-lg mb-2 text-gray-800"
                                />
                            <textarea
                                name="description"
                                id={`description-${_id}`}
                                cols="30"
                                rows="3"
                                placeholder={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-base text-gray-800"
                            ></textarea>
                        </div>
                        ) : (
                            <div className="flex flex-col w-full">
                                <div className="flex flex-grow justify-between text-sm text-gray-700">
                                    <p className={`text-xl text-start font-semibold mb-1 ${completed ? 'line-through text-pink-500' : 'text-gray-800'}`}>
                                        {title}
                                    </p>
                                    <div className="flex items-center justify-end">
                                        <p className="mr-2">Completada:</p>
                                        <input
                                            type="checkbox"
                                            checked={completed}
                                            onChange={() => { /* Manejar el cambio de estado de completado */ }}
                                            className="form-checkbox h-5 w-5 text-pink-600 rounded border-pink-400 focus:ring-pink-600"
                                        />
                                    </div>
                                </div>
                                <p className={`flex-grow text-gray-700 text-start mb-3 ${completed ? 'line-through text-pink-500' : ''}`}>
                                    {description}
                                </p>
                            </div>
                        )}
                        <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:ml-4">
                            <button
                                onClick={() => updateTask.update && updateTask.id === _id ? updateItem(_id) : startToUpdate(_id, title, description)}
                                className={`
                                    font-bold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out
                                    ${updateTask.update && updateTask.id === _id
                                        ? ' bg-green-500 hover:bg-green-600 text-white'
                                        : ' bg-pink-600 hover:bg-pink-700 text-white'
                                    }
                                    w-full sm:w-auto
                                `}
                            >
                                {updateTask.update && updateTask.id === _id ? 'Guardar' : 'Actualizar'}
                            </button>
                            <button
                                onClick={() => updateTask.update && updateTask.id === _id ? cancelUpdate() : deleteItem(_id)}
                                className=
                                    {`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md
                                    transition-colors duration-200 ease-in-out
                                    w-full sm:w-auto
                                    ${updateTask.update && updateTask.id === _id
                                        ? ' bg-green-500 hover:bg-green-600 text-white'
                                        : ' bg-pink-600 hover:bg-pink-700 text-white'
                                    }`}
                            >
                                {updateTask.update && updateTask.id === _id ? 'Cancelar' : 'Eliminar'}
                            </button>
                        </div>
                    </li>
                    ))
                }
                <li>
                    {
                        !addNewTask ?   
                        <button onClick={() => setIfAddNewTask(true)}>
                            Agregar
                        </button> :
                        <TaskForm/>
                    }
                </li>
        </ul>
    )
}

export default TaskList;