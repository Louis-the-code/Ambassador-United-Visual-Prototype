import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

def update_class(match):
    before = match.group(1)
    class_name = match.group(2)
    after = match.group(3)
    tag = match.group(0)
    
    if tag.startswith('<button'):
        class_name = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', class_name)
        class_name = class_name + ' rounded-full'
    else:
        class_name = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', class_name)
        class_name = class_name + ' rounded-xl'
        
    class_name = re.sub(r'\s+', ' ', class_name).strip()
    return f'{before}className="{class_name}"{after}'

# We need to find all <button, <input, <textarea elements and replace their className attribute
# A regex that matches the opening tag of these elements and captures the className attribute
pattern = r'(<(?:button|input|textarea)(?:\s+[^>]*?)?)className="([^"]*)"([^>]*>)'

# We need re.DOTALL so [^>]*? can span newlines if needed, though they usually don't.
content = re.sub(pattern, update_class, content, flags=re.DOTALL)

with open('src/App.tsx', 'w') as f:
    f.write(content)
