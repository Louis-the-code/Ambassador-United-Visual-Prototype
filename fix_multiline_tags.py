import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace <button ... className="..." ... > across multiple lines
# We will use re.sub with a function, finding all <button ... > tags
def process_button(match):
    tag = match.group(0)
    def repl_cls(m):
        cls = m.group(1)
        cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
        if 'rounded-full' not in cls:
            cls = cls + ' rounded-full'
        cls = re.sub(r'\s+', ' ', cls).strip()
        return f'className="{cls}"'
    return re.sub(r'className="([^"]*)"', repl_cls, tag)

content = re.sub(r'<button[^>]*>', process_button, content)

def process_input(match):
    tag = match.group(0)
    def repl_cls(m):
        cls = m.group(1)
        cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
        if 'rounded-xl' not in cls:
            cls = cls + ' rounded-xl'
        cls = re.sub(r'\s+', ' ', cls).strip()
        return f'className="{cls}"'
    return re.sub(r'className="([^"]*)"', repl_cls, tag)

content = re.sub(r'<input[^>]*>', process_input, content)
content = re.sub(r'<textarea[^>]*>', process_input, content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
