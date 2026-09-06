import re

with open('src/lib/firebase.ts', 'r') as f:
    code = f.read()

old_config = '''const firebaseConfig = {
  apiKey: "AIzaSyBP5fiSa5Ib2S0B2dzhRVyh8Of8OQRF-Dg",
  authDomain: "gen-lang-client-0434326729.firebaseapp.com",
  projectId: "gen-lang-client-0434326729",
  storageBucket: "gen-lang-client-0434326729.firebasestorage.app",
  messagingSenderId: "483984820541",
  appId: "1:483984820541:web:3969504268511a36e7dd54"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);'''

new_config = '''import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const storage = getStorage(app);'''

code = code.replace(old_config, new_config)

with open('src/lib/firebase.ts', 'w') as f:
    f.write(code)

