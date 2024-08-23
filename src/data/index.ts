import React from 'react';
import { v4 as guid } from 'uuid';

export type ProductPartVM = {
    img: string;
    priority: number;
    active: boolean;
};

export type ProductVM = {
    id: string;
    preview: string;
    active: boolean;
    name: string;
    parts: ProductPartVM[];
};

export type InitializeOptions = {
    originalPosition: {x:number, y: number};
    referenceWidth: number;
    referenceHeight: number;
};

export const useData = () => {
    const makeProduct = (products, options?: InitializeOptions) => {
        let productPartList = [];
        const productList = products.map((o, i) => {
            const partList = o.product_parts.map((p, j) => ({img:p.image,priority:p.priority,active:j == 0}));
            const p = o.product_parts[0];
            const print_area = p.print_area ? {
                id: guid(),
                attrs: {
                    name: "label-target",
                    "data-item-type": "frame",
                    x: options ? options.originalPosition.x + p.print_area.x : 0,
                    y: options ? options.originalPosition.y + p.print_area.y : 0,
                    width: options ? p.print_area.w :862,
                    height: options ? p.print_area.h: 862,
                    zIndex: 1000,
                    brightness: 0,
                    draggable: false,
                    visible: false,
                    default: true,
                    updatedAt: Date.now(),
                },
                className: "sample-image",
                children: [],
            }: null;
            const part = {
                id: guid(),
                attrs: {
                    name: "label-target",
                    "data-item-type": "image",
                    x: options ? options.originalPosition.x : 0,
                    y: options ? options.originalPosition.y : 0,
                    width: options ? options.referenceHeight :862,
                    height: options ? options.referenceHeight: 862,
                    src: p.image,
                    zIndex: 0,
                    brightness: 0,
                    draggable: false,
                    visible: false,
                    default: true,
                    updatedAt: Date.now(),
                },
                className: "sample-image",
                children: [],
            };
            if(print_area !== null){
                productPartList = [...productPartList, {
                    id: o.product_code,
                    data: [part, print_area]
                }];
            }
            return {
                id: o.product_code,
                preview: o.image,
                name: o.product_name,
                active: i == 0,
                parts:partList,
            };
        });
    
        return {
            productList,
            productPartList
        };
    };
    
    return {
        makeProduct,
    };
};