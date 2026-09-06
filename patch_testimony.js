import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldTestimony = `<div className="max-w-2xl mx-auto bg-black text-white p-10 md:p-16">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Share Your Testimony</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="t-name" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Name</label>
                  <input type="text" id="t-name" className="block w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-white focus:ring-0 outline-none transition-colors" placeholder="YOUR NAME" />
                </div>
                <div>
                  <label htmlFor="t-location" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Location</label>
                  <input type="text" id="t-location" className="block w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-white focus:ring-0 outline-none transition-colors" placeholder="CITY, COUNTRY" />
                </div>
                <div>
                  <label htmlFor="t-message" className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Your Story</label>
                  <textarea id="t-message" rows={4} className="block w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-white focus:ring-0 outline-none transition-colors resize-none" placeholder="HOW HAS GOD IMPACTED YOUR LIFE?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 font-bold tracking-widest uppercase transition-colors">
                  Submit Testimony
                </button>
              </form>
            </div>`;

const newTestimony = `<div className="bg-gradient-to-r from-black to-[#0a1535] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-grow max-w-lg text-center md:text-left">
                  <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Your Story</h2>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                    Share Your Testimony
                  </h3>
                  <p className="text-gray-300 font-light text-lg mb-8">
                    Your story can inspire and encourage someone else. Let the world know what God has done for you.
                  </p>
                </div>
                
                <div className="shrink-0 w-full md:w-1/2">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input type="text" id="t-name" className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors rounded-xl text-white placeholder-gray-400" placeholder="YOUR NAME" />
                    </div>
                    <div>
                      <input type="text" id="t-location" className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors rounded-xl text-white placeholder-gray-400" placeholder="CITY, COUNTRY" />
                    </div>
                    <div>
                      <textarea id="t-message" rows={4} className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors resize-none rounded-xl text-white placeholder-gray-400" placeholder="HOW HAS GOD IMPACTED YOUR LIFE?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black px-8 py-4 font-bold tracking-widest uppercase transition-colors rounded-full text-sm">
                      Submit Testimony
                    </button>
                  </form>
                </div>
              </div>
            </div>`;

if (code.includes(oldTestimony)) {
    code = code.replace(oldTestimony, newTestimony);
    fs.writeFileSync('src/App.tsx', code);
    console.log("Successfully replaced");
} else {
    console.log("Not found");
}

