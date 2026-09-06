import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Remove 'Connect' from navLinks
code = code.replace("    'Store',\n    'Connect',\n  ];", "    'Store',\n  ];")

# Change Join Us to Connect in the buttons
code = code.replace(
"""              <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-full">
                Join Us
              </button>""",
"""              <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-full">
                Connect
              </button>""")

code = code.replace(
"""                <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); setIsMobileMenuOpen(false); }} className="w-full bg-[#1e3a8a] text-white px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-full">
                  Join Us
                </button>""",
"""                <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); setIsMobileMenuOpen(false); }} className="w-full bg-[#1e3a8a] text-white px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-full">
                  Connect
                </button>""")

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched navLinks and buttons")
