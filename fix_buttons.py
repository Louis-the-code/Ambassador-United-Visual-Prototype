import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

def process_tag(match):
    tag_str = match.group(0)
    if '<button' in tag_str:
        def repl(m):
            cls = m.group(1)
            cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
            cls = cls + ' rounded-full'
            cls = re.sub(r'\s+', ' ', cls).strip()
            return f'className="{cls}"'
        tag_str = re.sub(r'className="([^"]*)"', repl, tag_str)
    else:
        def repl(m):
            cls = m.group(1)
            cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
            cls = cls + ' rounded-xl'
            cls = re.sub(r'\s+', ' ', cls).strip()
            return f'className="{cls}"'
        tag_str = re.sub(r'className="([^"]*)"', repl, tag_str)
    return tag_str

# Match a tag, taking care of > inside JSX by just using a simple brace matching or regex for HTML tags.
# Actually, we can just find <button ...>, <input ...>, <textarea ...> up to their closing > or />
# but since JSX has >, it's easier to find <button and the nearest className="..." 
# Wait, let's just do a simple replacement for those specific lines manually or with a more permissive regex.

lines = content.split('\n')
for i, line in enumerate(lines):
    if '<button' in line and 'className="' in line:
        def repl(m):
            cls = m.group(1)
            cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
            if 'rounded-full' not in cls:
                cls = cls + ' rounded-full'
            cls = re.sub(r'\s+', ' ', cls).strip()
            return f'className="{cls}"'
        lines[i] = re.sub(r'className="([^"]*)"', repl, line)
    
    if ('<input' in line or '<textarea' in line) and 'className="' in line:
        def repl(m):
            cls = m.group(1)
            cls = re.sub(r'\brounded-(?:sm|md|lg|xl|2xl|3xl|none|full)\b', '', cls)
            if 'rounded-xl' not in cls:
                cls = cls + ' rounded-xl'
            cls = re.sub(r'\s+', ' ', cls).strip()
            return f'className="{cls}"'
        lines[i] = re.sub(r'className="([^"]*)"', repl, line)

with open('src/App.tsx', 'w') as f:
    f.write('\n'.join(lines))
