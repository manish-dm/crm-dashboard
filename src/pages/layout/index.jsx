import React, { useState } from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";
import MenuComponent from "./Menu";

const { Sider, Content } = Layout;

const App = () => {
  const isMobile = false;
  const collapsed = false;
  return (
    <Layout className="layout-page">
      <HeaderComponent />
      <Layout>
        <Sider
          className="layout-page-sider"
          trigger={null}
          collapsible
          style={{ backgroundColor: "white" }}
          collapsedWidth={isMobile ? 0 : 80}
          collapsed={collapsed}
          breakpoint="md"
        >
          <MenuComponent />
          {/* <MenuComponent
            menuList={menuList}
            openKey={openKey}
            onChangeOpenKey={(k) => setOpenkey(k)}
            selectedKey={selectedKey}
            onChangeSelectedKey={(k) => setSelectedKey(k)}
          /> */}
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
