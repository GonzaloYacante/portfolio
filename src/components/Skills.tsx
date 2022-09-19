import { Card, Col, List, Row, Space } from 'antd';
import '../assets/style/components/Skills.less';

import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import git from '../assets/img/git.svg';
import javascript from '../assets/img/javascript.svg';
import react from '../assets/img/react.svg';
import typescript from '../assets/img/typescript.svg';
import Title from 'antd/lib/typography/Title';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const { Meta } = Card;

function Skills() {
  return (
    <Row justify='center' align='middle' className='skills-contain bg-color-primary'>
      <Col>
        <Space align='center' size={ 24 } wrap direction='horizontal'>
            <Card className="skills-card" cover={ <img className='skills-card-img'
              alt="HTML5" src={html} /> }>
              <Meta title="HTML5" />
            </Card>
        
            <Card
              className="skills-card"
              cover={ <img className='skills-card-img' alt="CSS3" src={css} /> }>
              <Meta title="CSS3" />
            </Card>
        
            <Card
              className="skills-card"
              cover={ <img className='skills-card-img' alt="JavaScript" src={javascript} /> }>
              <Meta title="JavaScript" />
            </Card>
        
            <Card
              className="skills-card"
              cover={ <img className='skills-card-img' alt="TypeScript" src={typescript} /> }>
              <Meta title="TypeScript" />
            </Card>
        
            <Card
              className="skills-card"
              cover={ <img className='skills-card-img' alt="React" src={react} /> }>
              <Meta title="React" />
            </Card>
        
            <Card
              className="skills-card"
              cover={ <img className='skills-card-img' alt="Git" src={git} /> }>
              <Meta title="Git" />
            </Card>
        </Space>
      </Col>
    </Row>
  )
}

export default Skills;
