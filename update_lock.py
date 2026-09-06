import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

code = code.replace(
    '<Lock className="w-4 h-4 opacity-50 hover:opacity-100" />',
    '<Lock className="w-5 h-5 opacity-80 hover:opacity-100 text-gray-400" />'
)

with open('src/App.tsx', 'w') as f:
    f.write(code)

