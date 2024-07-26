import React from "react";
import { ButtonGroup, ButtonToolbar, Col, Nav, Row, Stack } from "react-bootstrap";
import colorStyles from "../style/color.module.css";
import alignStyles from "../style/align.module.css";
import positionStyles from "../style/position.module.css";
import sizeStyles from "../style/size.module.css";
import borderStyles from "../style/border.module.css";
import NavBarItem from "./NavBarItem";
import { NavBarItemKind } from "./NavBarButton";

type SubNavBarProps = {
  item: NavBarItemKind;
  onClick: (id: string) => void;
};

type NavBarProps = {
  items: NavBarItemKind[];
  onClick: (id: string) => void;
};

const SubNavBar:React.FC<SubNavBarProps> = ({item, onClick}) => {
  // return (
  //   <Nav>
  //     <NavBarButton data={items} onClick={onClick}></NavBarButton>
  //   </Nav>
  // )
  return (
    <NavBarItem data={item} onClick={onClick}></NavBarItem>
  );
};

const NavBar: React.FC<NavBarProps> = ({ items, onClick }) => {
  const groupBy = (array: NavBarItemKind[], key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  };

  const renderSubNavBar = (items: NavBarItemKind[]) => {
    return (
      items && (
        <div className="flex-fill">
          {items.map((o) => (
            <div><NavBarItem data={o} onClick={onClick}></NavBarItem></div>
          ))}
        </div>
      )
    );
  };

  let typedItem = groupBy(items, "type");

  typedItem["middle"] = typedItem["middle"].map((o,i) => {
    let buttonRound = "";
    if(i == 0){
      buttonRound = borderStyles["roundTopLeftSM"];
    }else if(i == typedItem["middle"].length - 1){
      buttonRound = borderStyles["roundBottomLeftSM"];
    }
    (o.classes = o.classes || []).push(buttonRound);
    return o;
  });

  return (
    <Nav className={[alignStyles.fromBottomCenter,"flex-column",sizeStyles.height100].join(" ")}>
      <Stack>
        {/* {["top","middle","bottom"].map(key => (typedItem[key] && <div className={["flex-fill"].join(" ")}><SubNavBar items={typedItem[key]} onClick={onClick}/></div>))} */}
        {["top","middle","bottom"].map(key => (renderSubNavBar(typedItem[key])))}
      </Stack>
    </Nav>
  );
};

export default NavBar;
