import path from 'path';
import fs from 'fs';

import camelCase from 'camelcase';

import font_awesome_icons from './fa5-icons.5.11.2.json';

// const output_path = '';
const output_path = path.resolve(process.cwd(), 'src');

// fs.mkdirSync('/icon/');

const icon_imports: string[] = [];
// const icon_exports = [];

let counter = 0;

for (let [icon, data] of Object.entries(font_awesome_icons)) {
	const icon_import_name = `fa${camelCase(icon, { pascalCase: true })}`;
	icon_imports.push(icon_import_name);

	const { unicode, styles } = data;
	const is_brand_icon = styles.includes('brands');
	const type_name = is_brand_icon ? 'FABrandIconDefinition' : 'FAIconDefinition';

	const file_content = `
		import { ${type_name} } from './../index';
		const icon: ${type_name} = {icon_key: '${icon}', unicode: '${unicode}', type: '${is_brand_icon ? 'brands' : 'solid'}'};
		export default icon;
		${
			is_brand_icon
				? ''
				: styles
						.map(
							style =>
								`export const ${icon_import_name}${camelCase(style, {
									pascalCase: true
								})}: ${type_name} = ${style === 'solid' ? 'icon' : `{...icon, type: '${style}'}`};`
						)
						.join('\r\n')
		}
	`
		.replace(/\t/g, '')
		.replace(/\n\n/g, '\n');

	fs.writeFileSync(`${output_path}/icon/${icon_import_name}.ts`, file_content);

	counter++;
	if (counter > 100 && false) {
		break;
	}
}

console.log(
	icon_imports
		.map(import_name => {
			return `import ${import_name} from './icon/${import_name};`;
		})
		.join('\r\n')
);
