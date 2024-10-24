import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { collection, deleteDoc, onSnapshot, orderBy, query, doc } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const MyState = (props) => {
const [mode, setmode] = useState('light');

const [searchkey, setSearchkey] = useState('')
const [loading, setloading] = useState(false);
const [getAllBlog, setGetAllBlog] = useState([]);


const toggleMode = () =>{
    if (mode === 'light') {
        setmode('dark')
        document.body.style.backgroundColor = 'rbg(17 , 24 , 29)'
    }else{
        setmode('light')
        document.body.style.backgroundColor = 'white'


    }
}


function getAllBlogs() {
    setloading(true);
    try {
        const q = query(
            collection(fireDb, "blogPost"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let blogArray = [];
            QuerySnapshot.forEach((doc) => {
                blogArray.push({ ...doc.data(), id: doc.id });
            });
            
            setGetAllBlog(blogArray)
            // console.log(productsArray)   
                     setloading(false)

        });
        return () => data;
    } catch (error) {
        console.log(error)
        setloading(false)
    }
}


// Blog Delete Function 
const deleteBlogs = async (id) => {
  try {
      await deleteDoc(doc(fireDb, "blogPost", id));
      getAllBlogs()
      toast.success("Blogs deleted successfully")
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
    getAllBlogs();
}, []);

  return (
    <MyContext.Provider value={{
      mode,
      toggleMode,
      searchkey,
      setSearchkey,
      loading,
      setloading,
      getAllBlog,
      deleteBlogs
  }}>
      {props.children}
  </MyContext.Provider>
  )
}

export default MyState