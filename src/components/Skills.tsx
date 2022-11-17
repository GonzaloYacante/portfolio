import { Col, Row, Typography, Image, Divider } from 'antd';
import '../assets/style/components/Skills.less';

import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import typescript from '../assets/img/typescript.svg';
import react from '../assets/img/react.svg';
import git from '../assets/img/git.svg';

const { Title, Text } = Typography;

function Skills() {
  return (
    <div className='skills-contain'>
      <Title className='primary-color' level={3}>Habilidades</Title>
      <Row gutter={15} justify='center' align='middle'>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={html} />
            <Divider />
            <Text strong>HTML5</Text>
          </div>
        </Col>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={css} />
            <Divider />
            <Text strong>CSS3</Text>
          </div>
        </Col>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={javascript} />
            <Divider />
            <Text strong>JavaScript</Text>
          </div>
        </Col>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={typescript} />
            <Divider />
            <Text strong>TypeScript</Text>
          </div>
        </Col>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={react} />
            <Divider />
            <Text strong>React JS</Text>
          </div>
        </Col>
        <Col>
          <div className='skills-card bg-color-secondary'>
            <Image preview={false} className='skills-card-img' src={git} />
            <Divider />
            <Text strong>GIT</Text>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills;