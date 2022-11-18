import React from "react";

import "./index.less";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import { Layout } from "antd";

const { Content } = Layout;

function AppPortfolio() {
  return (
    <div className="AppPortfolio">
      <div className="content-AppPortfolio">
        <Layout>
          <NavBar />
          <Content>
            <Home />
            <AboutMe />
            <Skills />
            <BackTopButton />
          </Content>
          <Footer />
        </Layout>
      </div>
    </div>
  );
}

export default AppPortfolio;
