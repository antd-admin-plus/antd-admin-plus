import Login from "@pages/login"
// import Dashboard from "@pages/dashboard"
// import Users from "@pages/users"
import UsersCenter from "@pages/users/center"
import UsersSetting from "@pages/users/setting"
import Charts from "@pages/charts"
import List from "@pages/list"
import Form from "@pages/form"
import RequireAuth from "@pages/auth"
import ResultSuccess from "@pages/result/Success"
import ResultFail from "@pages/result/Fail"

// dashboard pages
import Analysis from '@pages/dashboard/Analysis'
import Monitor from '@pages/dashboard/Monitor'
import Workspace from '@pages/dashboard/Workspace'

// icon list
import Icons from '@pages/icons'

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
          },
          {
            index: true,
            path: 'monitor',
            element: <Monitor />
          },
          {
            index: true,
            path: 'workspace',
            element: <Workspace />
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
        children: [
          {
            index: true,
            path: 'center',
            element: <UsersCenter />
          },
          {
            index: true,
            path: 'setting',
            element: <UsersSetting />
          },
        ]
      },
      {
        path: "result",
        children: [
          {
            index: true,
            path: "success",
            element: <ResultSuccess />,
          },
          {
            path: "fail",
            element: <ResultFail />,
          },
        ],
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
      },
      {
        path: "icons",
        element: <Icons />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]

export default routes