import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const scheduleTarget = `                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                    Prayer Cloud: {prayerThemes[currentDayIndex].name}
                  </h3>
                  <p className="text-gray-600 font-light mb-6">
                    {prayerThemes[currentDayIndex].desc}
                  </p>
                  
                  <button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-3 font-bold tracking-widest uppercase transition-colors mb-8">
                    Join Nightly Prayer
                  </button>

                  {/* Weekly Overview */}
                  <div className="mt-4 pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Weekly Theme Schedule</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prayerThemes.map((theme, idx) => (
                        <div 
                          key={theme.day} 
                          className={\`flex flex-col p-3 border-l-2 \${
                            idx === currentDayIndex 
                              ? 'border-[#1e3a8a] bg-blue-50/50' 
                              : 'border-gray-100 bg-gray-50'
                          }\`}
                        >
                          <span className={\`text-[10px] font-bold uppercase tracking-widest mb-1 \${
                            idx === currentDayIndex ? 'text-[#1e3a8a]' : 'text-gray-400'
                          }\`}>
                            {theme.day}
                          </span>
                          <span className={\`text-sm font-medium \${
                            idx === currentDayIndex ? 'text-black' : 'text-gray-600'
                          }\`}>
                            {theme.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>`;

const scheduleReplacement = `                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                    Prayer Cloud — Today's Theme: {prayerThemes[currentDayIndex].name}
                  </h3>
                  <p className="text-gray-600 font-light mb-6">
                    {prayerThemes[currentDayIndex].desc}
                  </p>
                  
                  <button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-3 font-bold tracking-widest uppercase transition-colors mb-6">
                    Join Nightly Prayer
                  </button>

                  {/* Collapsible Weekly Overview */}
                  <div className="border-t border-gray-100 pt-4">
                    <button 
                      onClick={() => setIsPrayerScheduleOpen(!isPrayerScheduleOpen)}
                      className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left"
                    >
                      View Weekly Prayer Themes
                      <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${isPrayerScheduleOpen ? 'rotate-180' : ''}\`} />
                    </button>
                    
                    {isPrayerScheduleOpen && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {prayerThemes.map((theme, idx) => (
                          <div 
                            key={theme.day} 
                            className={\`flex flex-col p-3 border-l-2 \${
                              idx === currentDayIndex 
                                ? 'border-[#1e3a8a] bg-blue-50/50' 
                                : 'border-gray-100 bg-gray-50'
                            }\`}
                          >
                            <span className={\`text-[10px] font-bold uppercase tracking-widest mb-1 \${
                              idx === currentDayIndex ? 'text-[#1e3a8a]' : 'text-gray-400'
                            }\`}>
                              {theme.day}
                            </span>
                            <span className={\`text-sm font-medium \${
                              idx === currentDayIndex ? 'text-black' : 'text-gray-600'
                            }\`}>
                              {theme.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>`;

code = code.replace(scheduleTarget, scheduleReplacement);
fs.writeFileSync('src/App.tsx', code);
