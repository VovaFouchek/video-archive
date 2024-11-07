import { useState } from "react";

import Typography from "antd/es/typography";

import TopBar from "./components/TopBar";
import TableView from "./components/TableView";
import TileView from "./components/TileView";
import { mockVideo } from "@/shared/constants/data";
import { ViewMode } from "@/shared/constants";
import { TViewMode, IVideo } from "@/shared/types";
import useMessage from "@/hooks/useMessage";
import useModal from "@/hooks/useModal";

import "./videoArchive.scss";

const VideoArchive = () => {
  const [viewMode, setViewMode] = useState<TViewMode>(ViewMode.TABLE);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]); //! video ids
  const [videos, setVideos] = useState<IVideo[]>(mockVideo);

  const confirmDeleteVideos = () => {
    setVideos(videos.filter((video) => !selectedVideos.includes(video.id)));
    setSelectedVideos([]);
  };

  const { handleShowModal } = useModal({
    title: "Delete videos",
    content:
      "Are you sure you want to delete this video? This action cannot be undone.",
    handleConfirmed: confirmDeleteVideos,
  });

  const { showInfoMessage } = useMessage({
    type: "warning",
    content: "Please select at least one video to delete",
  });

  const isAllSelected =
    videos.length > 0 && selectedVideos.length === videos.length;

  const handleSelectVideo = (id: string) => {
    if (selectedVideos.includes(id)) {
      setSelectedVideos(
        selectedVideos.filter((videoId: string) => videoId !== id)
      );
    } else {
      setSelectedVideos([...selectedVideos, id]);
    }
  };

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedVideos([]);
    } else {
      setSelectedVideos(videos.map((video) => video.id));
    }
  };

  const handleDeleteVideos = () => {
    if (selectedVideos.length > 0) {
      handleShowModal();
    } else {
      showInfoMessage();
    }
  };

  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: "30px" }}>
        Video Archive
      </Typography.Title>

      <TopBar
        videosAmount={videos.length}
        selectedVideosAmount={selectedVideos.length}
        setViewMode={setViewMode}
        isAllSelected={isAllSelected}
        handleToggleSelectAll={handleToggleSelectAll}
        handleDeleteVideos={handleDeleteVideos}
      />

      {videos && videos.length > 0 ? (
        viewMode === ViewMode.TILE ? (
          <TileView
            videos={videos}
            selectedVideos={selectedVideos}
            handleSelectVideo={handleSelectVideo}
          />
        ) : (
          <TableView
            videos={videos}
            selectedVideos={selectedVideos}
            handleSelectVideo={handleSelectVideo}
            handleToggleSelectAll={handleToggleSelectAll}
          />
        )
      ) : (
        <div className="inner">
          <Typography.Title level={3}>No videos available</Typography.Title>
        </div>
      )}
    </>
  );
};

export default VideoArchive;
