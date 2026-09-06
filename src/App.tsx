import { Menu, X, Lock, ArrowRight, Play, Clock, BookOpen, Headphones, Youtube, Instagram, MessageCircle, CalendarPlus, Download, User, Mail, MessageSquare, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import AdminDashboard from './components/AdminDashboard';
import { db, collection, getDocs } from './lib/firebase';


export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeStoreFilter, setActiveStoreFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState('Home');

  const [firebasePosts, setFirebasePosts] = useState<any[]>([]);
  const [firebaseProducts, setFirebaseProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsSnapshot = await getDocs(collection(db, 'posts'));
        const productsSnapshot = await getDocs(collection(db, 'products'));
        
        setFirebasePosts(postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setFirebaseProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedPost, selectedProduct]);
  const [isPrayerScheduleOpen, setIsPrayerScheduleOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const currentDayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const prayerThemes = [
    { day: "Sunday", name: "Worship Sunday", desc: "A night dedicated purely to adoring the King of Kings and lifting His name high." },
    { day: "Monday", name: "Prosperity Mondays", desc: "Interceding for divine favor, wisdom, and kingdom impact in our workplaces and assignments." },
    { day: "Tuesday", name: "Intercession Tuesday", desc: "Standing in the gap for global leaders, nations, and the universal church." },
    { day: "Wednesday", name: "Destiny Calls", desc: "Praying for alignment with God's prophetic purpose and calling for our lives." },
    { day: "Thursday", name: "Testimony Thursday", desc: "Rejoicing over answered prayers and declaring breakthroughs over stubborn situations." },
    { day: "Friday", name: "Family Friday", desc: "Covering our households, marriages, and children under the blood of Jesus." },
    { day: "Saturday", name: "Psalm Saturday", desc: "Declaring the Psalms as warfare and comfort over our spirits." }
  ];

  const navLinks = [
    'Home',
    'About',
    'Blog & Series',
    'Schedule',
    'Testimonies',
    'Store',
  ];

  const categories = [
    'ALL', 
    'THE GOSPEL EXPLAINED', 
    'REVELATIONS FOR LIFE', 
    'WORLD NEWS AND CURRENT EVENTS', 
    'ENTERTAINMENT', 
    'PROPHECY'
  ];

    const storeProducts = [
    {
      id: 1,
      title: 'Ambassador Classic Hoodie',
      price: '$45.00',
      type: 'Physical',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      description: 'A premium, heavyweight cotton hoodie featuring the minimal AU logo on the chest and the Ambassador mandate printed on the back. Perfect for everyday wear.'
    },
    {
      id: 2,
      title: 'Heavenly Relief E-Book',
      price: '$12.00',
      type: 'Digital',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      description: 'A comprehensive guide to understanding the rest available to believers. Download this PDF to dive deeper into our core teachings.',
      hasPreview: false,
    },
    {
      id: 3,
      title: 'AU Worship - Vol 1. (MP3)',
      price: '$9.99',
      type: 'Digital',
      mediaType: 'audio',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800',
      description: 'The first volume of our worship series. High-quality digital download of 10 original tracks designed for deep prayer and meditation.',
      hasPreview: true,
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Dummy audio
    },
    {
      id: 5,
      title: 'Minimalist "Unashamed" Cap',
      price: '$22.00',
      type: 'Physical',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882ba54?auto=format&fit=crop&q=80&w=800',
      description: 'A sleek, unstructured 6-panel cap with "UNASHAMED" embroidered in bold white text across the front.'
    },
    {
      id: 6,
      title: 'The Daily Word Journal',
      price: '$25.00',
      type: 'Physical',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      description: 'A beautifully crafted leather-bound journal with daily scripture prompts and blank pages for sermon notes, prayers, and reflections.'
    },
    {
      id: 7,
      title: 'Kingdom Principles Study Guide',
      price: '$15.00',
      type: 'Digital',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
      description: 'An interactive digital workbook designed to accompany the Kingdom Foundations sermon series, featuring discussion questions and deep dives into scripture.',
      hasPreview: false,
    },
    {
      id: 8,
      title: 'Ambassador Tote Bag',
      price: '$18.00',
      type: 'Physical',
      image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640df1?auto=format&fit=crop&q=80&w=800',
      description: 'A durable, eco-friendly canvas tote bag with a minimalist cross design and our core mission statement. Great for carrying your Bible and notes.'
    }
  ];

  const allProducts = [...storeProducts, ...firebaseProducts];
  const filteredStoreProducts = activeStoreFilter === 'ALL'
    ? allProducts
    : allProducts.filter(p => p.type.toUpperCase() === activeStoreFilter);

  const defaultPosts = [
    {
      id: 1,
      title: 'The Blueprint of Heavenly Relief',
      preview: 'Understanding how the kingdom of heaven provides the ultimate rest and relief for the weary soul in modern times.',
      content: 'The concept of heavenly relief is often misunderstood in contemporary society. Many view it simply as an afterlife promise, missing the profound present-day implications. When Jesus preached "the kingdom of heaven is at hand," He was introducing an immediate reality that provides true rest for the weary soul right now.\n\nIn this session, we explore the foundations of this kingdom. It requires a paradigm shift—moving away from striving in our own strength to resting in the finished work of Christ. As ambassadors, we are called to embody this relief and offer it to a world desperate for peace.',
      category: 'THE GOSPEL EXPLAINED',
      series: 'KINGDOM FOUNDATIONS',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 12, 2026',
      hasVideo: true,
      youtubeId: 'jNQXAC9IVRw' // dummy video
    },
    {
      id: 2,
      title: 'Walking as an Ambassador',
      preview: 'Practical steps to representing Christ in your daily life, workplace, and relationships with unashamed boldness.',
      content: 'Being an ambassador is not a title; it is a lifestyle. It means that wherever you go, you represent a different government—the Kingdom of Heaven. How does this look practically in the workplace or at school?\n\nFirst, it changes how we speak. Our words carry the authority and grace of our King. Second, it changes how we react to adversity. Instead of panic, we respond with the peace of our home country. Discover the practical steps to representing Christ unashamedly in every sphere of life.',
      category: 'REVELATIONS FOR LIFE',
      series: null,
      image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 05, 2026',
      hasVideo: false,
    },
    {
      id: 3,
      title: 'The Beatitudes Revealed',
      preview: 'A deep dive into the paradoxical teachings of Jesus on the mount and what they mean for believers today.',
      content: 'The Sermon on the Mount opens with the Beatitudes—statements that completely upend the world\'s value system. "Blessed are the poor in spirit" makes no sense to a culture that praises the self-sufficient and proud.\n\nBy examining these profound paradoxes, we uncover the true nature of a blessed life. It is not found in accumulation or status, but in surrender and spiritual poverty before God. Join us as we break down what these teachings mean for believers navigating the modern world.',
      category: 'THE GOSPEL EXPLAINED',
      series: 'SERMON ON THE MOUNT',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800',
      date: 'Sep 28, 2026',
      hasVideo: true,
      youtubeId: 'dQw4w9WgXcQ' // dummy video
    },
    {
      id: 4,
      title: 'State of the World',
      preview: 'Analyzing current events through a biblical lens to find hope in chaotic times.',
      content: 'With news cycles filled with anxiety and chaos, it can be easy for believers to fall into despair. However, scripture gives us a lens through which to view global events with hope rather than fear.\n\nWe are reminded that God is sovereign over history. Every headline must be read in the light of His eternal plan. Let\'s explore how to stay informed without becoming overwhelmed, maintaining our posture as carriers of good news.',
      category: 'WORLD NEWS AND CURRENT EVENTS',
      series: null,
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
      date: 'Sep 20, 2026',
      hasVideo: false,
    }
  ];

      const allPosts = [...defaultPosts, ...firebasePosts];
  const testimonies = [
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
    },
    {
      id: 7,
      name: "Grace O.",
      location: "Accra, Ghana",
      text: "The revelation of the gospel presented here is so pure and untainted. I've been a Christian for 20 years, but I'm finally understanding my true identity in Christ.",
    },
    {
      id: 8,
      name: "Robert M.",
      location: "Dallas, TX",
      text: "I was on the verge of giving up on my faith entirely before I found this community. The unashamed truth preached here brought me back to life.",
    },
    {
      id: 9,
      name: "Chloe W.",
      location: "London, UK",
      text: "Every time I listen to the AU Worship albums, the presence of God fills my room. It's truly heaven on earth and has revolutionized my personal prayer time.",
    }
  ];

  const partnerProjects = [
    {
      id: 1,
      title: "Global Youth Conference 2027",
      description: "Securing a venue and logistics to host 5,000 young ambassadors for a 3-day equipping summit.",
      progress: 65,
      goal: "$50,000"
    },
    {
      id: 2,
      title: "Digital Ministry Expansion",
      description: "Upgrading our studio equipment to increase the production quality of our weekly sermons and podcasts.",
      progress: 40,
      goal: "$15,000"
    },
    {
      id: 3,
      title: "Ambassador Bible Distribution",
      description: "Translating and distributing study Bibles and our Kingdom Foundations curriculum to remote areas.",
      progress: 85,
      goal: "$10,000"
    }
  ];

  const filteredPosts = activeCategory === 'ALL' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3">
                <div className="flex items-center justify-center h-12 w-12 overflow-hidden">
                  <img src="/logo.png?v=3" alt="Ambassadors United Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-black tracking-wide text-sm hidden sm:block mt-1">
                  AMBASSADORS UNITED
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(link);
                    setSelectedPost(null);
                  }}
                  className={`text-sm font-medium hover:text-[#1e3a8a] transition-colors uppercase tracking-wider ${
                    (currentPage === link && !selectedPost) ? 'text-[#1e3a8a]' : 'text-black'
                  }`}
                >
                  {link}
                </button>
              ))}
              <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-full">
                Connect
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-gray-600 focus:outline-none rounded-full"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(link);
                    setSelectedPost(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium border-b border-gray-50 uppercase tracking-wider ${
                    (currentPage === link && !selectedPost) ? 'text-[#1e3a8a]' : 'text-black'
                  }`}
                >
                  {link}
                </button>
              ))}
              <div className="pt-4 px-3">
                <button onClick={() => { setCurrentPage('Connect'); setSelectedPost(null); setSelectedProduct(null); setIsMobileMenuOpen(false); }} className="w-full bg-[#1e3a8a] text-white px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-full">
                  Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      {currentPage === 'Schedule' && !selectedPost ? (
        <main className="flex-grow bg-gray-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-4 leading-[1.1]">
                Daily Ambassador Schedule
              </h1>
              <div className="w-24 h-2 bg-[#1e3a8a]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Main Schedule Area */}
              <div className="lg:col-span-2 space-y-8">
                {/* Block 1 */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-black transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
                  <div className="flex items-center gap-3 text-[#1e3a8a] font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4" /> 9:00 AM
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-4">Prayer & Scripture</h3>
                  <div className="bg-gray-50 p-5 mb-4 border border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Morning Reading Guide</h4>
                    <p className="text-black font-medium">Ephesians 6:10-20 &mdash; The Armor of God</p>
                    <p className="text-sm text-gray-600 mt-2 font-light">Focus on the "Preparation of the Gospel of Peace" for today's assignments.</p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-black transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                  <div className="flex items-center gap-3 text-black font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4" /> 3:00 PM - 4:00 PM
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-4">Meditation</h3>
                  <div className="border-l-2 border-gray-200 pl-4 py-1">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Reflection Focal Point</h4>
                    <p className="text-gray-700 italic font-medium">"Where have I seen the Kingdom manifest in my interactions today? Where did I represent Heaven poorly?"</p>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#1e3a8a] transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
                  <div className="flex items-center gap-3 text-[#1e3a8a] font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4" /> 6:00 PM - 8:00 PM
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-6">Sermon Time</h3>
                  <div className="aspect-video w-full bg-black mb-4 flex items-center justify-center relative group-hover:shadow-lg transition-shadow">
                    <img src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=800" alt="Sermon Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <button className="relative z-10 w-16 h-16 bg-white flex items-center justify-center hover:scale-105 transition-transform text-black rounded-full">
                      <Play className="w-6 h-6 ml-1" />
                    </button>
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-[#1e3a8a] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">Featured Sermon</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg">The Ambassador's Mandate</h4>
                  <p className="text-sm text-gray-600 mt-1">Pastor David - Sunday Service</p>
                </div>

                {/* Block 4 - Prayer Cloud */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-black transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                  <div className="flex items-center gap-3 text-[#1e3a8a] font-bold text-sm tracking-widest uppercase mb-3">
                    <Clock className="w-4 h-4 text-black" /> 
                    <span className="bg-black text-white px-2 py-1 text-[10px]">TONIGHT AT 12:00 AM</span>
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                    Prayer Cloud — Today's Theme: {prayerThemes[currentDayIndex].name}
                  </h3>
                  <p className="text-gray-600 font-light mb-6">
                    {prayerThemes[currentDayIndex].desc}
                  </p>
                  
                  <button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-6 py-3 font-bold tracking-widest uppercase transition-colors mb-6 rounded-full">
                    Join Nightly Prayer
                  </button>

                  {/* Collapsible Daily Overview */}
                  <div className="border-t border-gray-100 pt-4">
                    <button 
                      onClick={() => setIsPrayerScheduleOpen(!isPrayerScheduleOpen)}
                      className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors w-full text-left rounded-full"
                    >
                      View Daily Prayer Themes
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPrayerScheduleOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isPrayerScheduleOpen && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {prayerThemes.map((theme, idx) => (
                          <div 
                            key={theme.day} 
                            className={`flex flex-col p-3 border-l-2 ${
                              idx === currentDayIndex 
                                ? 'border-[#1e3a8a] bg-blue-50/50' 
                                : 'border-gray-100 bg-gray-50'
                            }`}
                          >
                            <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                              idx === currentDayIndex ? 'text-[#1e3a8a]' : 'text-gray-400'
                            }`}>
                              {theme.day}
                            </span>
                            <span className={`text-sm font-medium ${
                              idx === currentDayIndex ? 'text-black' : 'text-gray-600'
                            }`}>
                              {theme.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Reading Right Now Card */}
                <div className="bg-white border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                    <BookOpen className="w-5 h-5 text-black" />
                    <h3 className="font-black uppercase tracking-tight">Active Studies</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="group cursor-pointer">
                      <h4 className="text-sm font-bold text-[#1e3a8a] group-hover:text-black transition-colors uppercase tracking-widest mb-1">Kingdom Foundations</h4>
                      <p className="text-sm text-gray-600">A 4-week deep dive into the Sermon on the Mount.</p>
                    </div>
                    <div className="group cursor-pointer">
                      <h4 className="text-sm font-bold text-[#1e3a8a] group-hover:text-black transition-colors uppercase tracking-widest mb-1">Apologetics 101</h4>
                      <p className="text-sm text-gray-600">Defending the faith with logic, love, and truth.</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-black text-white px-4 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors rounded-full">
                    Join a Study Group
                  </button>
                </div>

                {/* Music Streaming Section */}
                <div className="bg-[#1e3a8a]/90 backdrop-blur-md text-white border border-white/20 p-6 shadow-lg shadow-[#1e3a8a]/20 rounded-sm">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/20">
                    <Headphones className="w-5 h-5 text-white" />
                    <h3 className="font-black uppercase tracking-tight text-white">AU Worship Playlists</h3>
                  </div>
                  <p className="text-sm font-light text-white/80 mb-6">
                    Stream our curated worship lists designed for prayer, study, and reflection.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white/10 text-white px-5 py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-between hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all rounded-full">
                      <span>Spotify</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-full bg-white/10 text-white px-5 py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-between hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all rounded-full">
                      <span>YouTube Music</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-full bg-white/10 text-white px-5 py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-between hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all rounded-full">
                      <span>Apple Music</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : currentPage === 'Admin' ? (
        <AdminDashboard />
      ) : currentPage === 'Connect' && !selectedPost ? (
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
      ) : selectedProduct ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <button 
              onClick={() => setSelectedProduct(null)} 
              className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group rounded-full"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Store
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
               <div>
                 {selectedProduct.mediaType === 'video' && selectedProduct.youtubeId ? (
                   <div className="aspect-video w-full bg-black mb-6">
                     <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${selectedProduct.youtubeId}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                   </div>
                 ) : (
                   <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full object-cover bg-gray-100 border border-gray-100 mb-6" />
                 )}
               </div>
               <div>
                  <div className="mb-4">
                    <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                      {selectedProduct.type}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-[1.1]">
                    {selectedProduct.title}
                  </h1>
                  <div className="text-2xl font-bold text-[#1e3a8a] mb-6">
                    {selectedProduct.price}
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    {selectedProduct.description}
                  </p>

                  {selectedProduct.mediaType === 'audio' && selectedProduct.audioSrc && (
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-3">Preview Track</h4>
                      <audio controls className="w-full">
                        <source src={selectedProduct.audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}

                  <button className="w-full bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 font-bold tracking-widest uppercase transition-colors rounded-full">
                    Add to Cart
                  </button>
               </div>
            </div>
          </div>
        </main>
      ) : currentPage === 'Store' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mb-16">
              <div className="mb-10 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
                  Official Store
                </h1>
                <div className="w-24 h-2 bg-[#1e3a8a] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 font-light">
                  Resources, apparel, and media to equip you for the journey.
                </p>
              </div>
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 overflow-x-auto pb-2">
                {['ALL', 'PHYSICAL', 'DIGITAL'].map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setActiveStoreFilter(filter)}
                    className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border rounded-full ${
                      activeStoreFilter === filter 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-16">
              {filteredStoreProducts.map((product) => (
                <div key={product.id} className="group flex flex-col h-full">
                  <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100 border border-gray-100 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                      <div className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                        {product.type}
                      </div>
                      {product.hasPreview && (
                        <div className="bg-[#1e3a8a] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
                          <Play className="w-3 h-3 fill-white" /> Preview
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow items-center text-center">
                    <h3 className="text-lg font-bold leading-tight mb-2 cursor-pointer group-hover:text-[#1e3a8a] transition-colors" onClick={() => setSelectedProduct(product)}>
                      {product.title}
                    </h3>
                    <div className="text-gray-600 font-bold mb-6 flex-grow">
                      {product.price}
                    </div>
                    <button className="w-full bg-white border border-black hover:bg-black hover:text-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors rounded-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
              
              {filteredStoreProducts.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <p className="text-gray-500 font-medium">No products found.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : currentPage === 'About' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-0">
          {/* Header Section */}
          <section className="relative bg-black text-white py-32 md:py-48 lg:py-64 flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586726370832-3440a511e479?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>
            
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

          {/* Mission Section */}
          <section className="py-24 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-center">
                <div className="relative h-[400px] md:h-[600px] w-full shadow-2xl rounded-sm overflow-hidden z-0 lg:w-11/12">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544531585-b3fadf704c02?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-all duration-1000 scale-105 hover:scale-100"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border-l-4 border-[#1e3a8a] max-w-xs">
                    <p className="text-white font-bold tracking-widest uppercase text-sm mb-2">Equipping the Saints</p>
                    <p className="text-gray-300 font-light text-xs leading-relaxed">Raising a generation grounded in truth and prepared for the work of the ministry.</p>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center bg-white p-10 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.15)] rounded-sm border border-gray-100 -mt-24 lg:mt-0 lg:-ml-24 relative z-10">
                  <h2 className="text-sm font-bold text-[#1e3a8a] tracking-widest uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-[#1e3a8a]"></span> Our Purpose
                  </h2>
                  <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-10 leading-none">
                    Our Mission
                  </h3>
                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6 text-xl text-black font-medium leading-relaxed">
                      Ambassadors United is a non-denominational Christian platform that seeks to unify the body of Christ in the bond of peace and increase the effectiveness of the preaching of the word to all nations.
                    </p>
                    <p className="mb-6">
                      Its mission is heavenly impact as described by a vision seen by the founder, Brother Louis. As he went to pray in the SCOAN he heard a voice that told him that <strong>"Heaven has always been man's only real source of true relief"</strong>. Our mission is to bring heavenly relief to mankind through the gospel of the Lord Jesus Christ.
                    </p>
                    <p>
                      Our mission is according to our Lord Jesus' prayer which says "Thy Kingdom come" and "Thy will be done on earth as it is in heaven". We seek to build up men to be ambassadors of the gospel of Jesus Christ in heart and in life and establish the Governmental will of heaven here on earth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale mix-blend-screen"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1e3a8a] opacity-20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1e3a8a] opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-[#1e3a8a] tracking-widest uppercase mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-[#1e3a8a]"></span> Our Vision
                  </h2>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 leading-[1.1]">
                    Preparing the world for the return of Jesus Christ.
                  </h3>
                  <div className="w-24 h-1 bg-[#1e3a8a] mb-8"></div>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg shadow-2xl">
                    <div className="w-12 h-12 bg-[#1e3a8a] flex items-center justify-center rounded-full mb-6 shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Thy Kingdom Come
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We seek to build up men to be ambassadors of the gospel of Jesus Christ in heart and in life, establishing the Governmental will of heaven here on earth.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg shadow-2xl">
                    <div className="w-12 h-12 border-2 border-[#1e3a8a] flex items-center justify-center rounded-full mb-6">
                      <div className="w-2 h-2 bg-[#1e3a8a] rounded-full"></div>
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Equipping and Governing
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We equip the saints who would in turn equip and govern the people of the world, making it fit for the iron rule of our soon coming King, Jesus Christ, who is the only blessed Potentate and rightful heir of all things. Praise be to Him forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : currentPage === 'Testimonies' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
                Testimonies
              </h1>
              <div className="w-24 h-2 bg-[#1e3a8a] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 font-light">
                Read how the reality of the Kingdom is transforming lives around the world.
              </p>
            </div>

            <div className="relative mb-20">
              <button 
                onClick={scrollLeft}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm focus:outline-none hidden md:block"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {testimonies.map(t => (
                  <div key={t.id} className="w-[80vw] sm:w-[300px] md:w-[350px] aspect-square shrink-0 snap-center bg-gray-50 border border-gray-100 p-6 md:p-8 hover:border-black transition-colors flex flex-col rounded-xl overflow-hidden">
                  <div className="text-[#1e3a8a] mb-6">
                    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6 flex-grow overflow-y-auto hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-black uppercase tracking-tight">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">{t.location}</p>
                  </div>
                </div>
              ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm focus:outline-none hidden md:block"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-black to-[#0a1535] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl mt-12">
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
                      <input type="text" id="t-name" className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors text-white placeholder-gray-400 rounded-xl" placeholder="YOUR NAME" />
                    </div>
                    <div>
                      <input type="text" id="t-location" className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors text-white placeholder-gray-400 rounded-xl" placeholder="CITY, COUNTRY" />
                    </div>
                    <div>
                      <textarea id="t-message" rows={4} className="block w-full px-4 py-4 bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 outline-none transition-colors resize-none text-white placeholder-gray-400 rounded-xl" placeholder="HOW HAS GOD IMPACTED YOUR LIFE?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black px-8 py-4 font-bold tracking-widest uppercase transition-colors text-sm rounded-full">
                      Submit Testimony
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : currentPage === 'Blog & Series' && !selectedPost && !selectedProduct ? (
        <main className="flex-grow bg-gray-50 py-12 md:py-20 relative overflow-hidden">
          {/* subtle background effect for the whole page to complement glassmorphism */}
          <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-4">
                    Blog & Series
                  </h1>
                  <div className="w-24 h-2 bg-[#1e3a8a] mb-6"></div>
                  <p className="text-lg text-gray-600 font-light max-w-2xl">
                    Dive into our latest teachings, prophetic words, and foundational series designed to equip you for kingdom living.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap border rounded-full ${
                      activeCategory === category 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white/60 backdrop-blur-md text-gray-600 border-white/40 shadow-sm hover:bg-white hover:border-black hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-200 pb-4">Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.filter(p => !p.hasVideo).map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer flex flex-col h-full bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative h-56 mb-6 overflow-hidden rounded-xl bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow px-2">
                      <time className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">
                        {post.date}
                      </time>
                      <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-[#1e3a8a] transition-colors">
                        {post.title}
                      </h3>
                      {post.series && (
                        <div className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-3">
                          Part of Series: {post.series}
                        </div>
                      )}
                      <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                        {post.preview}
                      </p>
                      <div className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-2 group-hover:text-[#1e3a8a]">
                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-8 border-b border-gray-200 pb-4">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredPosts.filter(p => p.hasVideo).map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer flex flex-col md:flex-row bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-64 md:h-full md:w-2/5 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1e3a8a] transition-all duration-500">
                          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow p-6 md:p-8">
                      <time className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 block">
                        {post.date}
                      </time>
                      <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-[#1e3a8a] transition-colors">
                        {post.title}
                      </h3>
                      {post.series && (
                        <div className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase mb-3">
                          Part of Series: {post.series}
                        </div>
                      )}
                      <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                        {post.preview}
                      </p>
                      <div className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-2 group-hover:text-[#1e3a8a]">
                        Watch Video <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Podcast Section */}
            <div className="bg-gradient-to-r from-black to-[#0a1535] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-grow max-w-2xl text-center md:text-left">
                  <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Listen on the go</h2>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                    The Kingdom Impact Podcast
                  </h3>
                  <p className="text-gray-300 font-light text-lg mb-8">
                    Take our teachings with you. Subscribe to our weekly podcast for deeper dives into scripture, prophetic insights, and testimonies from ambassadors around the world.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <button className="bg-white text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 rounded-full">
                      <Play className="w-4 h-4 fill-black" /> Spotify
                    </button>
                    <button className="bg-transparent border border-white/30 text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors flex items-center gap-2 rounded-full">
                      <Play className="w-4 h-4 fill-white" /> Apple Podcasts
                    </button>
                  </div>
                </div>
                <div className="shrink-0 relative hidden sm:block">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 p-2 overflow-hidden bg-black/50 backdrop-blur-sm">
                     <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800" alt="Podcast Cover" className="w-full h-full object-cover rounded-full grayscale opacity-80" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#1e3a8a] text-white p-4 rounded-full shadow-lg">
                    <Headphones className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      ) : selectedPost ? (
        <main className="flex-grow bg-white py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedPost(null)} 
              className="mb-8 font-bold text-sm uppercase tracking-widest text-black hover:text-[#1e3a8a] transition-colors flex items-center gap-2 group rounded-full"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </button>

            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                  {selectedPost.category}
                </span>
                {selectedPost.series && (
                  <span className="bg-gray-100 text-[#1e3a8a] text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                    PART OF SERIES: {selectedPost.series}
                  </span>
                )}
              </div>
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black mb-6 leading-[1.1]">
                {selectedPost.title}
              </h1>
              <time className="text-sm font-bold text-gray-400 tracking-widest uppercase block">
                {selectedPost.date}
              </time>
            </header>
            
            {selectedPost.hasVideo && selectedPost.youtubeId ? (
              <div className="mb-12 aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${selectedPost.youtubeId}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full max-h-[500px] object-cover mb-12 bg-gray-100" />
            )}
            
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-light whitespace-pre-wrap">
              {selectedPost.content}
            </div>
          </div>
        </main>
      ) : (
        <>
          {/* Hero Banner */}
          <section className="relative bg-black text-white pt-32 pb-40 lg:pt-48 lg:pb-56 flex items-center overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat transform scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                  Heaven has always been man's only real source of true relief.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light mb-10 max-w-2xl drop-shadow-md">
                  Equipping saints to be ambassadors of the gospel in heart and life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => { setCurrentPage('About'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group backdrop-blur-sm border border-white/10 rounded-full">
                    Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => { setCurrentPage('Blog & Series'); setSelectedPost(null); setSelectedProduct(null); }} className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all text-center backdrop-blur-sm rounded-full">
                    Read the Blog
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Short Vision Intro */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-16 h-1 bg-[#1e3a8a] mx-auto mb-8"></div>
              <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">The Vision</h2>
              <blockquote className="text-2xl md:text-4xl font-light italic leading-tight text-black mb-10">
                "We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ."
              </blockquote>
              <button 
                onClick={() => { setCurrentPage('About'); setSelectedPost(null); setSelectedProduct(null); }}
                className="bg-[#1e3a8a] hover:bg-black text-white px-10 py-5 text-base md:text-lg font-bold uppercase tracking-widest flex items-center gap-3 transition-colors mx-auto group rounded-full"
              >
                Read More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>

          
        </>
      )}

      {/* Email Capture Section */}
      {(currentPage === 'Blog & Series') && !selectedPost && !selectedProduct && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-white p-10 md:p-16 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="inline-block bg-[#1e3a8a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
                  Free Resource
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                  Get Your Free 'Heavenly Relief' PDF
                </h2>
                <p className="text-gray-300 text-lg mb-10 font-light">
                  Sign up for our newsletter to receive our latest resources, devotionals, and updates directly to your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    required
                    className="flex-grow bg-white/10 border border-white/20 text-white placeholder-gray-400 px-6 py-4 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium tracking-wide rounded-xl"
                  />
                  <button 
                    type="submit"
                    className="bg-[#1e3a8a] hover:bg-[#152c6b] text-white px-8 py-4 font-bold tracking-widest uppercase transition-colors whitespace-nowrap rounded-full"
                  >
                    Subscribe & Download
                  </button>
                </form>
                <p className="text-gray-500 text-xs mt-6 uppercase tracking-wider">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-12 w-12 overflow-hidden">
              <img src="/logo.png?v=3" alt="Ambassadors United Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Ambassadors United. All rights reserved.
            </div>
            <button 
              onClick={() => setCurrentPage('Admin')} 
              className="text-gray-500 hover:text-white transition-colors focus:outline-none flex items-center justify-center mt-2 sm:mt-0"
              title="Admin Access"
            >
              <Lock className="w-5 h-5 opacity-80 hover:opacity-100 text-gray-400" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
