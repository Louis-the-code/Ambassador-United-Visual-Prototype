import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_logo_html = """            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>"""

new_logo_html = """            <div className="flex items-center justify-center w-10 h-10 overflow-hidden">
              <img src="/logo.png" alt="Ambassadors United Logo" className="w-full h-full object-contain" onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="white"/><text x="50" y="55" font-family="Arial" font-size="40" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="middle">AU</text></svg>';
              }} />
            </div>"""

code = code.replace(old_logo_html, new_logo_html)

with open('src/App.tsx', 'w') as f:
    f.write(code)

