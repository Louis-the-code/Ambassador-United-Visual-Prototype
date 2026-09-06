import re

with open('src/components/AdminDashboard.tsx', 'r') as f:
    code = f.read()

# Replace the auth state changed logic
old_use_effect = """  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchData();
      }
    });
    return () => unsubscribe();
  }, []);"""

new_use_effect = """  const ALLOWED_EMAILS = ['ampobilouis@gmail.com']; // Add allowed admin emails here

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
  }, []);"""

code = code.replace(old_use_effect, new_use_effect)

with open('src/components/AdminDashboard.tsx', 'w') as f:
    f.write(code)
    print("Patched AdminDashboard.tsx")
