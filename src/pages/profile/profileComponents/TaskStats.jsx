const TaskStats = ({ completed, pending }) => {
    const totalTasks = completed + pending;
    const completionPercentage = totalTasks ? (completed / totalTasks) * 100 : 0;

    return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Task Overview</h2>
        <div className="mt-4">
        <div className="flex justify-between mb-2">
            <p className="text-gray-600">Completed Tasks</p>
            <p className="text-gray-600">{completed} / {totalTasks}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
            className="bg-green-500 h-4 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
            />
        </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-all">
            <p className="text-gray-600">Completed</p>
            <h3 className="text-3xl font-bold text-green-500">{completed}</h3>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow-md hover:shadow-lg transition-all">
            <p className="text-gray-600">Pending</p>
            <h3 className="text-3xl font-bold text-red-500">{pending}</h3>
        </div>
        </div>
    </div>
    );
};

export default TaskStats;