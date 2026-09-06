import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const importTarget = "import { useState } from 'react';";
const importReplacement = "import { useState, useEffect } from 'react';";
code = code.replace(importTarget, importReplacement);

const hookTarget = "const [currentPage, setCurrentPage] = useState('Home');";
const hookReplacement = `const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedPost, selectedProduct]);`;
code = code.replace(hookTarget, hookReplacement);

fs.writeFileSync('src/App.tsx', code);
