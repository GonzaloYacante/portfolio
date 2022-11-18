import { Row, Typography } from 'antd';
import '../assets/style/components/AboutMe.less';

const { Title, Paragraph } = Typography;

function AboutMe() {
  return (
    <div className='AboutMe'>
      <Title className='titles-sections' level={3}>Acerca de</Title>
      <Row className='content-info' justify='center' align='middle'>
          {/* <Paragraph>
            Mi nombre es Gonzalo Yacante, soy un desarrollador front-end viviendo en Buenos Aires, Argentina. Desarrollé muchos tipos de interfaces, desde tarjetas de perfil hasta comercio electrónico de viajes.
          </Paragraph> */}
      </Row>
    </div>
  )
}

export default AboutMe;
