import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Replace any remaining `recentPosts` with `allPosts`
code = code.replace("? recentPosts", "? allPosts")
code = code.replace("recentPosts.", "allPosts.")

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Fixed recentPosts")
