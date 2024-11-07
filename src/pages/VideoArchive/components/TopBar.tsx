import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Flex from "antd/es/flex";
import Button from "antd/es/button";

import ActionButtons from "@/components/ActionButtons";
import { ViewMode } from "@/shared/constants";
import useMessage from "@/hooks/useMessage";
import { Filters, TViewMode } from "@/shared/types";

import Filter from "./Filter";

interface TopBarProps {
  videosAmount: number;
  selectedIdVideosAmount: number;
  isAllSelected: boolean;
  setViewMode: (mode: TViewMode) => void;
  handleToggleSelectAll: () => void;
  handleDeleteVideos: () => void;
  applyFilters: (filters: Filters) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopBar = ({
  videosAmount,
  selectedIdVideosAmount,
  setViewMode,
  isAllSelected,
  handleToggleSelectAll,
  handleDeleteVideos,
  applyFilters,
  handleSearchChange,
}: TopBarProps) => {
  const handleTileViewMode = () => setViewMode(ViewMode.TILE);
  const handleTableViewMode = () => setViewMode(ViewMode.TABLE);

  const { showInfoMessage } = useMessage({
    type: "success",
    content: "Download successfully!",
  });

  return (
    <Flex
      justify="space-between"
      gap={30}
      wrap
      style={{ marginBottom: "15px" }}
    >
      <ActionButtons
        videosAmount={videosAmount}
        selectedIdVideosAmount={selectedIdVideosAmount}
        isAllSelected={isAllSelected}
        onSelectAll={() => handleToggleSelectAll()}
        onDownload={() => selectedIdVideosAmount > 0 && showInfoMessage()}
        onDelete={() => handleDeleteVideos()}
      />
      <Flex gap={20}>
        <Filter
          applyFilters={applyFilters}
          handleSearchChange={handleSearchChange}
        />
        <div>
          <Button
            type="text"
            onClick={handleTableViewMode}
            icon={<UnorderedListOutlined style={{ color: "#8c8c8c" }} />}
          />
          <Button
            type="text"
            onClick={handleTileViewMode}
            icon={<AppstoreOutlined style={{ color: "#8c8c8c" }} />}
          />
        </div>
      </Flex>
    </Flex>
  );
};
export default TopBar;
