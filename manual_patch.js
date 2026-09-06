const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// We can just add 'rounded-full' to these specific classNames that missed the regex

const toPatch = [
    'className="text-black hover:text-gray-600 focus:outline-none"',
    'className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left"',
    'className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group"',
    'className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border ${',
    'className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group"'
];

for (const t of toPatch) {
    if (t.includes('`px-5')) {
       // category filter buttons - there are two of them, replace both
       code = code.split(t).join('className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border rounded-full ${');
    } else {
       code = code.split(t).join(t.replace('"', 'rounded-full "').replace('rounded-full ""', 'rounded-full"'));
       // actually better:
       // t is `className="something"`
       // we want `className="something rounded-full"`
    }
}

// Re-do the exact replacement for safety:
let code2 = fs.readFileSync('src/App.tsx', 'utf8');
code2 = code2.replace(
  'className="text-black hover:text-gray-600 focus:outline-none"',
  'className="text-black hover:text-gray-600 focus:outline-none rounded-full"'
);
code2 = code2.replace(
  'className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left"',
  'className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left rounded-full"'
);
code2 = code2.split('className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group"').join(
  'className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group rounded-full"'
);
code2 = code2.split('className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border ${').join(
  'className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border rounded-full ${'
);
code2 = code2.replace(
  'className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group"',
  'className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group rounded-full"'
);

fs.writeFileSync('src/App.tsx', code2);
