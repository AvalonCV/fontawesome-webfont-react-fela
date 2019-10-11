"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const camelcase_1 = __importDefault(require("camelcase"));
const fa5_icons_5_11_2_json_1 = __importDefault(require("./fa5-icons.5.11.2.json"));
const output_path = path_1.default.resolve(process.cwd(), 'src');
const icon_imports = [];
let counter = 0;
for (let [icon, data] of Object.entries(fa5_icons_5_11_2_json_1.default)) {
    const icon_import_name = `fa${camelcase_1.default(icon, { pascalCase: true })}`;
    icon_imports.push(icon_import_name);
    const { unicode, styles } = data;
    const is_brand_icon = styles.includes('brands');
    const type_name = is_brand_icon ? 'FABrandIconDefinition' : 'FAIconDefinition';
    const file_content = `
		import { ${type_name} } from './../index';
		const icon: ${type_name} = {icon_key: '${icon}', unicode: '${unicode}', type: '${is_brand_icon ? 'brands' : 'solid'}'};
		export default icon;
		${is_brand_icon
        ? ''
        : styles
            .map(style => `export const ${icon_import_name}${camelcase_1.default(style, {
            pascalCase: true
        })}: ${type_name} = ${style === 'solid' ? 'icon' : `{...icon, type: '${style}'}`};`)
            .join('\r\n')}
	`
        .replace(/\t/g, '')
        .replace(/\n\n/g, '\n');
    fs_1.default.writeFileSync(`${output_path}/icon/${icon_import_name}.ts`, file_content);
    counter++;
    if (counter > 100 && false) {
        break;
    }
}
console.log(icon_imports
    .map(import_name => {
    return `import ${import_name} from './icon/${import_name};`;
})
    .join('\r\n'));
