import { EventName } from "../../config/constants";
import useEvent from "../../hook/useEvent";
import { TabKind } from "../../tab/Tab";
import "./index.css";
import React, { CSSProperties } from "react";

export type ProductSelectProps = {
    items: TabKind[];
    style?: CSSProperties;
};

const ProductSelect: React.FC<ProductSelectProps> = ({items, style}) => {
    return (
        <div style={style}>
            Test
        </div>
    );
};

export default ProductSelect;