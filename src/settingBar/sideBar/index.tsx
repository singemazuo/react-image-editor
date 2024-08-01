import React, { forwardRef, RefObject } from'react';
import { Overlay } from 'react-bootstrap';
import DefaultMenu, { DefaultMenuItemType } from './DefaultMenu';
import ClipartMenu from './ClipartMenu';
import { j } from 'vite/dist/node/types.d-aGj9QkWt';

export type WidgetSideBarProps = {
    activeMenu: SubmenuType;
    target: React.MutableRefObject<HTMLElement>;
    onDefaultMenuClick: (reference: RefObject<HTMLDivElement>, itemType: DefaultMenuItemType) => void;
};

export enum SubmenuType {
    Default = 'default',
    Clipart = 'clipart',
};

const WidgetSideBar = forwardRef<HTMLDivElement, WidgetSideBarProps>(({target, activeMenu, onDefaultMenuClick}, ref) => {
    const [ styles, setStyles ] = React.useState<any>({});
    const [submenuStyle, setSubmenuStyle] = React.useState({});

    const getMenuItems = {
        default: {
            id: 'default',
            title: 'Default',
            component: <DefaultMenu onClick={onDefaultMenuClick}></DefaultMenu>,
        },
        clipart: {
            id: 'clipart',
            title: 'Clipart',
            component: <ClipartMenu></ClipartMenu>,
        }
    }

    const onMenuClick = () => {

    };

    React.useEffect(() => {
        if (activeMenu !== null && target.current) {
            const menuRect = target.current.getBoundingClientRect();
            const activeItem = target.current.querySelector(`[data-id="${activeMenu}"]`);
            if (activeItem) {
                setSubmenuStyle({
                    backgroundColor: '#E3E6E8',
                    textAlign: 'center',
                    top: `${Math.max(0, menuRect.top)}px`,
                    left: `${menuRect.right}px + 3px`,
                    maxHeight: `calc(100vh - ${Math.max(0, menuRect.top)}px)`,
                });
            }else if(activeMenu === "default"){
                setSubmenuStyle({
                    width: "5rem",
                    backgroundColor: '#E3E6E8',
                    textAlign: 'center',
                    top: `${Math.max(0, menuRect.top)}px`,
                    left: `${menuRect.right}px`,
                    maxHeight: `calc(100vh - ${Math.max(0, menuRect.top)}px)`,
                    position: 'fixed',
                    zIndex: 1,
                });
            }else if(activeMenu === "clipart"){
                setSubmenuStyle({
                    width: "19rem",
                    backgroundColor: '#3D3D3D',
                    textAlign: 'center',
                    top: `${Math.max(0, menuRect.top)}px`,
                    left: `${menuRect.right}px`,
                    maxHeight: `calc(100vh - ${Math.max(0, menuRect.top)}px)`,
                    color:"#E3E6E8",
                    position: 'fixed',
                    zIndex: 1,
                });

            }
        }
    }, [activeMenu]);
    return (
        <div ref={ref} className="overflow-hidden overflow-y-auto" style={submenuStyle}>
            {getMenuItems[activeMenu].component}
        </div>
    );
});

export default WidgetSideBar;