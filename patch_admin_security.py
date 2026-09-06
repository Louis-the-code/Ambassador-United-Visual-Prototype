import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# 1. Remove 'Admin' from navLinks
code = code.replace("    'Store',\n    'Admin',\n  ];", "    'Store',\n  ];")

# 2. Add Lock icon import if not present
if "Lock" not in code:
    code = code.replace("import { Menu, X,", "import { Menu, X, Lock,")

# 3. Add hidden admin button in the footer
old_footer = """          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">Ambassadors United</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            &copy; 2026 Ambassadors United. All rights reserved.
          </p>"""

new_footer = """          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">Ambassadors United</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm font-medium">
              &copy; 2026 Ambassadors United. All rights reserved.
            </p>
            <button 
              onClick={() => setCurrentPage('Admin')} 
              className="text-gray-900 hover:text-gray-500 transition-colors focus:outline-none"
              title="Admin Access"
            >
              <Lock className="w-4 h-4 opacity-20 hover:opacity-100" />
            </button>
          </div>"""

# Try to match dynamic year if present
old_footer_regex = r'          <div className="flex items-center gap-3">\s*<div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">\s*AU\s*</div>\s*<span className="text-white font-bold tracking-widest uppercase text-sm">Ambassadors United</span>\s*</div>\s*<p className="text-gray-500 text-sm font-medium">\s*&copy; (.*?) Ambassadors United\. All rights reserved\.\s*</p>'
code = re.sub(old_footer_regex, new_footer.replace("2026", r"\1"), code)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched App.tsx")
