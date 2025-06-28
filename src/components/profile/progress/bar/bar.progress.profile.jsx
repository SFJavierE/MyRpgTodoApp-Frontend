const BarProgressProfile = () => {
    return (
        <div className="w-full max-w-sm mt-10">
            <div className="text-base font-medium text-gray-700 mb-2 flex justify-between">
                <span>Progreso General de Aventuras</span>
                <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
                <div className="bg-progress h-3.5 rounded-full shadow-inner w-3/4"></div>
            </div>
        </div>
    )
}

export default BarProgressProfile;