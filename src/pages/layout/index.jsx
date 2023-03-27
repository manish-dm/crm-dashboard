import React, { useState } from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";

const App = () => {
  return (
    <Layout className="layout-page">
      <HeaderComponent />
    </Layout>
  );
};

export default App;
