const fs = require('fs');
const path = require('path');

const typesFile = path.join(__dirname, 'node_modules/@hugeicons/core-free-icons/dist/types/index.d.ts');
const iconFile = path.join(__dirname, 'app/sharedComponents/ui/Icon.tsx');

const content = fs.readFileSync(typesFile, 'utf8');
const iconContent = fs.readFileSync(iconFile, 'utf8');

const iconsToFind = [
    'Home01Icon', 'Settings01Icon', 'UserIcon', 'ArrowRight01Icon', 'Menu01Icon', 'Search01Icon',
    'InformationCircleIcon', 'CheckmarkCircle01Icon', 'AlertCircleIcon', 'Cancel01Icon', 'ViewIcon',
    'ViewOffIcon', 'CodeIcon', 'Image01Icon', 'GithubIcon', 'DribbbleIcon', 'Linkedin01Icon',
    'Database01Icon', 'Globe02Icon', 'PackageIcon', 'Money03Icon', 'BookOpen01Icon',
    'DashboardSquare01Icon', 'Folder01Icon', 'File01Icon', 'Download01Icon', 'PlayCircle02Icon',
    'ArrowLeft01Icon', 'TwitterIcon'
];

console.log('Verifying icons...');
iconsToFind.forEach(icon => {
    if (content.includes(`declare const ${icon}`)) {
        console.log(`✅ Found: ${icon}`);
    } else {
        console.log(`❌ Missing: ${icon}`);
        // Try searching for partial matches
        const base = icon.replace('Icon', '');
        const regex = new RegExp(`declare const \\w*${base}\\w*Icon`, 'g');
        const matches = content.match(regex);
        if (matches) {
            console.log(`   Suggestions: ${matches.map(m => m.replace('declare const ', '').replace(': IconSvgObject', '')).join(', ')}`);
        }
    }
});
