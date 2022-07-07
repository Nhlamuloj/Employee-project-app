import{db} from "../firebase-config";

import { collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc  } from "firebase/firestore";

const userCollectionRef = collection(db,"users")
class userDataservice{

    addUsers= (newUser)=>{
        return addDoc(userCollectionRef, newUser)
    }
    updateUsers= (id, updatedUser)=>{
        const  UserDoc =doc(db,"users",id);
        return updateDoc(UserDoc,updatedUser)
    }
    deleteUser= (id) =>{
        const  UserDoc =doc(db,"users",id);
        return deleteDoc(UserDoc)
    }

    getAllUser =() =>{
        return getDocs(userCollectionRef)
    }

    getUser =(id)=>{
        const UserDoc =doc(db,"users", id);
        return getDoc(UserDoc);
    }
    

}




export default new userDataservice();