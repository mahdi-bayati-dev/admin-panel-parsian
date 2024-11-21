import "./App.css";
import SideBar from "./Components/SideBar/Sidebar";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
        {router}
      </div>
    </>
  );
}

export default App;
