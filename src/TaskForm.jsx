const TaskForm = ({newTask, setToAddNewTask, createNewTask}) => {

    return(
        <div class="bg-form rounded-xl shadow-lg p-5 border border-form">
            <h3 class="text-2xl font-semibold text-form-title mb-4">Nueva Misión</h3>
            <div class="mb-4">
                <label for="new-title" class="block text-gray-700 text-base font-bold mb-2">Título de la Misión</label>
                <input 
                onChange={(e) => setToAddNewTask({
                    ...newTask,
                    title: e.target.value
                })}
                type="text" id="new-title" placeholder="Ej: Derrotar al Dragón Oscuro"
                        class="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus-ring-input"/>
            </div>
            <div class="mb-6">
                <label for="new-description" class="block text-gray-700 text-base font-bold mb-2">Detalles (Opcional)</label>
                <textarea 
                onChange={(e) => setToAddNewTask({
                    ...newTask,
                    description: e.target.value
                })}
                id="new-description" placeholder="Ej: Se encuentra en la Cueva de las Sombras..." rows="3"
                            class="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus-ring-input"></textarea>
            </div>
            <div class="flex justify-end gap-3">
                <button
                onClick={() => setToAddNewTask({
                    ...newTask,
                    addNewTask: false
                })}
                class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2.5 px-5 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200">
                    Cancelar
                </button>
                <button onClick={() => createNewTask()} class="bg-button-primary hover-bg-button-primary text-white font-bold py-2.5 px-5 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200">
                    Añadir Quest
                </button>
            </div>
        </div>
    )
}

export default TaskForm;