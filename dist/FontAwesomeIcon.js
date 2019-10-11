"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fela_1 = require("react-fela");
const FontFamilies = {
    solid: {
        fontFamily: '"Font Awesome 5 Free"',
        fontWeight: 900
    },
    regular: {
        fontFamily: '"Font Awesome 5 Free"',
        fontWeight: 400
    },
    light: {
        fontFamily: '"Font Awesome 5 Free"',
        fontWeight: 300
    },
    brands: {
        fontFamily: '"Font Awesome 5 Brands"',
        fontWeight: 400
    }
};
const Sizes = {
    lg: { fontSize: '1.33333em', lineHeight: '0.75em', verticalAlign: '-.0667em' },
    xs: { fontSize: '.75em' },
    sm: { fontSize: '.875em' },
    '1x': { fontSize: '1em' },
    '2x': { fontSize: '2em' },
    '3x': { fontSize: '3em' },
    '4x': { fontSize: '4em' },
    '5x': { fontSize: '5em' },
    '6x': { fontSize: '6em' },
    '7x': { fontSize: '7em' },
    '8x': { fontSize: '8em' },
    '9x': { fontSize: '9em' },
    '10x': { fontSize: '10em' }
};
const Pull = {
    left: { float: 'left', marginRight: '.3em' },
    right: { float: 'right', marginLeft: '.3em' }
};
const Rotation = {
    90: { transform: 'rotate(90deg)' },
    180: { transform: 'rotate(180deg)' },
    270: { transform: 'rotate(270deg)' }
};
exports.getFontAwesomeIconStyles = icon => {
    return {
        fontStyle: 'normal',
        fontVariant: 'normal',
        textRendering: 'auto',
        fontFamily: FontFamilies[icon.type].fontFamily,
        fontWeight: FontFamilies[icon.type].fontWeight,
        content: `"\\${icon.unicode}"`
    };
};
const getFontAwesomeStyles = parameters => {
    const { additional_styles, icon, size, border, pull, rotation, fixedWidth, listItem } = parameters;
    return {
        display: 'inline-block',
        lineHeight: 1,
        ...(size ? Sizes[size] : undefined),
        ...(border ? { border: 'solid 0.08em #eee', borderRadius: '.1em', padding: '.2em .25em .15em' } : undefined),
        ...(fixedWidth ? { textAlign: 'center', width: '1.25em' } : undefined),
        ...(listItem
            ? { left: '-2em', position: 'absolute', textAlign: 'center', width: '2em', lineHeight: 'inherit' }
            : undefined),
        ...(pull ? Pull[pull] : undefined),
        ...(rotation ? Rotation[rotation] : undefined),
        ...additional_styles,
        '::before': exports.getFontAwesomeIconStyles(icon)
    };
};
exports.FontAwesomeIcon = props => {
    const { css } = react_fela_1.useFela(props);
    const { title, type, icon } = props;
    if (icon.type !== 'brands' && type) {
        icon.type = type;
    }
    return react_1.default.createElement("i", { className: css(getFontAwesomeStyles(props)), title: title });
};
