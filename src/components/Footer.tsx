import { CopyrightOutlined, MailOutlined, LinkedinOutlined, InstagramOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography, Popover } from "antd";
import "../assets/style/components/Footer.less";

const { Text, Paragraph } = Typography;

const content = (
  <div className="popover_contain">
    <Paragraph className="popover_contain-text" copyable>
      gyacante9@gmail.com
    </Paragraph>
  </div>
);

function Footer() {
  return (
    <footer>
      <Row className="contain-footer" justify="center" align="middle">
        <Col>
          <Space size={20} direction="vertical" align="center">
            {/* Footer vertical Desktop mode */}
            <Row className="footer-desktop" justify="center" align="middle">
              <Space size={30} direction="vertical">
                <Col>
                  <Button
                    className="footer_contain"
                    shape="circle"
                    type="link"
                    href="https://www.instagram.com/gonzaloyacante/"
                    target="blank">
                    <InstagramOutlined
                      className="footer_contain-icons"
                      alt="Icono de Instagram"
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="footer_contain"
                    ghost
                    shape="circle"
                    type="link"
                    href="https://github.com/GonzaloYacante"
                    target="blank">
                    <GithubOutlined
                      className="footer_contain-icons"
                      alt="Icono de GitHub"
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="footer_contain"
                    ghost
                    shape="circle"
                    type="link"
                    href="https://www.linkedin.com/in/gonzaloyacante/"
                    target="blank">
                    <LinkedinOutlined
                      className="footer_contain-icons"
                      alt="Icono de Linkedin"
                    />
                  </Button>
                </Col>
                <Col>
                  <Popover
                    placement="right"
                    content={content}
                    trigger="click">
                    <Button
                      className="footer_contain"
                      shape="circle"
                      type="link"
                      href="#">
                      <MailOutlined
                        className="footer_contain-icons"
                        alt="Icono de Email"
                      />
                    </Button>
                  </Popover>
                </Col>
              </Space>
            </Row>

            {/* Footer horizontal Mobile mode */}
            <Row className="footer-mobile" justify="center" align="middle">
              <Space size={30}>
                <Col>
                  <Button
                    className="footer_contain"
                    shape="circle"
                    type="link"
                    href="https://www.instagram.com/gonzaloyacante/"
                    target="blank">
                    <InstagramOutlined
                      className="footer_contain-icons"
                      alt="Icono de Instagram"
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="footer_contain"
                    ghost
                    shape="circle"
                    type="link"
                    href="https://github.com/GonzaloYacante"
                    target="blank">
                    <GithubOutlined
                      className="footer_contain-icons"
                      alt="Icono de GitHub"
                    />
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="footer_contain"
                    ghost
                    shape="circle"
                    type="link"
                    href="https://www.linkedin.com/in/gonzaloyacante/"
                    target="blank">
                    <LinkedinOutlined
                      className="footer_contain-icons"
                      alt="Icono de Linkedin"
                    />
                  </Button>
                </Col>
                <Col>
                  <Popover
                    placement="right"
                    content={content}
                    trigger="click">
                    <Button
                      className="footer_contain"
                      shape="circle"
                      type="link"
                      href="#">
                      <MailOutlined
                        className="footer_contain-icons"
                        alt="Icono de Email"
                      />
                    </Button>
                  </Popover>
                </Col>
              </Space>
            </Row>

            <Row justify="center" align="middle">
              <Text strong className="footer-copyright">
                2022 <CopyrightOutlined className="footer-copyright" /> Gonzalo
                Yacante
              </Text>
            </Row>
          </Space>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
