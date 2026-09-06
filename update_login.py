import re

with open('src/components/AdminDashboard.tsx', 'r') as f:
    code = f.read()

old_login = """  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };"""

new_login = """  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error(error);
      alert("Login Error: " + error.message + "\\n\\nMake sure Google Sign-In is enabled in your Firebase Authentication settings.");
    }
  };"""

code = code.replace(old_login, new_login)

with open('src/components/AdminDashboard.tsx', 'w') as f:
    f.write(code)

