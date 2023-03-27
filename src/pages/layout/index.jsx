import { useState, useEffect, Suspense } from "react";
import { Drawer, Layout } from "antd";
import HeaderComponent from "./Header";
import MenuComponent from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { setUserItem } from "../../stores/user.store";
import { getGlobalState } from "../../utils/getGlobal";
import { Outlet, useLocation } from "react-router-dom";

const { Sider, Content } = Layout;
const WIDTH = 992;

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [openKey, setOpenkey] = useState();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const { collapsed, device } = useSelector((state) => state.user);

  const isMobile = device === "MOBILE";

  const toggle = () => {
    dispatch(
      setUserItem({
        collapsed: !collapsed,
      })
    );
  };

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;

      dispatch(
        setUserItem({
          device,
          collapsed: needCollapse,
        })
      );
    };
  }, [dispatch]);

  return (
    <Layout className="layout-page">
      <HeaderComponent collapsed={collapsed} toggle={toggle} />
      <Layout>
        {!isMobile ? (
          <Sider
            className="layout-page-sider"
            trigger={null}
            collapsible
            style={{ backgroundColor: "white" }}
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
          >
            <MenuComponent
              openKey={openKey}
              onChangeOpenKey={(k) => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={(k) => setSelectedKey(k)}
            />
          </Sider>
        ) : (
          <Drawer
            width="200"
            placement="left"
            bodyStyle={{ padding: 0, height: "100%" }}
            closable={false}
            onClose={toggle}
            open={!collapsed}
          >
            <MenuComponent
              openKey={openKey}
              onChangeOpenKey={(k) => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={(k) => setSelectedKey(k)}
            />
          </Drawer>
        )}
        <Content className="layout-page-content">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
