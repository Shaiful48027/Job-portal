import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../pages/privateroute/PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Error 404 Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/jobapply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/myapplications',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      }
    ]
  },
]);


export default router;