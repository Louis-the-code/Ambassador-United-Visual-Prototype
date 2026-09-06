import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

old_code = """            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {testimonies.map(t => (
                <div key={t.id} className="bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-full rounded-xl">"""

new_code = """            <div className="relative mb-20">
              <button 
                onClick={scrollLeft}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm focus:outline-none hidden md:block"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {testimonies.map(t => (
                  <div key={t.id} className="min-w-[85vw] md:min-w-[350px] shrink-0 snap-center bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-auto self-stretch rounded-xl">"""

code = code.replace(old_code, new_code)

# We also need to close the relative container after the map ends.
old_end = """              ))}
            </div>"""

new_end = """              ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm focus:outline-none hidden md:block"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>"""

code = code.replace(old_end, new_end)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Success")
