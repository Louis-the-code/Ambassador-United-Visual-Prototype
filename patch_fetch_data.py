import re

with open('src/App.tsx', 'r') as f:
    code = f.read()

# Add imports for firebase
import_statement = "import { db, collection, getDocs } from './lib/firebase';\n"
lines = code.split('\n')
lines.insert(3, import_statement)
code = '\n'.join(lines)

# Find where to add useEffect
hook_insertion = """
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

# Replace static arrays with combined arrays
# Find the end of `const storeProducts = [...];` and `const recentPosts = [...];`
# Actually, I can just append `const allProducts = [...storeProducts, ...firebaseProducts];`
# and `const allPosts = [...recentPosts, ...firebasePosts];`

# Let's search for "const filteredStoreProducts = "
code = code.replace(
    "const filteredStoreProducts = activeStoreFilter === 'ALL'",
    "const allProducts = [...storeProducts, ...firebaseProducts];\n  const filteredStoreProducts = activeStoreFilter === 'ALL'\n    ? allProducts\n    : allProducts.filter(p => p.type.toUpperCase() === activeStoreFilter);\n  // old check: activeStoreFilter === 'ALL'"
)
# Since I messed up the replace slightly by matching part, I'll use regex.
