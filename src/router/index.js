import Login from "@pages/login"
import Dashboard from "@pages/dashboard"
import RequireAuth from "../pages/auth"

const routes = [
  {
    path: "/antd-admin-plus",
    element: <RequireAuth />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard/>,
      },
      // {
      //   path: "/user",
      //   element: <User/>,
      // }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  }
]

export default routes