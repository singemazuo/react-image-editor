import React from "react";
import Tab, { TabKind } from "./Tab";
import { Button, Nav, Image } from "react-bootstrap";
import colorStyles from "../style/color.module.css";
import borderStyles from "../style/border.module.css";
import displayStyles from "../style/display.module.css";
import sizeStyles from "../style/size.module.css";
import spaceStyles from "../style/space.module.css";
import fontStyles from "../style/font.module.css";
import alignStyles from "../style/align.module.css";
import positionStyles from "../style/position.module.css";

class FooterTab extends Tab {
  render() {
    const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.onDeleteTab(this.props.data.id);
    };
    return (
      <Nav.Item as="div" key={`tab-${this.props.data.id}`}>
        <Nav.Link
          eventKey={this.props.data.id}
          className={[
            this.props.data.active
              ? colorStyles.greyTheme
              : colorStyles.whiteTheme,
            borderStyles.roundSM,
            fontStyles.fontHalf1em,
            this.props.data.active ? borderStyles.colorDark : borderStyles.none,
          ].join(" ")}
          data-file-id={this.props.data.id}
          data-active={this.props.data.active}
          onClick={this.props.onClickTab}
        >
          <Button
            className={[
              colorStyles.transparentDarkColorTheme,
              borderStyles.none,
              displayStyles["inline-block"],
              sizeStyles.width25,
              spaceStyles.p0,
              spaceStyles.ml1rem,
              alignStyles["text-left"],
              positionStyles["foot-nav-item-close"],
            ].join(" ")}
            onClick={onDelete}
          >
            <i className="bi-x-circle-fill" />
          </Button>
          <Image src={this.props.data.preview} rounded />
        </Nav.Link>
      </Nav.Item>
    );
  }
}

export default FooterTab;
