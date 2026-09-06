import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

def replace_button_class(match):
    before = match.group(1)
    class_str = match.group(2)
    after = match.group(3)
    
    # Remove existing rounded classes
    class_str = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none)\b', '', class_str)
    
    if 'rounded-full' not in class_str:
        class_str += ' rounded-full'
        
    class_str = re.sub(r'\s+', ' ', class_str).strip()
    return f'{before}className="{class_str}"{after}'

def replace_input_class(match):
    before = match.group(1)
    class_str = match.group(2)
    after = match.group(3)
    
    class_str = re.sub(r'\brounded-(?:sm|md|lg|full|2xl|3xl|none)\b', '', class_str)
    
    if 'rounded-xl' not in class_str:
        class_str += ' rounded-xl'
        
    class_str = re.sub(r'\s+', ' ', class_str).strip()
    return f'{before}className="{class_str}"{after}'

# Update buttons
content = re.sub(r'(<button[^>]*?)className="([^"]*)"([^>]*>)', replace_button_class, content)

# Update inputs
content = re.sub(r'(<input[^>]*?)className="([^"]*)"([^>]*>)', replace_input_class, content)

# Update textareas
content = re.sub(r'(<textarea[^>]*?)className="([^"]*)"([^>]*>)', replace_input_class, content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
