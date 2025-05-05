import { db } from "./firebase";
import { addDoc, collection, doc, setDoc, getDoc, deleteDoc, getDocs } from "firebase/firestore";

// import { doc, setDoc } from "firebase/firestore"; 

// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

export const firestore = ()=>{
    const addDocToFireStore = async (collectionName, data) => {
        const docRef = await addDoc(collection(db, collectionName), data);
         console.log("Document written with ID: ", docRef.id); 
    }

    const addToWatchList = async (userId, dataId, data) => {
        try {
            if (await isDatainWatchList(userId, dataId)){
                return false
            }
           await setDoc(doc(db, "users", userId, "watch_lists", dataId), data)
           console.log("success")
        } catch (error) {
            console.log(error)
        }
    }

    const isDatainWatchList = async (userId, dataId) => {
        const docRef = doc(
          db,
          "users",
          userId?.toString(),
          "watch_lists",
          dataId?.toString()
        )
    
        const docSnap = await getDoc(docRef)
    
        if(docSnap.exists()){
          return true
        }else{
          return false
        }
      }

    const removeFromWatchList = async (userId, dataId) =>{
      try {
        await deleteDoc(doc(
          db,
          "users",
          userId?.toString(),
          "watch_lists",
          dataId?.toString() 
        ))
      } catch (error) {
        console.log(error)
      }
    }

    const getWatchLists = async (userId) => {
      const querySnapShot = await getDocs(collection(
        db,
          "users",
          userId?.toString(),
          "watch_lists"
      ))

      const data = querySnapShot.docs.map({...doc.data})
      return data
    }

    return {
        addDocToFireStore, addToWatchList, isDatainWatchList, removeFromWatchList, getWatchLists
    }
}


  


