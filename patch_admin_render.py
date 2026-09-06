import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_render = "      ) : currentPage === 'Connect' && !selectedPost ? ("
new_render = "      ) : currentPage === 'Admin' ? (\n        <AdminDashboard />\n      ) : currentPage === 'Connect' && !selectedPost ? ("

code = code.replace(old_render, new_render)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched render")
