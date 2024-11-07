import { Link } from "react-router-dom";

import Typography from "antd/es/typography";
import Button from "antd/es/button";

import ROUTERS from "@shared/constants/routers";

const NotFound = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Typography.Title level={1} style={{ marginBottom: "30px" }}>
        Oops... page not found
      </Typography.Title>

      <Link to={ROUTERS.BASE} relative="path">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
