import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Add imports for firebase
import_statement = "import { db, collection, getDocs } from './lib/firebase';\n"
lines = code.split('\n')
lines.insert(3, import_statement)
code = '\n'.join(lines)

state_vars = """
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
"""

code = code.replace("  const [currentPage, setCurrentPage] = useState('Home');", "  const [currentPage, setCurrentPage] = useState('Home');\n" + state_vars)

# update filteredStoreProducts to use allProducts
code = code.replace(
    "const filteredStoreProducts = activeStoreFilter === 'ALL'\n    ? storeProducts\n    : storeProducts.filter(p => p.type.toUpperCase() === activeStoreFilter);",
    """const allProducts = [...storeProducts, ...firebaseProducts];
  const filteredStoreProducts = activeStoreFilter === 'ALL'
    ? allProducts
    : allProducts.filter(p => p.type.toUpperCase() === activeStoreFilter);"""
)

# update recentPosts usage. Wait, I'll define allPosts and replace recentPosts.map with allPosts.map and so on.
# Or just rename recentPosts to defaultPosts, and define recentPosts = [...defaultPosts, ...firebasePosts];
code = code.replace("const recentPosts = [", "const defaultPosts = [")

code = re.sub(
    r'(const defaultPosts = \[\s*\{.*?\n    \},\n  \];)',
    r'\1\n  const recentPosts = [...defaultPosts, ...firebasePosts];',
    code,
    flags=re.DOTALL
)

with open('src/App.tsx', 'w') as f:
    f.write(code)
    print("Patched App.tsx")
