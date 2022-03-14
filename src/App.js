import { useRoutes } from "react-router-dom"
import routes from "./router"
import "./App.less"
// import { ConfigProvider } from 'antd';
// ConfigProvider.config({
//   theme: {
//     primaryColor: 'green',
//   },
// });

function App() {
  const element = useRoutes(routes)

  return <div className="App">{element}</div>
}

export default App
