import { useState } from "react";

const useSelection = (videos: { id: string }[]) => {
  const [selectedIdVideos, setSelectedIdVideos] = useState<string[]>([]);

  const isAllSelected =
    videos.length > 0 && selectedIdVideos.length === videos.length;

  const handleSelectVideo = (id: string) => {
    setSelectedIdVideos((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((videoId) => videoId !== id)
        : [...prevSelected, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIdVideos([]);
    } else {
      setSelectedIdVideos(videos.map((video) => video.id));
    }
  };

  const clearSelection = () => {
    setSelectedIdVideos([]);
  };

  return {
    selectedIdVideos,
    isAllSelected,
    handleSelectVideo,
    handleToggleSelectAll,
    clearSelection,
  };
};

export default useSelection;
