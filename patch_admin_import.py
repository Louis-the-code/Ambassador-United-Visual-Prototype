with open('src/App.tsx', 'r') as f:
    lines = f.readlines()

lines.insert(2, "import AdminDashboard from './components/AdminDashboard';\n")

with open('src/App.tsx', 'w') as f:
    f.writelines(lines)
    print("Patched imports")
