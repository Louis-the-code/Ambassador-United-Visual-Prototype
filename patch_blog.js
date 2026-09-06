import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      ) : currentPage === 'Blog & Series' && !selectedPost && !selectedProduct ? (
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
        </main>`;

const replacement = `      ) : currentPage === 'Blog & Series' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-gray-50 py-12 md:py-20 relative overflow-hidden">
          {/* subtle background effect for the whole page to complement glassmorphism */}
          <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        : 'bg-white/60 backdrop-blur-md text-gray-600 border-white/40 shadow-sm hover:bg-white hover:border-black hover:text-black'
                    }\`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-200 pb-4">Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.filter(p => !p.hasVideo).map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer flex flex-col h-full bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative h-56 mb-6 overflow-hidden rounded-xl bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow px-2">
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
                      <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
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

            {/* Videos Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-200 pb-4">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredPosts.filter(p => p.hasVideo).map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer flex flex-col md:flex-row bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-64 md:h-full md:w-2/5 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1e3a8a] transition-all duration-500">
                          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow p-6 md:p-8">
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
                      <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                        {post.preview}
                      </p>
                      <div className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-2 group-hover:text-[#1e3a8a]">
                        Watch Video <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Podcast Section */}
            <div className="bg-gradient-to-r from-black to-[#0a1535] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-grow max-w-2xl text-center md:text-left">
                  <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Listen on the go</h2>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                    The Kingdom Impact Podcast
                  </h3>
                  <p className="text-gray-300 font-light text-lg mb-8">
                    Take our teachings with you. Subscribe to our weekly podcast for deeper dives into scripture, prophetic insights, and testimonies from ambassadors around the world.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <button className="bg-white text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-200 transition-colors rounded-full flex items-center gap-2">
                      <Play className="w-4 h-4 fill-black" /> Spotify
                    </button>
                    <button className="bg-transparent border border-white/30 text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors rounded-full flex items-center gap-2">
                      <Play className="w-4 h-4 fill-white" /> Apple Podcasts
                    </button>
                  </div>
                </div>
                <div className="shrink-0 relative hidden sm:block">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 p-2 overflow-hidden bg-black/50 backdrop-blur-sm">
                     <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800" alt="Podcast Cover" className="w-full h-full object-cover rounded-full grayscale opacity-80" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#1e3a8a] text-white p-4 rounded-full shadow-lg">
                    <Headphones className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
