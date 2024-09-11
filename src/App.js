import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homePage/homePage";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Tasks from "./pages/tasks/tasks";
import ProfileForm from "./pages/profile/profileComponents/profileForm";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/tasks",
      element: <Tasks/>,
    },
    {
      path: "/profile",
      element: <ProfileForm/>,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
