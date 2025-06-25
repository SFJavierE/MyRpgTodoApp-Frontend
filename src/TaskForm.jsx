const TaskForm = ({newTask, setToAddNewTask, createNewTask}) => {

    return(
        <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-6 w-full max-w-md">
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-3">
        <div className="flex-grow w-full">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Título
            </label>
            <input
                type="text"
                id="title"
                onChange={(e) => setToAddNewTask({
                    ...newTask,
                    title: e.target.value
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pink-300 focus:border-pink-500"
            />
        </div>
        <button
            onClick={() => createNewTask()}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto mt-2 sm:mt-0"
        >
            Agregar
        </button>
    </div>
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-3">
        <div className="flex-grow w-full">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Descripción
            </label>
            <textarea
                id="description"
                placeholder="Opcional"
                onChange={(e) => setToAddNewTask({
                    ...newTask,
                    description: e.target.value
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-pink-300 focus:border-pink-500"
            />
        </div>
        <button
            onClick={() => setToAddNewTask({
                ...newTask,
                addNewTask: false
            })}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto mt-2 sm:mt-0"
        >
            Cancelar
        </button>
    </div>
</div>
    )
}

export default TaskForm;