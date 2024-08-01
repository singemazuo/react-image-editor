import React, { forwardRef, MutableRefObject, RefObject } from "react";
import { Accordion, Container, Offcanvas } from "react-bootstrap";
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
import FontWidget from "./widgetList/font";
import ListGroup from "react-bootstrap/ListGroup";
import ClipartMenu from "./sideBar/ClipartMenu";
import DefaultMenu, { DefaultMenuItemType } from "./sideBar/DefaultMenu";
import WidgetSideBar, { SubmenuType } from "./sideBar";
import TeamNamesWidget from "./widgetList/teamNames";
import TextEditorMenu from "./sideBar/TextEditorMenu";

export type SettingBarProps = {
  selectedItems: Node<NodeConfig>[];
  clearSelection: ReturnType<typeof useSelection>["clearSelection"];
  stageRef: ReturnType<typeof useStage>["stageRef"];
  onSubmenuClick?: (menu: SubmenuType) => void;
};

export type SettingSideBarProps = {
  menu: SubmenuType;
  target: MutableRefObject<HTMLElement|null>;
};

const Widgets = {
  colorPalette: (data: WidgetKind & SettingBarProps) => (
    <ColorPaletteWidget data={data} />
  ),
  teamNames: (data: WidgetKind & SettingBarProps) => (<TeamNamesWidget />),
  clipart: (data: WidgetKind & SettingBarProps) => <ClipartWidget data-id="clipart" onClick={() => data.onSubmenuClick(SubmenuType.Clipart)}/>,
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

export const SettingSideBar = forwardRef<HTMLDivElement, SettingSideBarProps>((props, ref) => {
  const [ subSettingSideBar, setSubSettingSideBar ] = React.useState(null);
  const [ subSettingSideBarRef, setSubSettingSideBarRef ] = React.useState<RefObject<HTMLDivElement>>(null);
  const { menu, target } = props;

  const renderSubSettingSideBar = () => {
    let className = "";
    if(subSettingSideBar !== null && subSettingSideBar === DefaultMenuItemType.Text){
      className = "text-editor-menu";
    }
    // todo: add TextEditorMenu
    // return (<TextEditorMenu className={className}/>);
    return <></>;
  };
  return (
    <>
      <WidgetSideBar ref={ref} target={target} activeMenu={menu} onDefaultMenuClick={(reference, itemType) => {
        setSubSettingSideBar(itemType);
        setSubSettingSideBarRef(reference);
      }}>
      </WidgetSideBar>
      {subSettingSideBar && (renderSubSettingSideBar())}
    </>
  );
});

const SettingBar = forwardRef<any,SettingBarProps>((settingProps, ref) => {
  return (
    <div ref={ref}>
      {(widgetList as WidgetKind[]).map((data) => (
        <div>
          {Widgets[data.id] && Widgets[data.id]({ ...data, ...settingProps })}
        </div>
      ))}
    </div>
  );
});

export default SettingBar;
