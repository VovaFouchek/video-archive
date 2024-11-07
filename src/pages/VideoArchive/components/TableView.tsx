import Table, { ColumnsType, TableProps } from "antd/es/table";

import { dateSorter, stringSorter } from "@/shared/helpers/sorting";
import { IVideo } from "@/shared/types";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

const columns: ColumnsType<IVideo> = [
  {
    title: "Video name",
    dataIndex: "title",
    key: "title",
    width: "25%",
  },
  {
    title: "Group name",
    dataIndex: "group",
    key: "group",
    width: "20%",
    align: "center",
    sorter: (videoA, videoB) => stringSorter(videoA.group, videoB.group),
  },
  {
    title: "Date uploaded",
    dataIndex: "uploadedDate",
    width: "20%",
    key: "uploadedDate",
    align: "center",
    sorter: (videoA, videoB) =>
      dateSorter(videoA.uploadedDate, videoB.uploadedDate),
  },
  {
    title: "Last updated",
    dataIndex: "lastUpdated",
    width: "20%",
    key: "lastUpdated",
    align: "center",
    sorter: (videoA, videoB) =>
      dateSorter(videoA.uploadedDate, videoB.uploadedDate),
  },
  {
    title: "Uploaded by",
    dataIndex: "uploadedBy",
    width: "20%",
    key: "uploadedBy",
    align: "center",
    sorter: (videoA, videoB) => stringSorter(videoA.group, videoB.group),
  },
];

interface TableViewProps {
  videos: IVideo[];
  selectedVideos: string[];
  handleSelectVideo: (id: string) => void;
  handleToggleSelectAll: () => void;
}

const TableView = ({
  videos,
  selectedVideos,
  handleSelectVideo,
  handleToggleSelectAll,
}: TableViewProps) => {
  const rowSelection: TableRowSelection<IVideo> = {
    onSelect: (record) => {
      handleSelectVideo(record.id);
    },
    onSelectAll: () => {
      handleToggleSelectAll();
    },
  };

  return (
    <div>
      <Table<IVideo>
        columns={columns}
        dataSource={videos}
        rowSelection={{ ...rowSelection, selectedRowKeys: selectedVideos }}
        pagination={{
          position: ["bottomCenter"],
          defaultPageSize: 5,
        }}
        rowKey="id"
        size="small"
      />
    </div>
  );
};

export default TableView;
