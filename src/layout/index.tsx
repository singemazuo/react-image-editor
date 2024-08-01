import React, { MutableRefObject } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sizeStyles from "../style/size.module.css";
import colorStyles from "../style/color.module.css";
import alignStyles from "../style/align.module.css";
import positionStyles from "../style/position.module.css";
import overflowStyles from "../style/overflow.module.css";
import themeStyles from "../style/theme.module.css";
import { ClipartDrawer } from "../settingBar/drawer";
import WidgetSideBar, { SubmenuType } from "../settingBar/sideBar";
import { SettingSideBar } from "../settingBar";

type LayoutProps = {
  header?: React.ReactNode;
  navBar?: React.ReactNode;
  settingBar?: React.ReactNode;
  footer?: React.ReactNode;
  subMenu?: (target:MutableRefObject<HTMLElement|null>) => React.ReactNode;
  children: React.ReactNode;
};

const commonStyle = {
  backgroundColor: '#E3E6E8',
};

const Layout: React.FC<LayoutProps> = ({
  header,
  navBar,
  settingBar,
  children,
  footer,
  subMenu,
}) => {
  const [ show, setShow ] = React.useState(true);
  const [ activeMenu, setActiveMenu ] = React.useState(SubmenuType.Default);
  const target = React.useRef(null);
  return(
    <div
      className={[sizeStyles.height100, sizeStyles.width100, overflowStyles.hide].join(" ")}
    >
      {header && (
        <Row
          xs={12}
          className={[
            sizeStyles.height5,
            positionStyles.relative,
            positionStyles.zIndex1,
          ].join(" ")}
        >
          {header}
        </Row>
      )}
      <Row
        xs={12}
        className={[
          sizeStyles.height90,
          positionStyles.relative,
          positionStyles.zIndex1,
        ].join(" ")}
      >
        <div className="d-flex">
          <div
            ref={target}
            className={[
              sizeStyles.height100,
              alignStyles.fromTopCenter,
              themeStyles["setting-bar"],
              "px-1",
              "flex-1",
            ].join(" ")}
          >
            {settingBar}
          </div>
          {subMenu(target)}
          <div 
            className={[
              "flex-1",
              sizeStyles.width100,
              sizeStyles.height100,
              positionStyles.relative,
              colorStyles.greyTheme,
            ].join(" ")}
          >
            {children}
          </div>
          <div
            className={[
              "flex-1",
              "justify-content-end",
              sizeStyles.height100,
              positionStyles.relative,
              positionStyles.zIndex1,
            ].join(" ")}
            style={commonStyle}
          >
            {navBar}
          </div>
        </div>
        {/* <Col
          xs="auto"
          ref={target}
          className={[
            sizeStyles.widthLogo,
            sizeStyles.height100,
            alignStyles.fromTopCenter,
            themeStyles["setting-bar"]
          ].join(" ")}
        >
          {settingBar}
        </Col>
        <Col
          className={[
            "h-100",
            positionStyles.relative,
            colorStyles.greyTheme,
          ].join(" ")}
        >
          {children}
        </Col>
        <Col
          xs="auto"
          className={[
            sizeStyles.height100,
            positionStyles.relative,
            positionStyles.zIndex1,
          ].join(" ")}
          style={commonStyle}
        >
          {navBar}
        </Col> */}
      </Row>
      {footer && (
        <Row
          xs={12}
          className={[
            colorStyles.darkTheme,
            sizeStyles.height10,
            alignStyles.fromStartCenter,
            positionStyles.relative,
            positionStyles.zIndex1,
          ].join(" ")}
        >
          {footer}
        </Row>
      )}
    </div>
  );
};

export default Layout;
