import Login from "@pages/login"
// import Dashboard from "@pages/dashboard"
import Users from "@pages/users"
import Charts from "@pages/charts"
import List from "@pages/list"
import Form from "@pages/form"
import RequireAuth from "@pages/auth"

// dashboard pages
import Analysis from '@pages/dashboard/Analysis'

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
        path: "dashboard",
        children: [
          {
            index: true,
            path: 'analysis',
            element: <Analysis />
          }
        ]
      },
      {
        path: "form",
        element: <Form />,
        // children: [
        //   {
        //     index: true,
        //     path: 'basic-form',
        //     element: <Form />
        //   }
        // ]
      },
      {
        path: "list",
        element: <List />,
        // children: [
        //   {
        //     index: true,
        //     path: 'basic-list',
        //     element: <List />
        //   }
        // ]
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "exceptions",
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
      {
        path: "charts",
        element: <Charts />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]

export default routes