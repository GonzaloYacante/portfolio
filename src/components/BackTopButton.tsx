import { BackTop } from "antd";

import { ArrowUpOutlined } from "@ant-design/icons";

function BackTopButton() {
  return (
    <div>
      {/* Clase definida en archivo global.less */}
      <BackTop className="BackTopButton">
        <ArrowUpOutlined />
      </BackTop>
    </div>
  );
}

export default BackTopButton;
