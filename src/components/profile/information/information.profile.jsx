const InformationProfile = () => {
    return (
        <div className="pt-6 text-start">
            <p className="text-3xl font-bold text-gray-900 mb-3">Sir Taskalot</p>
            <p className="text-xl text-gray-700 mb-3">Nivel: <span className="font-bold text-level">5</span> (XP: 120/200)</p>
            <div className="w-full max-w-sm bg-stat-card border border-stat-card rounded-xl px-5 py-3 space-y-4 shadow-inner">
                Clase: Aventurero
            </div>
        </div>
    )
}

export default InformationProfile;