import { Col, Row, Typography, Image, Divider } from 'antd';
import '../assets/style/components/Skills.less';

import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import javascript from '../assets/img/javascript.svg';
import typescript from '../assets/img/typescript.svg';
import react from '../assets/img/react.svg';
import git from '../assets/img/git.svg';
import less from '../assets/img/less.svg';
import antDesign from '../assets/img/antDesign.svg';

const { Title, Text } = Typography;

function Skills() {
  return (
    <div className='skills sections'>
      <div className='sections_content'>
        <Title className='titles-sections' level={3}>Habilidades</Title>
        <section className='skills_contain'>
          <Row className='skills_contain-children' justify='center' align='middle'>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de HTML5' src={html} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>HTML5</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de CSS3' src={css} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>CSS3</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de JavaScript' src={javascript} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>JavaScript</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de TypeScript' src={typescript} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>TypeScript</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de React JS' src={react} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>React JS</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de GIT' src={git} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>GIT</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de less' src={less} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>Less</Text>
              </div>
            </Col>
            <Col>
              <div className='skills_card'>
                <Image preview={false} className='skills_card-img' alt='Imagen del logo de Ant Design' src={antDesign} />
                <Divider className='skills_card-divider' />
                <Text className='skills_card-text' strong>Ant Design</Text>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  )
}

export default Skills;