      ) : currentPage === 'Connect' && !selectedPost ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
                Become an Ambassador Today
              </h1>
              <div className="w-24 h-2 bg-[#1e3a8a] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 font-light">
                Join a global community of believers dedicated to advancing the kingdom of heaven in their daily lives. Connect with us through the channels below.
              </p>
            </div>

            {/* Upcoming Events Section */}
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
                        <button className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full">Register Now</button>
                        <button className="bg-white border border-gray-200 hover:border-black text-black px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full">Add to Calendar</button>
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
                        <button className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full">Register Now</button>
                        <button className="bg-white border border-gray-200 hover:border-black text-black px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full">Add to Calendar</button>
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
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="text" id="name" className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#1e3a8a] focus:ring-0 outline-none transition-colors rounded-xl" placeholder="JOHN DOE" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="email" id="email" className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#1e3a8a] focus:ring-0 outline-none transition-colors rounded-xl" placeholder="JOHN@EXAMPLE.COM" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Message</label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea id="message" rows={5} className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 focus:border-[#1e3a8a] focus:ring-0 outline-none transition-colors resize-none rounded-xl" placeholder="HOW CAN WE HELP YOU?"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 font-bold tracking-widest uppercase transition-colors rounded-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Partner With Us Section */}
            <div className="mt-16 pt-16 border-t border-gray-100">
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-black mb-6">
                  Partner With Us
                </h2>
                <div className="w-16 h-2 bg-[#1e3a8a] mx-auto mb-6"></div>
                <p className="text-gray-600 font-light">
                  Your faithful partnership allows us to equip saints and spread the message of heavenly relief across the globe.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-100 pb-4">Active Ministry Projects</h3>
                  {partnerProjects.map(project => (
                    <div key={project.id} className="bg-white border border-gray-200 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold uppercase tracking-tight">{project.title}</h4>
                        <span className="text-[#1e3a8a] font-bold text-sm bg-blue-50 px-3 py-1 uppercase tracking-widest">{project.goal} Goal</span>
                      </div>
                      <p className="text-gray-600 font-light mb-6">
                        {project.description}
                      </p>
                      <div className="w-full bg-gray-100 h-2 mb-3">
                        <div className="bg-black h-2 transition-all" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <div className="text-right text-xs font-bold text-gray-500 tracking-widest uppercase">
                        {project.progress}% Funded
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-100 pb-4">Ways to Give</h3>
                  
                  <div className="bg-black text-white p-8 mb-6">
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Give Online</h4>
                    <p className="text-sm font-light text-gray-400 mb-6">Securely partner with us through PayPal. You can set up a one-time or recurring seed.</p>
                    <button className="w-full bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-4 font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-full">
                      Give via PayPal <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-8">
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Direct Bank Transfer</h4>
                    <p className="text-sm font-light text-gray-500 mb-6">For direct deposits or international wires, please use the following details:</p>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Bank Name</span>
                        <span className="font-medium">Global Kingdom Bank</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Name</span>
                        <span className="font-medium">Ambassadors United</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Number</span>
                        <span className="font-medium tracking-wider">0123-4567-8900</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Routing / Swift</span>
                        <span className="font-medium tracking-wider">AUGBUS33</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : selectedProduct ? (
