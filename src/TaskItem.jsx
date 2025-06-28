const TaskItem = ({ id, title, description, completed, selectedTaskToUpdate, setTaskToUpdate, updateSelectedTask, deleteSelectedTask }) => {   
    const isEditing = selectedTaskToUpdate.update && selectedTaskToUpdate.id === id;

    return(
        <li className="flex-grow space-y-4 mb-8">
            {isEditing ? (
                <div className="bg-form rounded-xl shadow-lg p-5 border border-form flex">
                    <div>
                    
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

                    <div className="flex flex-col gap-3 mt-4 sm:mt-0 sm:ml-6">
                        <button 
                        onClick={() => updateSelectedTask()}
                        className="bg-button-primary hover-bg-button-primary text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 w-full sm:w-auto">Aceptar</button>
                        <button onClick={() => setTaskToUpdate({
                            id: '',
                            title: '',
                            description: '',
                            update: false
                        })} className="bg-gray-500 hover:bg-red-600 text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 w-full sm:w-auto">Cancelar</button>
                    </div>
                </div>
            ) : (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border border-primary bg-card hover-bg-card rounded-xl shadow-md">

                <div className="flex flex-col w-full">
                    <p className="text-xl font-bold mb-1 text-gray-800">{title}</p>
                    <p className="text-gray-700 mb-3">{description}</p>
                    {/* CAMBIO: Contenedor para timer y checkbox */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full text-sm mt-2 sm:mt-0">
                        {/* Timer on the left */}
                        <div className="flex items-center text-gray-700 mb-2 sm:mb-0">
                            <span className="font-semibold mr-1">Tiempo restante:</span>
                            <span className="font-bold text-red-500">01:23:45</span>{/* Mock timer value */}
                        </div>
                        {/* Checkbox on the right */}
                        <div className="flex items-center text-gray-700">
                            <p className="mr-2">Completada:</p>
                            <input checked={completed} type="checkbox" className="form-checkbox h-6 w-6 checkbox-color rounded-full checkbox-border-color focus-ring-checkbox"/>
                        </div>
                    </div>
                {/*<!-- NOTA: La lógica para el decrecimiento y eliminación del tiempo se implementaría en React/JS. -->*/}
                </div>

                <div className="flex flex-col gap-3 mt-4 sm:mt-0 sm:ml-6">
                    <button 
                    onClick={() => setTaskToUpdate({
                        id: id,
                        title,
                        description,
                        update: true
                    })}
                    className="bg-button-primary hover-bg-button-primary text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 w-full sm:w-auto">Actualizar</button>
                    <button onClick={() => deleteSelectedTask(id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-200 w-full sm:w-auto">Eliminar</button>
                </div>
            </div>
            )}
        </li>
    )
}

export default TaskItem;