import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="bg-orange-40">SearchBar</div>
        <div className="flex  gap-5">
          <div className="bg-pink-200 w-96 h-screen">FilterBar</div>
          <div className="bg-green-400 w-full h-screen">ListBar</div>
        </div>
      </div>
     
    </>
  );
};

export default Home;
