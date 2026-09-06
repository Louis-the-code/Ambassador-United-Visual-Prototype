import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

new_testimonies = """  const testimonies = [
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
  ];"""

code = re.sub(r'const testimonies = \[[\s\S]*?\];', new_testimonies, code)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Success")
