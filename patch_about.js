import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      ) : currentPage === 'About' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
                About Ambassadors United
              </h1>
              <div className="w-24 h-2 bg-[#1e3a8a] mx-auto mb-10"></div>
              
              <div className="bg-black text-white p-10 md:p-16 lg:p-24 mb-16 relative overflow-hidden text-center flex items-center justify-center min-h-[300px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 w-full">
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                    HEAVENLY IMPACT
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-6">Our Mission</h3>
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                  <p className="mb-4">
                    Ambassadors United is a non-denominational movement dedicated to equipping the saints for the work of the ministry. We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ.
                  </p>
                  <p>
                    Our mission is to empower individuals to step into their calling, not just as believers, but as active ambassadors of heaven, representing the Kingdom's culture, authority, and love in every sphere of society.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-6">Our Vision</h3>
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                  <p className="mb-4">
                    <strong>Thy Kingdom Come:</strong> We are passionate about seeing the will of heaven established on earth. This means bringing the relief, healing, and truth of the Kingdom into our homes, workplaces, and communities.
                  </p>
                  <p>
                    Ultimately, our vision is to prepare the world for the return of Jesus Christ. We are laying the groundwork, raising a generation that is unashamed, equipped, and ready for His glorious appearing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>`;

const replacement = `      ) : currentPage === 'About' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-0">
          {/* Header Section */}
          <section className="relative bg-black text-white py-24 md:py-32 lg:py-48 flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            
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

          {/* Content Section with Grid */}
          <section className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Mission Card */}
                <div className="col-span-1 lg:col-span-7 bg-white p-10 md:p-16 shadow-sm border border-gray-100 flex flex-col justify-center">
                  <h2 className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-4">Our Purpose</h2>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-8">Our Mission</h3>
                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6">
                      Ambassadors United is a non-denominational movement dedicated to equipping the saints for the work of the ministry. We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ.
                    </p>
                    <p>
                      Our mission is to empower individuals to step into their calling, not just as believers, but as active ambassadors of heaven, representing the Kingdom's culture, authority, and love in every sphere of society.
                    </p>
                  </div>
                </div>

                {/* Abstract Image or Element */}
                <div className="col-span-1 lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-black flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548625361-ec72a74c4756?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-white font-bold tracking-widest uppercase text-sm">Equipping the Saints</p>
                  </div>
                </div>

                {/* Vision Statement */}
                <div className="col-span-1 lg:col-span-12 bg-black text-white p-10 md:p-16 lg:p-24 relative overflow-hidden mt-4">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a8a] opacity-30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
                  
                  <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Our Vision</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-10 leading-[1.1]">
                      Preparing the world for the return of Jesus Christ.
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16 border-t border-white/10 pt-16">
                      <div>
                        <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Thy Kingdom Come</h4>
                        <p className="text-gray-400 font-light leading-relaxed">
                          We are passionate about seeing the will of heaven established on earth. This means bringing the relief, healing, and truth of the Kingdom into our homes, workplaces, and communities.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Laying the Groundwork</h4>
                        <p className="text-gray-400 font-light leading-relaxed">
                          Raising a generation that is unashamed, equipped, and ready for His glorious appearing. We aim to be a light in a world desperate for the truth of the Gospel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>`;

code = code.replace(target, replacement);

fs.writeFileSync('src/App.tsx', code);
