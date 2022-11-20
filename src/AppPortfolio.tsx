import useLocalStorage from 'use-local-storage';

import "./index.less";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import { Layout, Switch } from "antd";

const { Content } = Layout;

function AppPortfolio() {

  const [theme, setTheme] = useLocalStorage('dark', 'theme' ? 'light' : 'dark');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <div className="AppPortfolio" data-theme={theme}>
      <div className="content-AppPortfolio">
        <Switch className='switchTheme' defaultChecked onChange={switchTheme} />
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
