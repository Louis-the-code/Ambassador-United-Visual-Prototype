import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

code = code.replace(
    'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800'
)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Fixed image")
