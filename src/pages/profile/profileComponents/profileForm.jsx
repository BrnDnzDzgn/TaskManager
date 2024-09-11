import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import TaskStats from './TaskStats';
import ProgressComp from './ProgressComp';

const ProfileForm = () => {
const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: '/default-avatar.png',
    tasksCompleted: 45,
    tasksPending: 10,
});
const taskHistory = [
    { date: '2024-09-10', completed: true },
    { date: '2024-09-09', completed: true },
    { date: '2024-09-08', completed: true },
    { date: '2024-09-07', completed: false },
    { date: '2024-09-06', completed: true },
];

const totalTasks = user.tasksCompleted + user.tasksPending;
const completionPercentage = totalTasks ? (user.tasksCompleted / totalTasks) * 100 : 0;

return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-50 shadow-md rounded-lg">
    <div className="flex flex-col items-center space-y-6">
        <Avatar avatarUrl={user.avatarUrl} />
        <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        </div>
    </div>

    <TaskStats completed={user.tasksCompleted} pending={user.tasksPending} />
    <ProgressComp taskHistory={taskHistory} />

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition-all">Edit Profile</button>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg shadow hover:bg-red-600 transition-all">Log Out</button>
    </div>
    </div>
);
};

export default ProfileForm;