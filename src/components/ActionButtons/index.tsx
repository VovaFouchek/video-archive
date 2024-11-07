import Button from "antd/es/button";
import Flex from "antd/es/flex";
import {
  DeleteOutlined,
  DownloadOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";

interface ActionButtonsProps {
  videosAmount: number;
  selectedVideosAmount: number;
  isAllSelected: boolean;
  onSelectAll: () => void;
  onDownload: () => void;
  onDelete: () => void;
}

const ActionButtons = ({
  videosAmount,
  selectedVideosAmount,
  isAllSelected,
  onSelectAll,
  onDownload,
  onDelete,
}: ActionButtonsProps) => {
  const shouldDisableActions = videosAmount === 0 || selectedVideosAmount === 0;

  return (
    <Flex gap={10}>
      <Button
        onClick={onSelectAll}
        disabled={videosAmount === 0}
        icon={!isAllSelected ? <PlusOutlined /> : <MinusOutlined />}
      >
        {!isAllSelected ? "Select All" : "Unselect All"}
      </Button>
      <Button
        onClick={onDownload}
        disabled={shouldDisableActions}
        icon={<DownloadOutlined />}
      >
        Download
      </Button>
      <Button
        onClick={onDelete}
        disabled={shouldDisableActions}
        icon={<DeleteOutlined />}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default ActionButtons;
