const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

const newTestimonies = `  const testimonies = [
    {
      id: 1,
      name: "Sarah J.",
      location: "London, UK",
      text: "Ambassadors United completely shifted my perspective on what it means to be a believer. I no longer just 'go to church'—I bring the Kingdom into my workplace every single day.",
    },
    {
      id: 2,
      name: "Michael T.",
      location: "Lagos, Nigeria",
      text: "The Kingdom Foundations masterclass gave me the bold confidence I needed to share my faith unashamedly. The teachings on heavenly relief changed my life.",
    },
    {
      id: 3,
      name: "Elena R.",
      location: "São Paulo, Brazil",
      text: "Finding this community has been an answered prayer. Through the midnight prayer clouds, I've seen miraculous breakthroughs in my family's health and peace.",
    },
    {
      id: 4,
      name: "David K.",
      location: "Nairobi, Kenya",
      text: "The podcasts and blog series provide such rich, meat-in-due-season teachings. My spiritual growth has accelerated beyond anything I imagined.",
    },
    {
      id: 5,
      name: "Amanda L.",
      location: "Toronto, Canada",
      text: "I used to struggle with anxiety and doubt, but the Equipping the Saints resources gave me a solid foundation in the Word. I now live from a place of victory.",
    },
    {
      id: 6,
      name: "James P.",
      location: "Sydney, Australia",
      text: "Connecting with believers globally who carry the same fire has been incredible. This isn't just a ministry; it's a movement of true ambassadors.",
    }
  ];`;

// Replace testimonies array
code = code.replace(/const testimonies = \[[\s\S]*?\];/, newTestimonies);

// Replace grid with horizontal scroll
const oldGrid = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {testimonies.map(t => (
                <div key={t.id} className="bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-full">`;

const newGrid = `<div className="flex overflow-x-auto gap-6 md:gap-8 mb-20 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {testimonies.map(t => (
                <div key={t.id} className="min-w-[85vw] md:min-w-[400px] shrink-0 snap-center bg-gray-50 border border-gray-100 p-8 hover:border-black transition-colors flex flex-col h-auto self-stretch">`;

if (code.includes(oldGrid)) {
    code = code.replace(oldGrid, newGrid);
    fs.writeFileSync('src/App.tsx', code);
    console.log("Success");
} else {
    console.log("Could not find the grid code");
}
