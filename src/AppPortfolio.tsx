import useLocalStorage from "use-local-storage";
import "./index.less";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";

import sun from "./assets/icons/sun.png";
import moon from "./assets/icons/moon.png";

import { Layout, Switch, Image } from "antd";

const { Content } = Layout;

function AppPortfolio() {
  const [theme, setTheme] = useLocalStorage("theme", "theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="AppPortfolio" data-theme={theme}>
      <div className="content-AppPortfolio">
        <Switch
          defaultChecked
          className="switchTheme"
          onChange={switchTheme}
          checkedChildren={
            <Image
              width={20}
              src={sun}
              preview={false}
            />
          }
          unCheckedChildren={
            <Image
              width={20}
              src={moon}
              preview={false}
            />
          }
        />
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