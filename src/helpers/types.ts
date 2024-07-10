import { MouseEvent } from "react";

export interface CardProps {
    onClick: (event: MouseEvent<HTMLDivElement>) => void | undefined,
    index: number | undefined, 
    children: React.ReactNode
}
export interface ClassNameProps {
    className: string,
    handleColorClick: (color: colorsType) => void;
}
export interface childrenProps extends ClassNameProps {
    children: React.ReactNode;
}

export interface categoriesProduct {
    id: number,
    title: string;
    sizes: string[],
    colors: string[],
    imgUrl: string
}
  
export interface typeForCategoriyesCard{
    title: string, 
    count: string, 
    products: categoriesProduct[],
    imageUrl: string
}

export interface colorsType {
    name: string, 
    color: colorsGradientType
}
interface colorsGradientType {
    from: string, 
    to: string
}
export interface complectsType {
    id: number, 
    complectId: string[], 
    name: string, 
    describtion: string,
    price: number, 
    priceOff: number, 
    imgUrl: string
}

export interface categoryType{
    _id: string | undefined,
    name: string | undefined, 
    type: string | undefined,
    count: number,
    imgUrl: string,
}
export interface ProductType{
    name: string | undefined,
    clotheId: string,
    imgUrl: string,
    sizes: string[],
    color: string,
    type: string,
    complection: string[],
    related: string[]
}
export interface apiProductType {
    _id: string | undefined,
    _v: number | undefined,
    name: string | undefined,
    categoryType: string | undefined,
    type: string,
    colors: apiColors[]
}
export interface apiColors{
    color: string, 
    colorCode: string[],
    complect1: complect1Type[],
    description: string,
    detailsTitle: string,
    detailsText: string,
    compositionTitle: string,
    compositionText: string,
    imgUrl: string,
    sizes: string[],
    name: string | undefined,
    type: string,
}

export interface complect1Type { 
    color: string,
    imgUrl:string | undefined,
    name:string
    sizes: string[]
}



export interface createCategoryType {
    name: string, count: number, imgUrl: string
  }
