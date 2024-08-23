import React from "react";
import FontFormatWidget from "./FontFormatWidget";
import "./TextEditWidget.css";

const TextEditWidget = () => {
    const [ show, toggleShow ] = React.useState(false);
    
    return (
        <>
            <div className="text-accordion" onClick={() => toggleShow(!show)}>
                <h2>Text</h2>
                <span className="i-plus">{show ? "-":"+"}</span>
            </div>
            {show && <FontFormatWidget className="mt-1"></FontFormatWidget>}
        </>
    );
};

export default TextEditWidget;