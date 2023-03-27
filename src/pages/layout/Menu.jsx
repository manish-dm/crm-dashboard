import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserItem } from "../../stores/user.store";
import { CustomIcon } from "./customIcon";

const MenuComponent = (props) => {
  const { openKey, onChangeOpenKey, selectedKey, onChangeSelectedKey } = props;
  const { device, menuList } = useSelector((state) => state.user);
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

  const onMenuClick = (path) => {
    onChangeSelectedKey(path);
    navigate(path);

    if (device !== "DESKTOP") {
      dispatch(setUserItem({ collapsed: true }));
    }
  };

  const onOpenChange = (keys) => {
    const key = keys.pop();

    onChangeOpenKey(key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={(k) => onMenuClick(k.key)}
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
