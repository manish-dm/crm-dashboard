import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  MailOutlined,
  MenuOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, theme as antTheme, Tooltip } from "antd";
import logoPng from "../../assets/logo.png";

const { Header } = Layout;
const device = "DESKTOP";
const collapsed = false;

const HeaderComponent = () => {
  const toggle = () => {
    console.log("toggle");
  };
  const toLogin = () => {
    console.log("login");
  };
  return (
    <Header className="layout-page-header bg-2">
      {device !== "MOBILE" && (
        <div className="logo">
          <img src={logoPng} alt="" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">
            {collapsed ? <DoubleRightOutlined /> : <MenuOutlined />}
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
