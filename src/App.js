import React from "react";
import { Layout } from "antd";
import * as classes from "./App.module.css";
import MainPanel from "./components/MainPanel/MainPanel";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className={classes["site-layout-content"]}>
          <MainPanel />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
