import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (images) => {
    
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection(images)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = []
            snap.forEach( doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [images])

    return { docs }
}

export default useFirestore;
