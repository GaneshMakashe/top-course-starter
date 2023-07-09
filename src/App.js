import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";


const App = () => {
  //Failed Could not fetch because no loader was added which gives null value before fetching
  // const[courses,setCourses]=useState(null);

  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     try{
  //       const res=await fetch(apiUrl);
  //       const output=await res.json();
  //       //save data into a variable
  //       setCourses(output.data);
  //       console.log("printing");
  //       console.log(courses);

  //     }catch(error){
  //       toast.error("Something Went Wrong");
  //     }
  //   }
  //   fetchData();
  // },[]);

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory]=useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output->
      console.log(output)
      setCourses(output.data);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return <div className="min-h-screen flex flex-col bg-bgDark2">
    <div><Navbar /></div>
    <div className="">
      <div><Filter filterData={filterData} category={category} setCategory={setCategory}/></div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex-wrap flex justify-center items-center min-h-[50vw]">
        {/* if loading is true then spinner will be visible or else cards  */}
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>

  </div>;
};

export default App;
