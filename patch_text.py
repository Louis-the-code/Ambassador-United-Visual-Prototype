import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_p = """<p className="text-gray-700 italic leading-relaxed mb-8 flex-grow">"""
new_p = """<p className="text-gray-700 italic leading-relaxed mb-6 flex-grow overflow-y-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">"""

code = code.replace(old_p, new_p)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Replaced p")
