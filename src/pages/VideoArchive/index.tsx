import { useMemo, useState } from "react";

import Typography from "antd/es/typography";

import TopBar from "./components/TopBar";
import TableView from "./components/TableView";
import TileView from "./components/TileView";
import { mockVideo } from "@/shared/constants/data";
import { ViewMode } from "@/shared/constants";
import { TViewMode, IVideo, Filters } from "@/shared/types";
import useMessage from "@/hooks/useMessage";
import useModal from "@/hooks/useModal";
import useSelection from "@/hooks/useSelection";

import "./videoArchive.scss";

const VideoArchive = () => {
  const [viewMode, setViewMode] = useState<TViewMode>(ViewMode.TABLE);
  const [videos, setVideos] = useState<IVideo[]>(mockVideo);

  const [filters, setFilters] = useState<Filters>({
    videoType: null,
    group: "",
    dateRange: [null, null],
  });
  const [search, setSearch] = useState<string>("");

  const applyFilters = (filters: Filters) => {
    setFilters(filters);
  };

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      if (search && !video.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      if (filters.videoType && video.videoType !== filters.videoType) {
        return false;
      }

      if (filters.group && video.group !== filters.group) {
        return false;
      }

      if (filters.dateRange) {
        const [start, end] = filters.dateRange;
        const uploadDate = new Date(video.uploadedDate);
        if (start && uploadDate < new Date(start)) return false;
        if (end && uploadDate > new Date(end)) return false;
      }

      return true;
    });
  }, [videos, filters, search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const {
    selectedIdVideos,
    isAllSelected,
    handleSelectVideo,
    handleToggleSelectAll,
    clearSelection,
  } = useSelection(videos);

  const confirmDeleteVideos = () => {
    setVideos(videos.filter((video) => !selectedIdVideos.includes(video.id)));
    clearSelection();
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

  const handleDeleteVideos = () => {
    if (selectedIdVideos.length > 0) {
      handleShowModal();
    } else {
      showInfoMessage();
    }
  };

  return (
    <>
      <Typography.Title level={1} className="title">
        Video Archive
      </Typography.Title>

      <TopBar
        applyFilters={applyFilters}
        videosAmount={filteredVideos.length}
        selectedIdVideosAmount={selectedIdVideos.length}
        setViewMode={setViewMode}
        isAllSelected={isAllSelected}
        handleToggleSelectAll={handleToggleSelectAll}
        handleDeleteVideos={handleDeleteVideos}
        handleSearchChange={handleSearchChange}
      />

      {filteredVideos && filteredVideos.length > 0 ? (
        viewMode === ViewMode.TILE ? (
          <TileView
            videos={filteredVideos}
            selectedIdVideos={selectedIdVideos}
            handleSelectVideo={handleSelectVideo}
          />
        ) : (
          <TableView
            videos={filteredVideos}
            selectedIdVideos={selectedIdVideos}
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
