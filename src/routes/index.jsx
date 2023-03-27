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
      {
        path: "employees",
        element: <div>Employee Page</div>,
      },
      {
        path: "finance",
        element: <div>Finance Page</div>,
      },
      {
        path: "component/form",
        element: <div>Form Page</div>,
      },
      {
        path: "component/table",
        element: <div>table Page</div>,
      },
      {
        path: "component/tabs",
        element: <div>tabs Page</div>,
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
