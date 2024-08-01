import React, { RefObject } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import borderStyles from "../../style/border.module.css";
import TextEditorMenu from "./TextEditorMenu";

export type DefaultMenuProps = {
    historyIndex?: number;
    onClick: (reference: RefObject<HTMLDivElement>, itemType: DefaultMenuItemType) => void;
};

export enum DefaultMenuItemType {
    BackHistory = "back-history",
    ForwardHistory = "forward-history",
    HorizonalCenter = "horizontal-center",
    VerticalCenter = "vertical-center",
    LayerUp = "layer-up",
    LayerDown = "layer-down",
    Text = "text",
};

const DefaultMenu:React.FC<DefaultMenuProps> = ({historyIndex = 0, onClick}) => {
    const [ referenceMap, setReferenceMap ] = React.useState<{"":RefObject<React.ReactNode>}>({"":null});
    const refs = Object.values(DefaultMenuItemType).map(o => {
        return {
            itemType: o,
            reference: React.createRef<HTMLDivElement|null>(),
        };
    });
    const fontClasses = [
        {
            itemType: DefaultMenuItemType.BackHistory,
            font: "arrow-90deg-left",
        },
        {
            itemType: DefaultMenuItemType.ForwardHistory,
            font: "arrow-90deg-right",
        },
        {
            itemType: DefaultMenuItemType.HorizonalCenter,
            font: "align-center",
        },
        {
            itemType: DefaultMenuItemType.VerticalCenter,
            font: "align-middle",
        },
        {
            itemType: DefaultMenuItemType.LayerUp,
            font: "layer-forward",
        },
        {
            itemType: DefaultMenuItemType.LayerDown,
            font: "layer-backward",
        }
    ];

    const getReferenceByType = (itemType:DefaultMenuItemType) => {
        return refs.find(o => o.itemType === itemType).reference;
    };

    const renderMenu = () => {
        const nodes = [];
        for (let i = 0; i < fontClasses.length; i+=2) {
            nodes.push(
                <>
                    <div
                        className={[
                            "flex-1",
                            "d-flex",
                            "flex-row",
                            "justify-content-center",
                            "py-1"
                        ].join(" ")}
                    >
                        <div ref={getReferenceByType(fontClasses[i].itemType)} className="mx-1"><i className={"bi bi-" + fontClasses[i].font}></i></div>
                        <div ref={getReferenceByType(fontClasses[i].itemType)} className="mx-1"><i className={"bi bi-" + fontClasses[i+1].font}></i></div>
                    </div>
                    <hr style={{margin: "0"}}></hr>
                </>
            );
        }
        return nodes;
    };
    return (
        <div
            className={[
                "d-flex",
                "flex-column",
                "justify-content-center",
                borderStyles["roundBottomRightSM-5"],
            ].join(" ")}
            style={{backgroundColor: "#3D3D3D", color:"#E3E6E8", cursor: "pointer"}}
        >
            {renderMenu()}
            <div
                ref={getReferenceByType(DefaultMenuItemType.Text)}
                className={[
                    "flex-1",
                    "d-flex",
                    "flex-row",
                    "justify-content-center",
                    "p-1"
                ].join(" ")}
                onClick={() => onClick(getReferenceByType(DefaultMenuItemType.Text), DefaultMenuItemType.Text)}
            >
                <div className="px-1"><i className="bi bi-fonts"></i></div>
                <span style={{fontSize: "0.7rem", margin: "auto 0 auto 0"}}>Text</span>
            </div>
        </div>
    );
};

export default DefaultMenu;