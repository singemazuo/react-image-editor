import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sizeStyles from "../style/size.module.css";
import colorStyles from "../style/color.module.css";
import alignStyles from "../style/align.module.css";
import positionStyles from "../style/position.module.css";
import spaceStyles from "../style/space.module.css";
import overflowStyles from "../style/overflow.module.css";
import { ClipartDrawer } from "../settingBar/drawer";

type LayoutProps = {
  header?: React.ReactNode;
  navBar?: React.ReactNode;
  settingBar?: React.ReactNode;
  footer?: React.ReactNode;
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
}) => {
  const [ show, setShow ] = React.useState(true);
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
        <Col
          xs="4"
          ref={target}
          className={[
            colorStyles.darkTheme,
            sizeStyles.widthLogo,
            sizeStyles.height100,
            alignStyles.fromTopCenter,
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
        </Col>
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
      <ClipartDrawer show={show} target={target}></ClipartDrawer>
    </div>
  );
};

export default Layout;
