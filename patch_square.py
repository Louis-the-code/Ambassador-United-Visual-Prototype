import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_div = """<div key={t.id} className="min-w-[85vw] md:min-w-[350px] shrink-0 snap-center bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-auto self-stretch rounded-xl">"""
new_div = """<div key={t.id} className="w-[80vw] sm:w-[300px] md:w-[350px] aspect-square shrink-0 snap-center bg-gray-50 border border-gray-100 p-6 md:p-8 hover:border-black transition-colors flex flex-col rounded-xl overflow-hidden">"""

if old_div in code:
    code = code.replace(old_div, new_div)
    with open('src/App.tsx', 'w') as f:
        f.write(code)
    print("Replaced successfully")
else:
    print("Could not find div")
