import { Typography } from "antd";

import "../assets/style/components/Home.less";

const { Title, Text, Paragraph } = Typography;

function Home() {
  return (
    <div className="home sections">
      <div className="home_contain sections_content">
        <Text className="home_contain-text">
          Hola, mi nombre es
        </Text>
        <Title className="home_contain-title" level={1}>
          Gonzalo Yacante.
        </Title>
        <Title className="home_contain-subtitle" level={2}>
          Construyendo cosas para la web.
        </Title>
        <Paragraph className="home_contain-paragraph">
          Soy un Front-end Developer que se especializa en crear (y
          ocasionalmente diseñar) experiencias digitales excepcionales.
          Actualmente, me centro en la creación de productos accesibles y
          centrados en el ser humano en Umpacto.
        </Paragraph>
      </div>
    </div>
  );
}

export default Home;
