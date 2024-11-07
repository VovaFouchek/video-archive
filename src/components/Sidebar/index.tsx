import { useNavigate } from "react-router-dom";
import Menu, { MenuProps } from "antd/es/menu";
import {
  VideoCameraFilled,
  LineChartOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import ROUTERS from "@/shared/constants/routers";
import ProfileCard from "../ProfileCard";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: ROUTERS.DASHBOARD,
    label: "Dashboard",
    icon: <MenuUnfoldOutlined />,
  },
  {
    key: "video",
    label: "Video",
    icon: <VideoCameraFilled />,
    children: [
      {
        key: ROUTERS.ADD_VIDEO,
        label: "Add Video",
      },
      {
        key: ROUTERS.BASE,
        label: "Video Archive",
      },
    ],
  },
  {
    key: "analytics",
    label: "Analytics",
    icon: <LineChartOutlined />,
    children: [
      { key: ROUTERS.VIDEO_LIBRARY, label: "Video Library" },
      { key: ROUTERS.STATS, label: "Stats" },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (event) => {
    navigate(event.key);
  };

  return (
    <>
      <Menu
        items={items}
        mode="inline"
        onClick={handleClick}
        defaultSelectedKeys={["video-archive"]}
        defaultOpenKeys={["video", "analytics"]}
        style={{ flex: "auto", minWidth: 0 }}
      />
      <ProfileCard
        name="Lady Bug"
        email="lady@bug.com"
        avatarUrl="/src/assets/Avatar.jpg"
        handleLogOut={() => console.log("Log out")}
      />
    </>
  );
};

export default Sidebar;
