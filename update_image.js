import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  "https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1586726370832-3440a511e479?auto=format&fit=crop&q=80&w=2000"
);
fs.writeFileSync('src/App.tsx', code);
