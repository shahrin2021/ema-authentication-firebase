import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firecase.conficg";

const firebaseInitializeAuthentication=()=>{
    initializeApp(firebaseConfig)
}

export default firebaseInitializeAuthentication;


/* steps for authenticatin 
--------------------------
Initial setup
1.firebase create project 
2.create web app
3.get configuration 
4.initialize firebase
5.eable auth method


----------------------------

step 2
-----------------
1.create login Component
2.Sreate register component 
3.Create route login or register

--------------------------
step 3
1.set up sign method 
2.setup sign out method 
3.user state
4.special observer
5.export nessary method and state from useFirebase
-----------------------------
step 4
1.create a auth context 
2. create context provider 
3.use auth provider 
4.create useAuth hooks


*/