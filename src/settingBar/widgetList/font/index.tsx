import React from "react";
import "react-dropzone/examples/theme.css";
import FontFormatWidget from "./FontFormatWidget";
import FontColorWidget from "./FontColorWidget";
import FontTransformWidget from "./FontTransformWidget";
import TextEditWidget from "./TextEditWidget";

const FontWidget: React.FC = () => {
    return (
        <div>
            <TextEditWidget></TextEditWidget>
            <hr className="m-0"></hr>
        </div>
    );
};

export default FontWidget;
