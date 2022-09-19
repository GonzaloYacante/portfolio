import { InstagramOutlined, GithubOutlined, LinkedinFilled, CopyrightOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Typography } from "antd";
import '../assets/style/components/Footer.less';

const { Text } = Typography;

function Footer() {
  return (
      <Row className="contain-footer bg-color-secondary" justify='center' align="middle">
        <Col>
          <Space size={20} direction='vertical' align='center'>
            <Row justify="center" align="middle">
              <Space size={20}>
                <Col>
                  <Button className="footer-icons" shape="circle" type='link' href="https://www.instagram.com/gonzaloyacante/" target="blank">
                    <InstagramOutlined />
                  </Button>
                </Col>
                <Col>
                  <Button className="footer-icons" ghost shape="circle" type='link' href="https://github.com/GonzaloYacante" target="blank">
                  <GithubOutlined />
                  </Button>
                </Col>
                <Col>
                  <Button className="footer-icons" ghost shape="circle" type='link' href="https://www.linkedin.com/in/gonzaloyacante/" target="blank">
                    <LinkedinFilled />
                  </Button>
                </Col>
                <Col>
                  <Button className="footer-icons" shape="circle" type='link' href="https://www.linkedin.com/in/gonzaloyacante/" target="blank">
                    <MailOutlined />
                  </Button>
                </Col>
              </Space>
            </Row>
            <Row justify="center" align="middle">
              <Text>
                2022 <CopyrightOutlined /> Gonzalo Yacante
              </Text>
            </Row>
          </Space>
        </Col>
      </Row>
  )
}

export default Footer;
