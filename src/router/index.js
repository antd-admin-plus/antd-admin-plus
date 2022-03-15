import Login from "@pages/login"
import Dashboard from "@pages/dashboard"
import RequireAuth from "../pages/auth"

// exception pages
import State403 from '@/pages/exceptions/state_403'
import State404 from "@/pages/exceptions/state_404"
import State500 from "@/pages/exceptions/state_500"

const routes = [
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/user",
      //   element: <User/>,
      // }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/exceptions",
    children: [
      {
        index: true,
        path: "403",
        element: <State403 />,
      },
      {
        path: "404",
        element: <State404 />,
      },
      {
        path: "500",
        element: <State500 />,
      },
    ],
  },
]

export default routes