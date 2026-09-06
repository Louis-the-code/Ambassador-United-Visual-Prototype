import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Icon Grid */}
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                    <Youtube className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">YouTube</span>
                  </a>
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">Instagram</span>
                  </a>
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black col-span-2 sm:col-span-1">
                    <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">WhatsApp</span>
                  </a>
                  <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                    <a href="#" className="flex-1 flex items-center justify-center gap-3 p-4 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                      <CalendarPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-xs tracking-widest uppercase">Google Cal</span>
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-3 p-4 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-xs tracking-widest uppercase">Download iCal</span>
                    </a>
                  </div>
                </div>
              </div>`;

const replacement = `            {/* Upcoming Events Section */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">Upcoming Events</h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#1e3a8a] transition-colors">
                    <CalendarPlus className="w-4 h-4" /> Sync to Google Cal
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#1e3a8a] transition-colors">
                    <Download className="w-4 h-4" /> Sync iCal
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Card 1 */}
                <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 hover:border-black transition-colors group flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row gap-6 items-start flex-grow">
                    <div className="bg-black text-white p-4 text-center min-w-[100px] shrink-0">
                      <div className="text-sm font-bold uppercase tracking-widest text-[#1e3a8a]">Oct</div>
                      <div className="text-3xl font-black">15</div>
                      <div className="text-xs mt-1 text-gray-400">7:00 PM</div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                      <span className="inline-block px-2 py-1 bg-blue-50 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest mb-3 self-start">Online via Zoom</span>
                      <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#1e3a8a] transition-colors">Kingdom Ambassadors Youth Summit</h4>
                      <p className="text-sm text-gray-600 font-light mb-6 flex-grow">Equipping the next generation of leaders to carry the mandate of heaven into their schools and communities.</p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <button className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors">Register Now</button>
                        <button className="bg-white border border-gray-200 hover:border-black text-black px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors">Add to Calendar</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 hover:border-black transition-colors group flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row gap-6 items-start flex-grow">
                    <div className="bg-black text-white p-4 text-center min-w-[100px] shrink-0">
                      <div className="text-sm font-bold uppercase tracking-widest text-[#1e3a8a]">Nov</div>
                      <div className="text-3xl font-black">12</div>
                      <div className="text-xs mt-1 text-gray-400">6:30 PM</div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                      <span className="inline-block px-2 py-1 bg-gray-200 text-black text-[10px] font-bold uppercase tracking-widest mb-3 self-start">London, UK</span>
                      <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#1e3a8a] transition-colors">Prophetic Worship Night</h4>
                      <p className="text-sm text-gray-600 font-light mb-6 flex-grow">A powerful night of unscripted worship, prayer, and seeking the heart of God for the nations.</p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <button className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors">Register Now</button>
                        <button className="bg-white border border-gray-200 hover:border-black text-black px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors">Add to Calendar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Icon Grid */}
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                    <Youtube className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">YouTube</span>
                  </a>
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">Instagram</span>
                  </a>
                  <a href="#" className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 border border-gray-100 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all group cursor-pointer text-black col-span-2">
                    <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-center">WhatsApp</span>
                  </a>
                </div>
              </div>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
