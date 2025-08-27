import { Button, Card, Divider, Flex, Space, theme, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Title } = Typography;
const { useToken } = theme;

const RightSide = () => {
  const navigate = useNavigate();
  const token = useToken();
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        background: "transparent",
        padding: 0,
        height: "100%",
        width: "100%",
        border: 0,
        flexDirection: "column",
      }}
    >
      <Outlet />
    </Flex>
  );
};

export default RightSide;
