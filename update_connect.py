import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

start_marker = "      ) : currentPage === 'Connect' && !selectedPost ? ("
end_marker = "        </main>\n      ) : selectedProduct ? ("

start_idx = code.find(start_marker)
end_idx = code.find(end_marker) + len("        </main>\n")

if start_idx != -1 and end_idx != -1:
    new_code = """      ) : currentPage === 'Connect' && !selectedPost ? (
        <main className="flex-grow bg-white">
          {/* Header & Socials */}
          <section className="pt-20 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
              Get Connected
            </h1>
            <div className="w-24 h-2 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-16">
              Join a global community of believers dedicated to advancing the kingdom of heaven in their daily lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="#" className="flex items-center gap-3 px-8 py-4 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors rounded-full font-bold uppercase tracking-widest text-sm group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" /> YouTube
              </a>
              <a href="#" className="flex items-center gap-3 px-8 py-4 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors rounded-full font-bold uppercase tracking-widest text-sm group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" /> Instagram
              </a>
              <a href="#" className="flex items-center gap-3 px-8 py-4 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors rounded-full font-bold uppercase tracking-widest text-sm group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> WhatsApp
              </a>
            </div>
          </section>

          {/* Calendar / Events Section */}
          <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                <div>
                  <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 text-center md:text-left">Calendar</h2>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black text-center md:text-left">Upcoming Events</h3>
                </div>
                <div className="flex items-center gap-4">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">
                    <CalendarPlus className="w-5 h-5" /> Google Cal
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">
                    <Download className="w-5 h-5" /> iCal
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                {/* Event 1 */}
                <div className="bg-white border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-black transition-colors rounded-2xl group">
                  <div className="text-center md:text-left md:border-r md:border-gray-100 md:pr-12 shrink-0">
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Oct</div>
                    <div className="text-5xl md:text-6xl font-black text-black">15</div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
                      Online via Zoom • 7:00 PM
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-3">Kingdom Ambassadors Summit</h4>
                    <p className="text-gray-600 font-light max-w-xl mx-auto md:mx-0">
                      Equipping the next generation of leaders to carry the mandate of heaven into their schools and communities.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-full text-center">
                      Register
                    </button>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="bg-white border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-black transition-colors rounded-2xl group">
                  <div className="text-center md:text-left md:border-r md:border-gray-100 md:pr-12 shrink-0">
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Nov</div>
                    <div className="text-5xl md:text-6xl font-black text-black">12</div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-gray-100 text-black text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
                      London, UK • 6:30 PM
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-3">Prophetic Worship Night</h4>
                    <p className="text-gray-600 font-light max-w-xl mx-auto md:mx-0">
                      A powerful night of unscripted worship, prayer, and seeking the heart of God for the nations.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-full text-center">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form & Partner Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Contact Form */}
                <div>
                  <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Get in Touch</h2>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-black mb-10">Send a Message</h3>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-black uppercase tracking-widest mb-3">Full Name</label>
                      <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 focus:border-black focus:ring-0 outline-none transition-colors rounded-xl font-medium" placeholder="JOHN DOE" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-black uppercase tracking-widest mb-3">Email Address</label>
                      <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 focus:border-black focus:ring-0 outline-none transition-colors rounded-xl font-medium" placeholder="JOHN@EXAMPLE.COM" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-black uppercase tracking-widest mb-3">Message</label>
                      <textarea id="message" rows={5} className="w-full bg-gray-50 border border-gray-200 px-6 py-4 focus:border-black focus:ring-0 outline-none transition-colors resize-none rounded-xl font-medium" placeholder="HOW CAN WE HELP YOU?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white px-8 py-5 font-bold tracking-widest uppercase text-sm transition-colors rounded-full">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Partner With Us */}
                <div>
                  <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Support the Vision</h2>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-black mb-10">Partner With Us</h3>
                  
                  <div className="space-y-8">
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      Your faithful partnership allows us to equip saints and spread the message of heavenly relief across the globe.
                    </p>

                    <div className="bg-black text-white p-8 md:p-10 rounded-2xl">
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/20 pb-4">Give Online</h4>
                      <p className="text-sm font-light text-gray-300 mb-8">Securely partner with us through PayPal. Set up a one-time or recurring seed.</p>
                      <button className="w-full bg-white text-black hover:bg-gray-200 px-8 py-5 font-bold tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-3 rounded-full">
                        Give via PayPal <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-2xl">
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-4 text-black">Direct Bank Transfer</h4>
                      <div className="space-y-5 text-sm pt-2">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bank</span>
                          <span className="font-bold text-black">Global Kingdom Bank</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</span>
                          <span className="font-bold text-black">Ambassadors United</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Number</span>
                          <span className="font-bold tracking-wider text-black">0123-4567-8900</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Routing</span>
                          <span className="font-bold tracking-wider text-black">AUGBUS33</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
"""
    
    final_code = code[:start_idx] + new_code + code[end_idx:]
    with open('src/App.tsx', 'w') as f:
        f.write(final_code)
    print("Replaced successfully")
else:
    print("Could not find boundaries")
