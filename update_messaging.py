import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Update categories
old_categories = """  const categories = [
    'ALL', 
    'THE GOSPEL EXPLAINED', 
    'REVELATIONS FOR LIFE', 
    'WORLD NEWS', 
    'ENTERTAINMENT', 
    'PROPHECY'
  ];"""

new_categories = """  const categories = [
    'ALL', 
    'THE GOSPEL EXPLAINED', 
    'REVELATIONS FOR LIFE', 
    'WORLD NEWS AND CURRENT EVENTS', 
    'ENTERTAINMENT', 
    'PROPHECY'
  ];"""

code = code.replace(old_categories, new_categories)


# Update About page - Mission Section
old_mission_text = """                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6 text-xl text-black font-medium leading-relaxed">
                      Ambassadors United is a non-denominational movement dedicated to equipping the saints for the work of the ministry. 
                    </p>
                    <p className="mb-6">
                      We believe in tearing down walls of division to unite believers under one banner: the Gospel of Jesus Christ.
                    </p>
                    <p>
                      Our mission is to empower individuals to step into their calling, not just as believers, but as active ambassadors of heaven, representing the Kingdom's culture, authority, and love in every sphere of society.
                    </p>
                  </div>"""

new_mission_text = """                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6 text-xl text-black font-medium leading-relaxed">
                      Ambassadors United is a non-denominational Christian platform that seeks to unify the body of Christ in the bond of peace and increase the effectiveness of the preaching of the word to all nations.
                    </p>
                    <p className="mb-6">
                      Its mission is heavenly impact as described by a vision seen by the founder, Brother Louis. As he went to pray in the SCOAN he heard a voice that told him that <strong>"Heaven has always been man's only real source of true relief"</strong>. Our mission is to bring heavenly relief to mankind through the gospel of the Lord Jesus Christ.
                    </p>
                    <p>
                      Our mission is according to our Lord Jesus' prayer which says "Thy Kingdom come" and "Thy will be done on earth as it is in heaven". We seek to build up men to be ambassadors of the gospel of Jesus Christ in heart and in life and establish the Governmental will of heaven here on earth.
                    </p>
                  </div>"""

code = code.replace(old_mission_text, new_mission_text)

# Update About page - Vision Section - first box
old_vision_box1 = """                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We are passionate about seeing the will of heaven established on earth. This means bringing the relief, healing, and truth of the Kingdom into our homes, workplaces, and communities.
                    </p>"""

new_vision_box1 = """                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We seek to build up men to be ambassadors of the gospel of Jesus Christ in heart and in life, establishing the Governmental will of heaven here on earth.
                    </p>"""

code = code.replace(old_vision_box1, new_vision_box1)

# Update About page - Vision Section - second box
old_vision_box2 = """                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Laying the Groundwork
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      Raising a generation that is unashamed, equipped, and ready for His glorious appearing. We aim to be a light in a world desperate for the truth of the Gospel.
                    </p>"""

new_vision_box2 = """                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                      Equipping and Governing
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      We equip the saints who would in turn equip and govern the people of the world, making it fit for the iron rule of our soon coming King, Jesus Christ, who is the only blessed Potentate and rightful heir of all things. Praise be to Him forever.
                    </p>"""

code = code.replace(old_vision_box2, new_vision_box2)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched App.tsx")
