import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
