import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Add Admin to navLinks
old_nav = """  const navLinks = [
    'Home',
    'About',
    'Blog & Series',
    'Schedule',
    'Testimonies',
    'Store',
  ];"""
new_nav = """  const navLinks = [
    'Home',
    'About',
    'Blog & Series',
    'Schedule',
    'Testimonies',
    'Store',
    'Admin',
  ];"""
code = code.replace(old_nav, new_nav)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched navLinks")
