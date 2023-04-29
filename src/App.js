import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data); 
      } catch {
        toast.error("Something went wrong");
      }
      setloading(false)
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div>
      <Navbar />
      </div>
      <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)}
      </div>
    </div>
  );
};
export default App;
