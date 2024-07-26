import React, { useState, useCallback } from "react";
import useI18n from "../../hook/usei18n";
import positionStyles from "../../style/position.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import "react-dropzone/examples/theme.css";

interface FontSettings {
  font: string;
  size: number;
  alignment: 'left' | 'center' | 'right';
}

export const IMAGE_LIST_KEY = "importedImage";

const FontWidget: React.FC = () => {
  const { getTranslation } = useI18n();
  const [fontSize, setFontSize] = useState(13);
  const [alignment, setAlignment] = useState('left');
  const [rotation, setRotation] = useState<number>(25);
  const [fontSettings, setFontSettings] = useState<FontSettings>({
    font: 'Helvetica',
    size: 19,
    alignment: 'left',
  });

  const handleAlignmentChange = (align: string) => {
    setAlignment(align);
  };

  return (
    <div
      className={[
        positionStyles["toolbar-section-container"],
        positionStyles["toolbar-section-container-button"],
      ].join(" ")}
    >
      {/* <h6 className={[positionStyles["toolbar-section-h6"]].join(" ")}>
        {getTranslation("widget", "font", "name")}
      </h6> */}
      <div className="mb-3">
        <label className="form-label">Font</label>
        <select 
          className="form-select bg-dark text-light"
          value={fontSettings.font}
          onChange={(e) => setFontSettings({...fontSettings, font: e.target.value})}
        >
          <option>Helvetica</option>
        </select>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input 
          type="number" 
          className="form-control bg-dark text-light" 
          style={{ width: '60px' }}
          value={fontSettings.size}
          onChange={(e) => setFontSettings({...fontSettings, size: parseInt(e.target.value)})}
        />
        <div className="btn-group">
          <button className="btn btn-outline-light btn-sm" onClick={() => setFontSettings({...fontSettings, alignment: 'left'})}>
            <i className="bi bi-text-left"></i>
          </button>
          <button className="btn btn-outline-light btn-sm" onClick={() => setFontSettings({...fontSettings, alignment: 'center'})}>
            <i className="bi bi-text-center"></i>
          </button>
          <button className="btn btn-outline-light btn-sm" onClick={() => setFontSettings({...fontSettings, alignment: 'right'})}>
            <i className="bi bi-text-right"></i>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div>
          <label className="form-label">Fill</label>
          <div className="d-flex align-items-center">
            <div className="bg-white me-2" style={{ width: '20px', height: '20px' }}></div>
            <i className="bi bi-type"></i>
          </div>
        </div>
        <div>
          <label className="form-label">Outline</label>
          <div className="d-flex align-items-center">
            <div className="border border-light me-2" style={{ width: '20px', height: '20px' }}></div>
            <span>None</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Rotation</label>
        <input 
          type="range" 
          className="form-range" 
          min="0" 
          max="360" 
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value))}
        />
      </div>

      <button className="btn btn-secondary w-100">
        <i className="bi bi-people me-2"></i>Add Team Names
      </button>
    </div>
  );
};

export default FontWidget;
