import React from "react";
import { Accordion, Offcanvas } from "react-bootstrap";
import { Node, NodeConfig } from "konva/lib/Node";
import Widget, { WidgetKind } from "./Widget";
import widgetList from "../config/widget.json";
import FrameWidget from "./widgetList/FrameWidget";
import ImageWidget from "./widgetList/ImageWidget";
import ColorPaletteWidget from "./widgetList/ColorPaletteWidget";
import TextWidget from "./widgetList/TextWidget";
import AlignWidget from "./widgetList/AlignWidget";
import ExportWidget from "./widgetList/ExportWidget";
import useSelection from "../hook/useSelection";
import useStage from "../hook/useStage";
import ShapeWidget from "./widgetList/ShapeWidget";
import IconWidget from "./widgetList/IconWidget";
import LineWidget from "./widgetList/LineWidget";
import ClipartWidget from "./widgetList/ClipartWidget";
import FontWidget from "./widgetList/FontWidget";
import ListGroup from "react-bootstrap/ListGroup";
import { ClipartDrawer } from "./drawer";

export type SettingBarProps = {
  selectedItems: Node<NodeConfig>[];
  clearSelection: ReturnType<typeof useSelection>["clearSelection"];
  stageRef: ReturnType<typeof useStage>["stageRef"];
};

const Widgets = {
  colorPalette: (data: WidgetKind & SettingBarProps) => (
    <ColorPaletteWidget data={data} />
  ),
  clipart: (data: WidgetKind & SettingBarProps) => <ClipartWidget />,
  font: (data: WidgetKind & SettingBarProps) => <FontWidget />,
  align: (data: WidgetKind & SettingBarProps) => <AlignWidget data={data} />,
  image: (data: WidgetKind & SettingBarProps) => <ImageWidget />,
  frame: (data: WidgetKind & SettingBarProps) => <FrameWidget />,
  shape: (data: WidgetKind & SettingBarProps) => <ShapeWidget />,
  text: (data: WidgetKind & SettingBarProps) => <TextWidget />,
  line: (data: WidgetKind & SettingBarProps) => <LineWidget />,
  icon: (data: WidgetKind & SettingBarProps) => <IconWidget />,
  export: (data: WidgetKind & SettingBarProps) => <ExportWidget data={data} />,
};

export type WidgetIDList = keyof typeof Widgets;

const SettingBar: React.FC<SettingBarProps> = (settingProps) => {
  return (
    <>
      <aside>
        <div>
          {(widgetList as WidgetKind[]).map((data, index) => (
            <div>
              {Widgets[data.id] && Widgets[data.id]({ ...data, ...settingProps })}
              {widgetList.length - 1 !== index && <hr />}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default SettingBar;
