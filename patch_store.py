import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

new_store = """  const storeProducts = [
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
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=800',
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
  ];"""

code = re.sub(r'const storeProducts = \[[\s\S]*?\];', new_store, code)

with open('src/App.tsx', 'w') as f:
    f.write(code)
