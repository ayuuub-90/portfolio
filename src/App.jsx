import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-[90vh] ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
