import React from "react";
import { IFontSettings } from "./IFontSettings";
import { div } from "@tensorflow/tfjs-core";
import { Dropdown } from "react-bootstrap";

const FontFormatWidget = ({ className }) => {
    const [alignment, setAlignment] = React.useState('left');
    const [fontSettings, setFontSettings] = React.useState<IFontSettings>({
        font: 'Helvetica',
        size: 19,
        alignment: 'left',
    });
    const [font, setFont] = React.useState("Helvetica");
    
    const handleAlignmentChange = (align: string) => {
        setAlignment(align);
    };
    return (
        <div className={className}>
            <div className="mb-3" style={{ padding: '0 15px' }}>
                <label className="form-label" style={{textAlign: 'left', width: '100%'}}>Font</label>
                <Dropdown as="div">
                    <Dropdown.Toggle as="div">{font}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item active>Helvetica</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3" style={{ padding: '0 15px' }}>
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
        </div>
    );
};

export default FontFormatWidget;