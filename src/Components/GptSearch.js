import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_URL } from "../Utils/Contants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img className="h-screen w-screen object-cover" src={BACKGROUND_URL} alt="background image" />
      </div>

      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
