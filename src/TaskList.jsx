import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { getTasks, createTask, updateTask, deleteTask } from "./store/features/tasks";

const TaskList = () => {
    const { value: tasks, status, error } = useSelector((state) => state.task); 
    const dispatch = useDispatch();

    const [selectedTaskToUpdate, setTaskToUpdate] = useState({
        update: false,
        id: '',
        title: '',
        description: ''
    })

    const [newTask, setToAddNewTask] = useState({
        addNewTask: false,
        title: '',
        description: ''
    })

    const createNewTask = () => {
        const task = {
            title: newTask.title,
            description: newTask.description
        }
        dispatch(createTask(task));
        setToAddNewTask({
            addNewTask: false,
            title: '',
            description: ''
        })
    }
    
    const updateSelectedTask = () => {
        const {id, title, description} = selectedTaskToUpdate;

        const taskEdited = {
            id,
            taskToUpdate: {
                title,
                description 
            }
        }
        dispatch(updateTask(taskEdited));
        setTaskToUpdate({
            update: false,
            id: '',
            title: '',
            description: ''
        })
    }
    
    const deleteSelectedTask = (id) => {
        dispatch(deleteTask(id))
    }

    useEffect(() => {
        // Dispatch getTasks only if status is idle, to prevent multiple fetches
        if (status === 'idle') { 
            dispatch(getTasks());
        }
    }, [dispatch, status]); // Include dispatch and status in dependencies

    return (
        <ul className="">
            {/* Display loading state */}
            {status === 'loading' && <p>Cargando tareas...</p>}

            {/* Display error state - SAFELY RENDERING ERROR */}
            {status === 'failed' && (
                <p style={{ color: 'red' }}>
                    Error al cargar las tareas: {error && error.message ? error.message : JSON.stringify(error || 'Error desconocido')}
                </p>
            )}
            
            {/* Display tasks if succeeded and tasks exist */}
            {status === 'succeeded' && tasks.length > 0 ? (
                tasks.map(({_id, title, description, completed}) => {
                    return(
                        <TaskItem
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        completed={completed} 
                        selectedTaskToUpdate={selectedTaskToUpdate} 
                        setTaskToUpdate={setTaskToUpdate} 
                        updateSelectedTask={updateSelectedTask}
                        deleteSelectedTask={deleteSelectedTask}
                        />
                )})
            ) : (
                // Display message if no tasks after successful load and not adding new task
                status === 'succeeded' && !newTask.addNewTask && <p>No hay tareas disponibles. ¡Agrega una!</p>
            )}

            <div>
                {
                    !newTask.addNewTask ?  
                    <button onClick={() => setToAddNewTask({
                        ...newTask,
                        addNewTask: true
                    })}>
                        Agregar
                    </button> :
                    <TaskForm
                        newTask= {newTask}
                        setToAddNewTask= {setToAddNewTask}
                        createNewTask= {createNewTask
                        }
                    /> 
                }
            </div>
        </ul>
    );
}

export default TaskList;