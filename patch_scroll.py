import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

scroll_funcs = """  const [isPrayerScheduleOpen, setIsPrayerScheduleOpen] = useState(false);
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
  };"""

code = code.replace("  const [isPrayerScheduleOpen, setIsPrayerScheduleOpen] = useState(false);", scroll_funcs)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Added scroll functions")
