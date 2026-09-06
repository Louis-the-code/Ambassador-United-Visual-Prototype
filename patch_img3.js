import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1544531585-b3fadf704c02?auto=format&fit=crop&q=80&w=1000"
);
// Remove grayscale so the user can see it better? Or just replace URL.
// Let's replace the grayscale class so it's clearly visible by default.
code = code.replace(
  "bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100",
  "bg-cover bg-center transition-all duration-1000 scale-105 hover:scale-100"
);
fs.writeFileSync('src/App.tsx', code);
