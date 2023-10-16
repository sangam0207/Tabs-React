import { useEffect, useState } from "react";
import Loading from './Loading'
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const[isLoading,setLoading]=useState(true);
  const[user,setUser]=useState([]);
  const [currentItem,setCurrentItm]=useState(0)
  const fetchUser=async()=>{
    setLoading(true);
    try {
      const response=await fetch(url);
      const data=await response.json();
      //console.log(data)
      setUser(data);
      //console.log(user)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
fetchUser();
  },[])
  const changeItem=(index)=>{
    setCurrentItm(index);
  }
  //console.log(user);
  if(isLoading){
    return <Loading/>
  } 
  return <section className="jobs-center">
    <BtnContainer user={user} changeItem={changeItem}/>
    <JobInfo user={user} currentItem={currentItem}/>
  </section>;
};
export default App;
