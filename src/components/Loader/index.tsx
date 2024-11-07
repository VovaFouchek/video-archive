import { CSSProperties } from "react";

import Spin from "antd/es/spin";

const contentStyle: CSSProperties = {
  padding: 50,
};

const innerStyle: CSSProperties = {
  display: "grid",
  placeContent: "center",
  height: "100%",
};

const content = <div style={contentStyle} />;

const Loader = () => {
  return (
    <div style={innerStyle}>
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </div>
  );
};

export default Loader;
