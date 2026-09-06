import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  "https://images.unsplash.com/photo-1548625361-ec72a74c4756?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1544531585-b3fadf704c02?auto=format&fit=crop&q=80&w=1000"
);
// Make sure it replaced the one inside "Equipping the Saints" block
fs.writeFileSync('src/App.tsx', code);
