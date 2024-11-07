import { Filters, IVideo } from "@/shared/types";
import { useDebounce } from "use-debounce";
import { useMemo, useState, useCallback } from "react";

const DEBOUNCE_DELAY = 400;

export const useFilters = (videos: IVideo[]) => {
  const [filters, setFilters] = useState<Filters>({
    videoType: null,
    group: "",
    dateRange: [null, null],
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [deferredQuery] = useDebounce(searchQuery, DEBOUNCE_DELAY);

  const applyFilters = useCallback((filters: Filters) => {
    setFilters(filters);
  }, []);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      if (
        deferredQuery &&
        !video.title.toLowerCase().includes(deferredQuery.toLowerCase())
      ) {
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
  }, [videos, filters, deferredQuery]);

  return { filteredVideos, applyFilters, handleSearchChange };
};
