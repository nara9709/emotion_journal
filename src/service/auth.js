import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';
import firebaseApp from './firebase';

const auth = getAuth(firebaseApp);

class AuthService {
  loginWithAuth(providerName) {
    let authProvider = undefined;

    if (providerName === 'Google') {
      authProvider = new GoogleAuthProvider();
    } else {
      authProvider = new GithubAuthProvider();
    }

    return signInWithPopup(auth, authProvider);
  }

  loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  logOut() {
    return signOut(auth);
  }
}

export default AuthService;
