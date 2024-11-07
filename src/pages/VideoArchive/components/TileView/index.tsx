import { SettingFilled } from "@ant-design/icons";
import Checkbox from "antd/es/checkbox";
import Button from "antd/es/button";

import { IVideo } from "@/shared/types";
import fallbackImage from "/public/images/videoCamera.svg";

import "./tileView.scss";

interface TileViewProps {
  videos: IVideo[];
  selectedIdVideos: string[];
  handleSelectVideo: (id: string) => void;
  onEdit?: (id: string) => void;
}

// const fallbackImage = "/src/assets/videoCamera.svg";

const TileView = ({
  videos,
  selectedIdVideos,
  handleSelectVideo,
}: TileViewProps) => {
  return (
    <div className="tile">
      {videos.map((video) => (
        <div key={video.id} className="tile__item">
          <div className="tile__top">
            <Checkbox
              id={video.id}
              checked={selectedIdVideos.includes(video.id)}
              onChange={() => handleSelectVideo(video.id)}
              style={{ background: "#fff" }}
            />
            <span className="tile__title">{video.title || "Video name"}</span>
            <Button
              type="text"
              icon={<SettingFilled style={{ color: "#8c8c8c" }} />}
            />
          </div>
          <div className="tile__image">
            <img src={video.thumbnailUrl || fallbackImage} alt={video.title} />
          </div>
          <span>{video.group || "Group name"}</span>
        </div>
      ))}
    </div>
  );
};

export default TileView;
