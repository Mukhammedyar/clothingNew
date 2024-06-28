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
