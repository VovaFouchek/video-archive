import { CSSProperties } from "react";

import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import Button from "antd/es/button";
import Flex from "antd/es/flex";
import Input from "antd/es/input";
import Popover from "antd/es/popover";

import FilterBar from "@/components/FilterBar";
import { Filters } from "@/shared/types";

const popOverStyles: CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  background: "#fff",
  width: "350px",
};

interface FilterProps {
  applyFilters: (filters: Filters) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ applyFilters, handleSearchChange }: FilterProps) => {
  return (
    <Flex gap={10}>
      <Input
        id="search"
        placeholder="Search videos..."
        onChange={handleSearchChange}
        allowClear
        style={{ width: "360px" }}
        prefix={<SearchOutlined style={{ color: "#8c8c8c" }} />}
      />
      <Popover
        content={<FilterBar onApplyFilters={applyFilters} />}
        placement="bottomRight"
        trigger="click"
        style={popOverStyles}
      >
        <Button
          type="text"
          icon={<FilterOutlined style={{ color: "#8c8c8c" }} />}
        />
      </Popover>
    </Flex>
  );
};

export default Filter;
