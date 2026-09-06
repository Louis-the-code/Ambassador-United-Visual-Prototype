import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Instead of regex, let's just find the end of defaultPosts.
# we know defaultPosts ends at line 173 (approx).
# Actually, I can just do:
code = code.replace("recentPosts.map(", "allPosts.map(")
code = code.replace("recentPosts.filter(", "allPosts.filter(")
code = code.replace("recentPosts.slice(", "allPosts.slice(")
code = code.replace("recentPosts[0]", "allPosts[0]")
code = code.replace("recentPosts[", "allPosts[")

# and then add const allPosts = [...defaultPosts, ...firebasePosts]; right after the defaultPosts declaration.
# Let's search for "const testimonies =" to insert it right before that.
code = code.replace(
    "const testimonies =",
    "const allPosts = [...defaultPosts, ...firebasePosts];\n  const testimonies ="
)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Fixed posts")
