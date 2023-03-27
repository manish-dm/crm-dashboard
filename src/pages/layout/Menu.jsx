import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardSvg from "../../assets/menu/dashboard.svg";

// import { setUserItem } from '@/stores/user.store';

import { CustomIcon } from "./customIcon";

const menuList = [
  {
    code: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    path: "/dashboard",
  },
  {
    code: "documentation",
    label: "Documentation",
    icon: "documentation",
    path: "/documentation",
  },
  {
    code: "guide",
    label: "Guide",
    icon: "guide",
    path: "/guide",
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

const MenuComponent = (props) => {
  // const { menuList, openKey, onChangeOpenKey, selectedKey, onChangeSelectedKey } = props;
  // const { device, locale } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTitle = (menu) => {
    return (
      <span style={{ display: "flex", alignItems: "center" }}>
        <CustomIcon type={menu.icon} />
        <span>{menu.label}</span>
      </span>
    );
  };

  // const onMenuClick = (path) => {
  //   onChangeSelectedKey(path);
  //   navigate(path);

  //   if (device !== 'DESKTOP') {
  //     dispatch(setUserItem({ collapsed: true }));
  //   }
  // };

  // const onOpenChange = (keys) => {
  //   const key = keys.pop();

  //   onChangeOpenKey(key);
  // };

  return (
    <Menu
      mode="inline"
      // selectedKeys={[selectedKey]}
      // openKeys={openKey ? [openKey] : []}
      // onOpenChange={onOpenChange}
      // onSelect={k => onMenuClick(k.key)}
      className="layout-page-sider-menu text-2"
      items={menuList.map((menu) => {
        return menu.children
          ? {
              key: menu.code,
              label: getTitle(menu),
              children: menu.children.map((child) => ({
                key: child.path,
                label: child.label,
              })),
            }
          : {
              key: menu.path,
              label: getTitle(menu),
            };
      })}
    ></Menu>
  );
};

export default MenuComponent;
