import re

with open('src/components/AdminDashboard.tsx', 'r') as f:
    code = f.read()

old_create_post = """  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      ...postForm,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      createdAt: serverTimestamp()
    });
    setPostForm({ title: '', content: '', category: '', image: '', youtubeId: '' });
    fetchData();
  };"""

new_create_post = """  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      ...postForm,
      hasVideo: !!postForm.youtubeId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      createdAt: serverTimestamp()
    });
    setPostForm({ title: '', content: '', category: '', image: '', youtubeId: '' });
    fetchData();
  };"""

code = code.replace(old_create_post, new_create_post)

with open('src/components/AdminDashboard.tsx', 'w') as f:
    f.write(code)
    print("Patched createPost")
