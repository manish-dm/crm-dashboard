export const menuList = [
  {
    code: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    path: "/dashboard",
  },
  {
    code: "employees",
    label: "Employees",
    icon: "employees",
    path: "/employees",
  },
  {
    code: "finance",
    label: "Finance",
    icon: "finance",
    path: "/finance",
  },
  {
    code: "component",
    label: "Component",
    icon: "permission",
    path: "/component",
    children: [
      {
        code: "componentForm",
        label: "Form",
        path: "/component/form",
      },
      {
        code: "componentTable",
        label: "Table",
        path: "/component/table",
      },
      {
        code: "componentTabs",
        label: "Tabs",
        path: "/component/tabs",
      },
    ],
  },
];
