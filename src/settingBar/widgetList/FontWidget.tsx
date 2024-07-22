import React, { useState, useCallback } from "react";
import useI18n from "../../hook/usei18n";
import positionStyles from "../../style/position.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import "react-dropzone/examples/theme.css";

export const IMAGE_LIST_KEY = "importedImage";

const FontWidget: React.FC = () => {
  const { getTranslation } = useI18n();
  const [value, setValue] = useState("");

  return (
    <div
      className={[
        positionStyles["toolbar-section-container"],
        positionStyles["toolbar-section-container-button"],
      ].join(" ")}
    >
      <h6 className={[positionStyles["toolbar-section-h6"]].join(" ")}>
        {getTranslation("widget", "font", "name")}
      </h6>
      <Dropdown className={[positionStyles["toolbar-section-h6"]].join(" ")}>
        <Dropdown.Toggle as="div" className="toolbar-section-dropdown-toggle">
          Helvetica
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">1</Dropdown.Item>
          <Dropdown.Item href="#">2</Dropdown.Item>
          <Dropdown.Item href="#">3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FontWidget;
