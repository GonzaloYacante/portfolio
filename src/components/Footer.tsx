import { InstagramOutlined, GithubOutlined, LinkedinFilled, CopyrightOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Typography, Popover } from "antd";
import '../assets/style/components/Footer.less';

const { Text, Paragraph } = Typography;

const content = (
  <div>
    <Paragraph copyable>
      gyacante9@gmail.com
    </Paragraph>
  </div>
);

function Footer() {
  return (
      <Row className="contain-footer" justify='center' align="middle">
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
                  <Popover content={content} trigger="click">
                    <Button className="footer-icons " shape="circle" type='link' href="#">
                      <MailOutlined />
                    </Button>
                  </Popover>
                </Col>
              </Space>
            </Row>
            <Row justify="center" align="middle">
              <Text strong>
                2022 <CopyrightOutlined /> Gonzalo Yacante
              </Text>
            </Row>
          </Space>
        </Col>
      </Row>
  )
}

export default Footer;
