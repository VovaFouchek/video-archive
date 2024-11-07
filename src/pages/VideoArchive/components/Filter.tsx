import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import Button from "antd/es/button";
import Flex from "antd/es/flex";
import Input from "antd/es/input";

const Filter = () => {
  const handleOpenFilterDrawer = () => {};

  return (
    <Flex gap={10}>
      <Input
        id="search"
        placeholder="Search..."
        style={{ width: "360px" }}
        prefix={<SearchOutlined style={{ color: "#8c8c8c" }} />}
      />
      <Button
        type="text"
        onClick={handleOpenFilterDrawer}
        icon={<FilterOutlined style={{ color: "#8c8c8c" }} />}
      />
    </Flex>
  );
};

export default Filter;
