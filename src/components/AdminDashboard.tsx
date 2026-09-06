import React, { useState, useEffect } from 'react';
import { auth, db, googleProvider, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { LogOut, Plus, Trash2, Activity, Box, FileText } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  
  // Data state
  const [posts, setPosts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  // Form state
  const [postForm, setPostForm] = useState({ title: '', content: '', category: '', image: '', youtubeId: '' });
  const [productForm, setProductForm] = useState({ title: '', price: '', type: 'Physical', description: '', image: '' });

  const ALLOWED_EMAILS = ['ampobilouis@gmail.com']; // Add allowed admin emails here

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (currentUser.email && ALLOWED_EMAILS.includes(currentUser.email)) {
          setUser(currentUser);
          fetchData();
        } else {
          signOut(auth);
          alert("Unauthorized: You do not have permission to access the admin portal.");
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    const postsSnapshot = await getDocs(collection(db, 'posts'));
    setPosts(postsSnapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    
    const productsSnapshot = await getDocs(collection(db, 'products'));
    setProducts(productsSnapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error(error);
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        alert("Login Error: " + error.message + "\n\nMake sure Google Sign-In is enabled in your Firebase Authentication settings.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      ...postForm,
      hasVideo: !!postForm.youtubeId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      createdAt: serverTimestamp()
    });
    setPostForm({ title: '', content: '', category: '', image: '', youtubeId: '' });
    fetchData();
  };

  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'products'), {
      ...productForm,
      createdAt: serverTimestamp()
    });
    setProductForm({ title: '', price: '', type: 'Physical', description: '', image: '' });
    fetchData();
  };

  const deleteItem = async (collectionName: string, id: string) => {
    if (confirm('Are you sure?')) {
      await deleteDoc(doc(db, collectionName, id));
      fetchData();
    }
  };

  if (loading) return <div className="p-20 text-center">Loading...</div>;

  if (!user) {
    return (
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Admin Portal</h2>
          <p className="text-gray-500 mb-8 text-sm">Sign in to manage your content</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-black text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tight leading-none mb-1">Dashboard</h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            {[
              { id: 'dashboard', icon: Activity, label: 'Analytics' },
              { id: 'posts', icon: FileText, label: 'Blog & Videos' },
              { id: 'products', icon: Box, label: 'Merchandise' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors ${
                  activeTab === tab.id ? 'bg-black text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" /> {tab.label}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Total Posts</div>
                    <div className="text-5xl font-black">{posts.length}</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Total Products</div>
                    <div className="text-5xl font-black">{products.length}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-6">Create New Post/Video</h3>
                  <form onSubmit={createPost} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Title</label>
                      <input required type="text" value={postForm.title} onChange={e => setPostForm({...postForm, title: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Content</label>
                      <textarea required value={postForm.content} onChange={e => setPostForm({...postForm, content: e.target.value})} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors resize-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Category</label>
                        <input type="text" value={postForm.category} onChange={e => setPostForm({...postForm, category: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Image URL</label>
                        <input required type="url" value={postForm.image} onChange={e => setPostForm({...postForm, image: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">YouTube Video ID (Optional)</label>
                      <input type="text" value={postForm.youtubeId} onChange={e => setPostForm({...postForm, youtubeId: e.target.value})} placeholder="e.g. jNQXAC9IVRw" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                    </div>
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Publish Post
                    </button>
                  </form>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-6">Manage Posts</h3>
                  <div className="space-y-4">
                    {posts.map(post => (
                      <div key={post.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-black transition-colors">
                        <div>
                          <div className="font-bold">{post.title}</div>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </div>
                        <button onClick={() => deleteItem('posts', post.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-6">Add Merchandise</h3>
                  <form onSubmit={createProduct} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Title</label>
                        <input required type="text" value={productForm.title} onChange={e => setProductForm({...productForm, title: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Price (e.g. $25.00)</label>
                        <input required type="text" value={productForm.price} onChange={e => setProductForm({...productForm, price: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Description</label>
                      <textarea required value={productForm.description} onChange={e => setProductForm({...productForm, description: e.target.value})} rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors resize-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Type</label>
                        <select value={productForm.type} onChange={e => setProductForm({...productForm, type: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors">
                          <option>Physical</option>
                          <option>Digital</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Image URL</label>
                        <input required type="url" value={productForm.image} onChange={e => setProductForm({...productForm, image: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors" />
                      </div>
                    </div>
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Add Product
                    </button>
                  </form>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-6">Manage Merchandise</h3>
                  <div className="space-y-4">
                    {products.map(product => (
                      <div key={product.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-black transition-colors">
                        <div className="flex items-center gap-4">
                          <img src={product.image} className="w-12 h-12 rounded bg-gray-100 object-cover" />
                          <div>
                            <div className="font-bold">{product.title}</div>
                            <div className="text-xs text-gray-500">{product.price}</div>
                          </div>
                        </div>
                        <button onClick={() => deleteItem('products', product.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
