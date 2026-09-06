import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      ) : (
        <>
          {/* Hero Banner */}
          <section className="relative bg-black text-white pt-24 pb-32 lg:pt-36 lg:pb-48 flex items-center">
            {/* Subtle background texture/overlay */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6">
                  Heaven has always been man's only real source of true relief.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light mb-10 max-w-2xl">
                  Equipping saints to be ambassadors of the gospel in heart and life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => { setCurrentPage('About'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group">
                    Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => { setCurrentPage('Blog & Series'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all text-center">
                    Read the Blog
                  </button>
                </div>
              </div>
            </div>
          </section>`;

const replacement = `      ) : (
        <>
          {/* Hero Banner */}
          <section className="relative bg-black text-white pt-32 pb-40 lg:pt-48 lg:pb-56 flex items-center overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat transform scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                  Heaven has always been man's only real source of true relief.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light mb-10 max-w-2xl drop-shadow-md">
                  Equipping saints to be ambassadors of the gospel in heart and life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => { setCurrentPage('About'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group backdrop-blur-sm border border-white/10">
                    Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => { setCurrentPage('Blog & Series'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all text-center backdrop-blur-sm">
                    Read the Blog
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Short Vision Intro */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-16 h-1 bg-[#1e3a8a] mx-auto mb-8"></div>
              <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">The Vision</h2>
              <blockquote className="text-2xl md:text-4xl font-light italic leading-tight text-black mb-10">
                "We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ."
              </blockquote>
              <button 
                onClick={() => { setCurrentPage('About'); setSelectedPost(null); setSelectedProduct(null); }}
                className="font-bold text-sm uppercase tracking-widest text-[#1e3a8a] hover:text-black flex items-center gap-2 transition-colors mx-auto group"
              >
                Read More About Brother Louis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>`;

code = code.replace(target, replacement);

const emailCaptureTarget = `{(currentPage === 'About' || currentPage === 'Connect') && !selectedPost && !selectedProduct && (`;
const emailCaptureReplacement = `{(currentPage === 'Home' || currentPage === 'About' || currentPage === 'Connect') && !selectedPost && !selectedProduct && (`;

code = code.replace(emailCaptureTarget, emailCaptureReplacement);

fs.writeFileSync('src/App.tsx', code);
