import React from 'react';
import { Button, Nav, Image } from 'react-bootstrap';
import { NavBarItemKind } from './NavBarButton';
import colorStyles from "../style/color.module.css";
import borderStyles from "../style/border.module.css";
import fontStyles from "../style/font.module.css";
import useI18n from "../hook/usei18n";

export type NavBarItemProps = {
    data: NavBarItemKind;
    onClick: (id) => void;
};

const NavBarItem: React.FC<NavBarItemProps> = ({data, onClick}) => {
    const { getTranslation } = useI18n();

    if(data.type === "middle"){
        return (
            <Button
                data-navbar-id={data.id}
                onClick={() => onClick(data.id)}
                className={[colorStyles["navbar-buttongroup-tools"],data.classes,"rounded-0"].join(" ")}>
                {data.icon ? (
                    <i className={`bi-${data.icon}`} />
                ) : (
                    getTranslation("hotkey", data.id, "name")
                )}
            </Button>
        );
    }else if(data.type == "top"){
        return (
            <Nav.Item>
                <Nav.Link
                    eventKey={data.id}
                    className={[
                        data.active
                          ? colorStyles.greyTheme
                          : colorStyles.whiteTheme,
                        borderStyles.roundSM,
                        fontStyles.fontHalf1em,
                        data.active ? borderStyles.colorDark : borderStyles.none,
                    ].join(" ")}
                    data-active={data.active}
                    onClick={() => onClick(data.id)}
                >
                    <Image src={data.icon} rounded />
                </Nav.Link>
            </Nav.Item>
        );
    }
    return <></>;
};

export default NavBarItem;