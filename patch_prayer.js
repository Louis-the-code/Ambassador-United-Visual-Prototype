const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `                {/* Block 4 */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-black transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                  <div className="flex items-center gap-3 text-black font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4" /> 12:00 AM
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-4">Prayer Cloud</h3>
                  <div className="bg-black text-white p-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Midnight Guidelines</h4>
                    <ul className="space-y-2 text-sm font-light">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" /> 
                        <span>Intercede for global leaders and governments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" /> 
                        <span>Pray for clarity and bold witness for the youth in schools.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" /> 
                        <span>Declare Kingdom peace over your household.</span>
                      </li>
                    </ul>
                  </div>
                </div>`;

const replacement = `                {/* Block 4 - Prayer Cloud */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-black transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                  <div className="flex items-center gap-3 text-[#1e3a8a] font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4 text-black" /> 
                    <span className="bg-black text-white px-2 py-1 text-[10px]">TONIGHT AT 12:00 AM</span>
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
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
                  </div>
                </div>`;

code = code.replace(target, replacement);

const dataTarget = `  const navLinks = [`;
const dataReplacement = `  const currentDayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const prayerThemes = [
    { day: "Sunday", name: "Worship Sunday", desc: "A night dedicated purely to adoring the King of Kings and lifting His name high." },
    { day: "Monday", name: "Productivity Monday", desc: "Interceding for divine favor, wisdom, and kingdom impact in our workplaces and assignments." },
    { day: "Tuesday", name: "Intercession Tuesday", desc: "Standing in the gap for global leaders, nations, and the universal church." },
    { day: "Wednesday", name: "Destiny Calls", desc: "Praying for alignment with God's prophetic purpose and calling for our lives." },
    { day: "Thursday", name: "Testimony Thursday", desc: "Rejoicing over answered prayers and declaring breakthroughs over stubborn situations." },
    { day: "Friday", name: "Family Friday", desc: "Covering our households, marriages, and children under the blood of Jesus." },
    { day: "Saturday", name: "Psalm Saturday", desc: "Declaring the Psalms as warfare and comfort over our spirits." }
  ];

  const navLinks = [`;

code = code.replace(dataTarget, dataReplacement);
fs.writeFileSync('src/App.tsx', code);
