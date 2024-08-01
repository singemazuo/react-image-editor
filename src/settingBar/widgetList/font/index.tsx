import React from "react";
import "react-dropzone/examples/theme.css";
import FontFormatWidget from "./FontFormatWidget";
import FontColorWidget from "./FontColorWidget";
import FontTransformWidget from "./FontTransformWidget";

const FontWidget: React.FC = () => {
    return (
        <div>
            <FontFormatWidget className="mt-1"></FontFormatWidget>
            <hr className="m-0"></hr>
            <FontColorWidget className="mt-1"></FontColorWidget>
            <hr className="m-0"></hr>
            <FontTransformWidget className="mt-1"></FontTransformWidget>
            <hr className="m-0"></hr>
        </div>
    );
};

export default FontWidget;
