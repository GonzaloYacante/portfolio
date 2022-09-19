import {  } from '@ant-design/icons';
import { Col, Row, Image } from "antd";
import '../assets/style/components/NavBar.less';

import logo from '../assets/img/code.png';

function NavBar() {
  return (
    <Row justify='center' align='middle' className='header bg-color-secondary'>
      <Col xs={12} sm={10} md={8} lg={6} xl={6}>
        <Image preview={false} className='header-logo' src={logo} />
      </Col>
      <Col xs={12} sm={14} md={16} lg={18} xl={18}>
        <nav>
          <Row justify='end'>
            <Col span={24}>
            </Col>
          </Row>
        </nav>
      </Col>
    </Row>
  )
}

export default NavBar;