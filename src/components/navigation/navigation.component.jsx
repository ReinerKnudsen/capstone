import { Outlet } from "react-router";

const Navigation = () => {
  return (
    <>
      <div>
        <h1>Navigation</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
