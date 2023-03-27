import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LayoutPage from "../pages/layout";

const routeList = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
