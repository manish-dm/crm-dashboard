import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  MailOutlined,
  MenuOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import logoPng from "../../assets/logo.png";
import { useSelector } from "react-redux";

const { Header } = Layout;

const HeaderComponent = ({ collapsed, toggle }) => {
  const { device } = useSelector((state) => state.user);

  const toLogin = () => {
    console.log("login");
  };
  return (
    <Header className="layout-page-header bg-2">
      {device !== "MOBILE" && (
        <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
          <img src={logoPng} alt="" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">
            {collapsed ? (
              device === "MOBILE" ? (
                <MenuOutlined />
              ) : (
                <ArrowRightOutlined />
              )
            ) : (
              <MenuOutlined />
            )}
          </span>
        </div>
        <div className="actions">
          <SettingOutlined />
          <BellOutlined />
          <MailOutlined />
          <span style={{ cursor: "pointer" }} onClick={toLogin}>
            Login
          </span>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
