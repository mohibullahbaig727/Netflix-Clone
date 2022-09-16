import React from "react";
import SavedShows from "../SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="  w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/d1bdc8ba-c91e-41a8-87a7-a871da5e699c/SE-en-20220905-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold"> My Shows</h1>
        </div>
        <SavedShows />
      </div>
    </>
  );
};

export default Account;
