import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `          {/* Content Section with Grid */}
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
          </section>`;

const replacement = `          {/* Content Section */}
          <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col lg:flex-row items-center mb-20 lg:mb-32">
                
                {/* Mission Card */}
                <div className="w-full lg:w-7/12 bg-white p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.12)] relative z-20">
                  <h2 className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-4">Our Purpose</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-8">Our Mission</h3>
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
                <div className="w-full lg:w-6/12 h-[400px] lg:h-[550px] relative bg-black flex items-center justify-center lg:-ml-16 z-10 shadow-2xl mt-10 lg:mt-0">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548625361-ec72a74c4756?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"></div>
                  <div className="relative z-10 text-center bg-black/40 backdrop-blur-md p-8 border border-white/20 shadow-2xl">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-white font-bold tracking-widest uppercase text-sm">Equipping the Saints</p>
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="w-full bg-black text-white p-12 md:p-24 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a8a] opacity-30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                  <h2 className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-6">Our Vision</h2>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 leading-[1.1]">
                    Preparing the world for the return of Jesus Christ.
                  </h3>
                  <div className="w-24 h-1 bg-white/20 mx-auto mb-16"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                        <span className="w-8 h-px bg-[#1e3a8a]"></span> Thy Kingdom Come
                      </h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        We are passionate about seeing the will of heaven established on earth. This means bringing the relief, healing, and truth of the Kingdom into our homes, workplaces, and communities.
                      </p>
                    </div>
                    <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                        <span className="w-8 h-px bg-[#1e3a8a]"></span> Laying the Groundwork
                      </h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Raising a generation that is unashamed, equipped, and ready for His glorious appearing. We aim to be a light in a world desperate for the truth of the Gospel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
