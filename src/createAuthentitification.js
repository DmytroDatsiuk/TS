import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  GoogleAuthProvider,
  getRedirectResult,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';

export default class AccountMenegment {
  constructor() {
    this.state = {
      email: '',
      password: '',
      isOnline: false,
      user: {},
      hasAccount: false,
      firebaseConfig: {
        apiKey: 'AIzaSyDeT-dGvxxhBoToHkpCqsX7i-ne2DJAg_c',
        authDomain: 'filmo-8db62.firebaseapp.com',
        databaseURL:
          'https://filmo-8db62-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'filmo-8db62',
        storageBucket: 'filmo-8db62.appspot.com',
        messagingSenderId: '149168873978',
        appId: '1:149168873978:web:0a78e8fdaccd0ecfa7c443',
      },
    };
  }

  online(bool) {
    this.state.isOnline = bool;
  }

  auth() {
    const app = initializeApp(this.state.firebaseConfig);
    return getAuth(app);
  }

  checkStatusAcc() {
    const authe = getAuth();
    return onAuthStateChanged(authe, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('auth', user);
        console.log(uid);
        // ...
      } else {
        console.log('if not auth', user);
        // User is signed out
        // ...
      }
    });
  }

  db() {
    const app = initializeApp(this.state.firebaseConfig);
    return getDatabase(app);
  }

 async readDataBas() {
    const dbRef = ref(getDatabase());
    const userName = this.userName()
    const {user} = this.state
    get(child(dbRef, `${userName}${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  writeToDataBase() {
    const db = getDatabase();
    const userName = this.userName();
    const { email, isOnline, hasAccount, user } = this.state;
    set(ref(db, userName + user.uid), {
      username: email,
      isOnline: isOnline,
      hasAccount: hasAccount,
    });
  }

  userName() {
    const nameEmail = this.state.email.split('');
    // console.log(nameEmail)
    const idx = nameEmail.indexOf('@');
    return nameEmail.slice(0, idx).join('');
  }

  setEmailAndPassword(newEmail, newPassword) {
    this.state.email = newEmail;
    this.state.password = newPassword;
  }

  hasAccountTrueOrFalse(bool) {
    this.state.hasAccount = bool;
  }

  async createUser() {
    const { email, password } = this.state;
    const response = await createUserWithEmailAndPassword(
      this.auth(),
      email,
      password
    );
    return response;
  }
  async login() {
    const { email, password } = this.state;

    const response = await signInWithEmailAndPassword(
      this.auth(),
      email,
      password
    );

    return response;
  }
  logOut() {
    return signOut(this.auth());
  }
  async deleteAccount() {
    const response = await deleteUser(this.state.user);
    return response;
  }
}
