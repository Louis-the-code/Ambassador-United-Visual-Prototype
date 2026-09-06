import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# First, remove the Free PDF section from Connect
old_pdf_cond = "{(currentPage === 'Blog & Series' || currentPage === 'Connect') && !selectedPost && !selectedProduct && ("
new_pdf_cond = "{(currentPage === 'Blog & Series') && !selectedPost && !selectedProduct && ("
code = code.replace(old_pdf_cond, new_pdf_cond)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Replaced PDF condition")
