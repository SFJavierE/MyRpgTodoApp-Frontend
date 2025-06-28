const Banner = () => {
    // onclick="setTheme('green')"
    const setTheme = (themeName) => {
        // Remueve todas las clases de tema existentes
        body.classList.remove('theme-pink', 'theme-blue', 'theme-green');
        // Añade la nueva clase de tema
        body.classList.add(`theme-${themeName}`);
        
        // Actualiza el estado activo de los botones del selector
        document.querySelectorAll('.theme-button').forEach(button => {
            if (button.onclick.toString().includes(`setTheme('${themeName}')`)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    return(
        <div id="theme-container">
            <p>Temas</p>
            <div id="theme-selector">
                <button  className="theme-button bg-pink-500 active" ></button>
                <button  className="theme-button bg-blue-500" ></button>
                <button  className="theme-button bg-green-500"></button>
            </div>
        </div>
    )
}

export default Banner;