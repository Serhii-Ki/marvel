import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.tsx";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
