const StadisticsProfile = () => {
    return (
        <div className="w-full max-w-sm bg-stat-card border border-stat-card rounded-xl p-5 space-y-4 shadow-inner">
            <div className="flex justify-between items-center text-xl text-gray-800">
                <span>💪 Fuerza:</span>
                <span className="font-bold text-stat">10</span>
            </div>
            <div className="flex justify-between items-center text-xl text-gray-800">
                <span>🧠 Inteligencia:</span>
                <span className="font-bold text-stat">15</span>
            </div>
            <div className="flex justify-between items-center text-xl text-gray-800">
                <span>❤️ Resistencia:</span>
                <span className="font-bold text-stat">8 <span className="text-green-500 ml-3 animate-pulse text-2xl">&#9650;</span></span>
            </div>
            <div className="flex justify-between items-center text-xl text-gray-800">
                <span>✨ Carisma:</span>
                <span className="font-bold text-stat">12</span>
            </div>
        </div>
    )
}

export default StadisticsProfile;