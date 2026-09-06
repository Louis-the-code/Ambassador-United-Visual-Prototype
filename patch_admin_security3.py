import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_footer = """        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Ambassadors United. All rights reserved.
          </div>
        </div>"""

new_footer = """        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white text-black font-black text-lg w-8 h-8 tracking-tighter">
              AU
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Ambassadors United. All rights reserved.
            </div>
            <button 
              onClick={() => setCurrentPage('Admin')} 
              className="text-gray-500 hover:text-white transition-colors focus:outline-none flex items-center justify-center mt-2 sm:mt-0"
              title="Admin Access"
            >
              <Lock className="w-4 h-4 opacity-50 hover:opacity-100" />
            </button>
          </div>
        </div>"""

code = code.replace(old_footer, new_footer)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched App.tsx")
