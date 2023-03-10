import {doc,setDoc,query,collection,orderBy,getDocs} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async(data) =>{
    await setDoc(
        doc(firestore,'clothes',`${Date.now()}`),data,{merge:true,}
    );
};
export const getAllData = async () =>{
    const items = await getDocs(
        query(collection(firestore,"clothes"),orderBy("id","desc"))
    );
    return items.docs.map((doc) => doc.data());
};