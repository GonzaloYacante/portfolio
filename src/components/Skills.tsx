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
    <div className='skills'>
      <Title className='primary-color' level={3}>Habilidades</Title>
      <Row className='skills_contain' justify='center' align='middle'>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={html} />
            <Divider className='skills_card-divider' />
            <Text strong>HTML5</Text>
          </div>
        </Col>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={css} />
            <Divider className='skills_card-divider' />
            <Text strong>CSS3</Text>
          </div>
        </Col>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={javascript} />
            <Divider className='skills_card-divider' />
            <Text strong>JavaScript</Text>
          </div>
        </Col>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={typescript} />
            <Divider className='skills_card-divider' />
            <Text strong>TypeScript</Text>
          </div>
        </Col>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={react} />
            <Divider className='skills_card-divider' />
            <Text strong>React JS</Text>
          </div>
        </Col>
        <Col>
          <div className='skills_card bg-color-secondary'>
            <Image preview={false} className='skills_card-img' src={git} />
            <Divider className='skills_card-divider' />
            <Text strong>GIT</Text>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills;