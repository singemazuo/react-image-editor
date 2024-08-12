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
    parts: ProductPartVM[];
};

export type InitializeOptions = {
    referenceWidth: number;
    referenceHeight: number;
};

export const useData = () => {
    const makeProduct = (products, options?: InitializeOptions) => {
        let productPartList = [];
        const productList = products.map((o, i) => {
            const partList = o.product_parts.map((p, j) => ({img:p.image,priority:p.priority,active:j == 0}));
            const p = o.product_parts[0];
            const part = {
                id: guid(),
                attrs: {
                    name: "label-target",
                    "data-item-type": "image",
                    x: options ? options.referenceWidth/4 : 372,
                    y: 0,
                    width: options ? options.referenceHeight :862,
                    height: options ? options.referenceHeight: 862,
                    src: p.image,
                    zIndex: 0,
                    brightness: 0,
                    draggable: false,
                    visible: false,
                    updatedAt: Date.now(),
                },
                className: "sample-image",
                children: [],
            };
            productPartList.push({
                id: o.product_code,
                data: [part]
            });
            return {
                id: o.product_code,
                preview: o.image,
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