import React from 'react';
import { IStyle } from 'fela';
import { FAIconDefinition, FABrandIconDefinition } from './index';
interface FontAwesomeIconFunctionProperties {
    icon: FAIconDefinition | FABrandIconDefinition;
    type?: 'solid' | 'regular' | 'light';
    border?: boolean;
    fixedWidth?: boolean;
    listItem?: boolean;
    pulse?: boolean;
    spin?: boolean;
    additional_styles?: IStyle;
    flip?: 'horizontal' | 'vertical' | 'both';
    pull?: keyof FAPull;
    rotation?: keyof FARotation;
    size?: keyof FASizes;
    title?: string;
}
declare const Sizes: {
    lg: {
        fontSize: string;
        lineHeight: string;
        verticalAlign: string;
    };
    xs: {
        fontSize: string;
    };
    sm: {
        fontSize: string;
    };
    '1x': {
        fontSize: string;
    };
    '2x': {
        fontSize: string;
    };
    '3x': {
        fontSize: string;
    };
    '4x': {
        fontSize: string;
    };
    '5x': {
        fontSize: string;
    };
    '6x': {
        fontSize: string;
    };
    '7x': {
        fontSize: string;
    };
    '8x': {
        fontSize: string;
    };
    '9x': {
        fontSize: string;
    };
    '10x': {
        fontSize: string;
    };
};
declare type FASizes = typeof Sizes;
declare const Pull: {
    left: IStyle;
    right: IStyle;
};
declare type FAPull = typeof Pull;
declare const Rotation: {
    90: {
        transform: string;
    };
    180: {
        transform: string;
    };
    270: {
        transform: string;
    };
};
declare type FARotation = typeof Rotation;
export declare const getFontAwesomeIconStyles: (icon: FAIconDefinition | FABrandIconDefinition) => IStyle;
export declare const FontAwesomeIcon: React.FunctionComponent<FontAwesomeIconFunctionProperties>;
export {};
