import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_footer = """        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Ambassadors United. All rights reserved.
          </div>
        </div>"""

new_footer = """        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Ambassadors United. All rights reserved.
            </div>
            <button 
              onClick={() => setCurrentPage('Admin')} 
              className="text-gray-900 hover:text-gray-500 transition-colors focus:outline-none flex items-center justify-center"
              title="Admin Access"
            >
              <Lock className="w-4 h-4 opacity-30 hover:opacity-100" />
            </button>
          </div>
        </div>"""

code = code.replace(old_footer, new_footer)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched App.tsx")
