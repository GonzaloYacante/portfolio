import React from 'react';
import './index.less';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';

import { Layout } from 'antd';

const { Content } = Layout;

function AppPortfolio() {
  return (
    <div className="AppPortfolio">
        <Layout>
          <NavBar />
          <Content>
            <AboutMe />
            <Skills />
          </Content>
          <Footer />
      </Layout>
    </div>
  );
}

export default AppPortfolio;
