import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetRegex = /<main className="flex-grow bg-white py-0">[\s\S]*?<\/section>\s*<\/main>/;

const replacement = `<main className="flex-grow bg-white py-0">
          {/* Header Section */}
          <section className="relative bg-black text-white py-32 md:py-48 lg:py-64 flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586726370832-3440a511e479?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                HEAVENLY IMPACT
              </h1>
              <div className="w-24 h-2 bg-[#1e3a8a] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
                About Ambassadors United
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-24 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-center">
                <div className="relative h-[400px] md:h-[600px] w-full shadow-2xl rounded-sm overflow-hidden z-0 lg:w-11/12">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548625361-ec72a74c4756?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border-l-4 border-[#1e3a8a]">
                    <p className="text-white font-bold tracking-widest uppercase text-sm">Equipping the Saints</p>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center bg-white p-10 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.15)] rounded-sm border border-gray-100 -mt-24 lg:mt-0 lg:-ml-24 relative z-10">
                  <h2 className="text-sm font-bold text-[#1e3a8a] tracking-widest uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-[#1e3a8a]"></span> Our Purpose
                  </h2>
                  <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-10 leading-none">
                    Our Mission
                  </h3>
                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6 text-xl text-black font-medium leading-relaxed">
                      Ambassadors United is a non-denominational movement dedicated to equipping the saints for the work of the ministry. 
                    </p>
                    <p className="mb-6">
                      We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ.
                    </p>
                    <p>
                      Our mission is to empower individuals to step into their calling, not just as believers, but as active ambassadors of heaven, representing the Kingdom's culture, authority, and love in every sphere of society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale mix-blend-screen"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1e3a8a] opacity-20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1e3a8a] opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-[#1e3a8a] tracking-widest uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-[#1e3a8a]"></span> Our Vision
                  </h2>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 leading-[1.1]">
                    Preparing the world for the return of Jesus Christ.
                  </h3>
                  <div className="w-24 h-1 bg-[#1e3a8a] mb-8"></div>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg shadow-2xl">
                    <div className="w-12 h-12 bg-[#1e3a8a] flex items-center justify-center rounded-full mb-6 shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Thy Kingdom Come
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We are passionate about seeing the will of heaven established on earth. This means bringing the relief, healing, and truth of the Kingdom into our homes, workplaces, and communities.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg shadow-2xl">
                    <div className="w-12 h-12 border-2 border-[#1e3a8a] flex items-center justify-center rounded-full mb-6">
                      <div className="w-2 h-2 bg-[#1e3a8a] rounded-full"></div>
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Laying the Groundwork
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      Raising a generation that is unashamed, equipped, and ready for His glorious appearing. We aim to be a light in a world desperate for the truth of the Gospel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>`;

if (targetRegex.test(code)) {
  code = code.replace(targetRegex, replacement);
  fs.writeFileSync('src/App.tsx', code);
  console.log('Successfully applied patch!');
} else {
  console.error('Target not found in App.tsx');
}
