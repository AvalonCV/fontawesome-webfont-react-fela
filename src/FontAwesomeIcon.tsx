import React from 'react';
import { IStyle } from 'fela';
import { useFela } from 'react-fela';

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
type FASizes = typeof Sizes;

const Pull = {
	left: { float: 'left', marginRight: '.3em' } as IStyle,
	right: { float: 'right', marginLeft: '.3em' } as IStyle
};
type FAPull = typeof Pull;

const Rotation = {
	90: { transform: 'rotate(90deg)' },
	180: { transform: 'rotate(180deg)' },
	270: { transform: 'rotate(270deg)' }
};
type FARotation = typeof Rotation;

export const getFontAwesomeIconStyles: (icon: FAIconDefinition | FABrandIconDefinition) => IStyle = icon => {
	return {
		fontStyle: 'normal',
		fontVariant: 'normal',
		textRendering: 'auto',
		fontFamily: FontFamilies[icon.type].fontFamily,
		fontWeight: FontFamilies[icon.type].fontWeight,
		content: `"\\${icon.unicode}"`
	};
};

const getFontAwesomeStyles: (parameters: FontAwesomeIconFunctionProperties) => IStyle = parameters => {
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
		'::before': getFontAwesomeIconStyles(icon)
	};
};

export const FontAwesomeIcon: React.FunctionComponent<FontAwesomeIconFunctionProperties> = props => {
	const { css } = useFela(props);
	const { title, type, icon } = props;

	if (icon.type !== 'brands' && type) {
		icon.type = type;
	}

	return <i className={css(getFontAwesomeStyles(props))} title={title}></i>;
};
