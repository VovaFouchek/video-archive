import Avatar from "antd/es/avatar";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Typography from "antd/es/typography";

import { LoginOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface ProfileCardProps {
  name: string;
  email: string;
  avatarUrl: string;
  handleLogOut: () => void;
}

const profileDefaultImage = "/src/assets/profileDefault.svg";

const ProfileCard = ({
  name,
  email,
  avatarUrl,
  handleLogOut,
}: ProfileCardProps) => {
  return (
    <Card bordered={false} style={{ borderRadius: "0", boxShadow: "none" }}>
      <Avatar src={avatarUrl || profileDefaultImage} size={40} alt="avatar" />
      <div style={{ marginLeft: "16px", flex: 1 }}>
        <Title level={5} style={{ margin: 0 }}>
          {name || "Unknown person"}
        </Title>
        <Text type="secondary">{email}</Text>
      </div>

      <Button type="text" icon={<LoginOutlined />} onClick={handleLogOut} />
    </Card>
  );
};

export default ProfileCard;
