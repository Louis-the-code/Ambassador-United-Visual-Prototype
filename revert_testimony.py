import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_flex = """<div className="flex overflow-x-auto gap-6 md:gap-8 mb-20 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">"""
new_grid = """<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">"""

if old_flex in code:
    code = code.replace(old_flex, new_grid)
    
old_card = """className="min-w-[85vw] md:min-w-[400px] shrink-0 snap-center bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-auto self-stretch rounded-xl\""""
new_card = """className="bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-full rounded-xl\""""

if old_card in code:
    code = code.replace(old_card, new_card)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Success")
