import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetRegex = /\{\/\* Recent Posts Section \*\/\}.*?<\/section>/s;

if (targetRegex.test(code)) {
    code = code.replace(targetRegex, '');
    fs.writeFileSync('src/App.tsx', code);
    console.log("Successfully removed Recent Posts Section");
} else {
    console.log("Could not find Recent Posts Section");
}
