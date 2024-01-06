import React from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ListBar from "../components/ListBar";


const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-1">


          <div className=""><SearchBar/></div>


          <div className="flex  gap-5">


            <div className="bg-pink-200 w-96 h-screen"><FilterBar/></div>

            <div className="bg-green-400 w-full h-screen"><ListBar/></div>


          </div>


      </div>
     
    </>
  );
};

export default Home;
