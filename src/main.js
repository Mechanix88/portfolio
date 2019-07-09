import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/anchors";
import "./scripts/parallax";
import "./scripts/burger";
import "./scripts/reviews";
import "./scripts/mobile-popup";
import "./scripts/works";
