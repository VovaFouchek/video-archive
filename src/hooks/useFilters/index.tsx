import { Filters, IVideo } from "@/shared/types";
import { useMemo, useState, useCallback } from "react";

const useFilters = (videos: IVideo[]) => {
  const [filters, setFilters] = useState<Filters>({
    videoType: null,
    group: "",
    dateRange: [null, null],
  });
  const [search, setSearch] = useState<string>("");

  const applyFilters = useCallback((filters: Filters) => {
    setFilters(filters);
  }, []);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

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

  return { filteredVideos, applyFilters, handleSearchChange };
};

export default useFilters;
