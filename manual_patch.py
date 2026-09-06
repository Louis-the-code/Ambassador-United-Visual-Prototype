import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

code = code.replace(
  'className="text-black hover:text-gray-600 focus:outline-none"',
  'className="text-black hover:text-gray-600 focus:outline-none rounded-full"'
)
code = code.replace(
  'className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left"',
  'className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left rounded-full"'
)
code = code.replace(
  'className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group"',
  'className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group rounded-full"'
)
code = code.replace(
  'className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border ${',
  'className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border rounded-full ${'
)
code = code.replace(
  'className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group"',
  'className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group rounded-full"'
)

with open('src/App.tsx', 'w') as f:
    f.write(code)
