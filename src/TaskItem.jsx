const TaskItem = ({ id, title, description, completed, selectedTaskToUpdate, setTaskToUpdate, updateSelectedTask, deleteSelectedTask }) => {   
    const isEditing = selectedTaskToUpdate.update && selectedTaskToUpdate.id === id;

    return(
        <div
            className=" 
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between p-4
            border-b border-pink-300
            last:border-b-0
            bg-pink-100
            hover:bg-pink-200
            rounded-lg shadow-md mb-3">
            {isEditing ? (
                <div className="flex flex-col w-full sm:w-3/4 mb-4 sm:mb-0">
                    <input
                        type="text"
                        placeholder={title}
                        onChange={(e) => setTaskToUpdate({
                            ...selectedTaskToUpdate,
                            title: e.target.value
                        })}
                        className="w-full p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-lg mb-2 text-gray-800"
                    />
                <textarea
                    name="description"
                    id={`description-${id}`}
                    cols="30"
                    rows="3"
                    placeholder={description}
                    onChange={(e) => setTaskToUpdate({
                        ...selectedTaskToUpdate,
                        description: e.target.value
                    })}
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
                    onClick={() => isEditing ? updateSelectedTask() : setTaskToUpdate({
                        id: id,
                        title,
                        description,
                        update: true
                    })}
                    className={`
                        font-bold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out
                        ${isEditing
                            ? ' bg-green-500 hover:bg-green-600 text-white'
                            : ' bg-pink-600 hover:bg-pink-700 text-white'
                        }
                        w-full sm:w-auto
                    `}
                >
                    {isEditing ? 'Guardar' : 'Actualizar'}
                </button>
                <button
                    onClick={() => isEditing ? setTaskToUpdate({
                        id: '',
                        title: '',
                        description: '',
                        update: false
                    }) : deleteSelectedTask(id)}
                    className=
                        {`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md
                        transition-colors duration-200 ease-in-out
                        w-full sm:w-auto
                        ${isEditing
                            ? ' bg-green-500 hover:bg-green-600 text-white'
                            : ' bg-pink-600 hover:bg-pink-700 text-white'
                        }`}
                >
                    {isEditing ? 'Cancelar' : 'Eliminar'}
                </button>
            </div>
        </div>
    )
}

export default TaskItem;