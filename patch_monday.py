import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

code = code.replace(
    '{ day: "Monday", name: "Productivity Monday", desc: "Interceding for divine favor, wisdom, and kingdom impact in our workplaces and assignments." }',
    '{ day: "Monday", name: "Prosperity Monday\'s", desc: "Interceding for divine favor, wisdom, and kingdom impact in our workplaces and assignments." }'
)

with open('src/App.tsx', 'w') as f:
    f.write(code)
