import { ViewMode } from "../constants";

export type TViewMode = (typeof ViewMode)[keyof typeof ViewMode];

type VideoType = "Video File" | "Live Stream" | "Recording";

export interface IVideo {
  id: string;
  title: string;
  videoType: VideoType;
  group: string;
  uploadedDate: string; // (ISO format: YYYY-MM-DD)
  lastUpdated: string;
  uploadedBy: string;
  thumbnailUrl: string;
  isProcessing?: boolean;
  tags?: string[];
}

export type NotificationType = "success" | "error" | "warning" | "info";

export interface Filters {
  videoType: VideoType | null;
  group: string;
  dateRange: [string | null, string | null];
}
