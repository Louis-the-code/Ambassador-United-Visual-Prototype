import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetAbout = `              <div className="bg-black text-white p-10 md:p-16 mb-16 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">The Vision of Brother Louis</h2>
                  <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                    HEAVENLY IMPACT
                  </h3>
                </div>
              </div>`;

const replacementAbout = `              <div className="bg-black text-white p-10 md:p-16 lg:p-24 mb-16 relative overflow-hidden text-center flex items-center justify-center min-h-[300px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 w-full">
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                    HEAVENLY IMPACT
                  </h3>
                </div>
              </div>`;

code = code.replace(targetAbout, replacementAbout);

const targetButton = `                Read more about the vision <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />`;
const replacementButton = `                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />`;

code = code.replace(targetButton, replacementButton);

const targetEmail = `      {/* Email Capture Section */}
      {(currentPage === 'Home' || currentPage === 'About' || currentPage === 'Connect') && !selectedPost && !selectedProduct && (`;
const replacementEmail = `      {/* Email Capture Section */}
      {(currentPage === 'About' || currentPage === 'Connect') && !selectedPost && !selectedProduct && (`;

code = code.replace(targetEmail, replacementEmail);

fs.writeFileSync('src/App.tsx', code);
