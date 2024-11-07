import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Flex from "antd/es/flex";
import Button from "antd/es/button";

import ActionButtons from "@/components/ActionButtons";
import { ViewMode } from "@/shared/constants";
import useMessage from "@/hooks/useMessage";
import { TViewMode } from "@/shared/types";

import Filter from "./Filter";

interface TopBarProps {
  videosAmount: number;
  selectedVideosAmount: number;
  isAllSelected: boolean;
  setViewMode: (mode: TViewMode) => void;
  handleToggleSelectAll: () => void;
  handleDeleteVideos: () => void;
}

const TopBar = ({
  videosAmount,
  selectedVideosAmount,
  setViewMode,
  isAllSelected,
  handleToggleSelectAll,
  handleDeleteVideos,
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
        selectedVideosAmount={selectedVideosAmount}
        isAllSelected={isAllSelected}
        onSelectAll={() => handleToggleSelectAll()}
        onDownload={() => selectedVideosAmount > 0 && showInfoMessage()}
        onDelete={() => handleDeleteVideos()}
      />
      <Flex gap={20}>
        <Filter />
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
