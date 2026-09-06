const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      ) : selectedPost ? (
        <main className="flex-grow bg-white py-12 md:py-20">`;

const replacement = `      ) : currentPage === 'Blog & Series' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-4">
                    Blog & Series
                  </h1>
                  <div className="w-24 h-2 bg-[#1e3a8a] mb-6"></div>
                  <p className="text-lg text-gray-600 font-light max-w-2xl">
                    Dive into our latest teachings, prophetic words, and foundational series designed to equip you for kingdom living.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={\`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border \${
                      activeCategory === category 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
                    }\`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative h-64 mb-6 overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                      <div className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                        {post.category}
                      </div>
                      {post.hasVideo && (
                        <div className="bg-[#1e3a8a] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
                          <Play className="w-3 h-3 fill-white" /> Video
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <time className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">
                      {post.date}
                    </time>
                    <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-[#1e3a8a] transition-colors">
                      {post.title}
                    </h3>
                    {post.series && (
                      <div className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-3">
                        Part of Series: {post.series}
                      </div>
                    )}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {post.preview}
                    </p>
                    <div className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-2 group-hover:text-[#1e3a8a]">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      ) : selectedPost ? (
        <main className="flex-grow bg-white py-12 md:py-20">`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
