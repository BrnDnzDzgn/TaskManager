const Avatar = ({ avatarUrl }) => {
return (
    <div className="relative">
        <img className="w-40 h-40 rounded-full object-cover shadow-lg" src={avatarUrl} alt="User Avatar" />
        <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 shadow hover:bg-blue-600 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L8.207 9.172A4 4 0 007 12.414V14a1 1 0 001 1h1.586a4 4 0 003.242-1.207l6.379-6.379a2 2 0 000-2.828l-3.793-3.793zM12 11.586A2 2 0 1114.414 9L16 7.414A1 1 0 1014.586 6L13 7.586A2 2 0 0112 11.586z" />
            </svg>
        </button>
    </div>
);
};

export default Avatar;