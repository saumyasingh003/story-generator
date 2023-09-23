import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import books from "../assets/books.jpg";

function GenerateStory() {
  const [prompt, setPrompt] = useState("");
  const [generatedStory, setGeneratedStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openaiAccessToken = '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'; 
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: openaiAccessToken,
  });

  const handleGenerateStory = async () => {
    setIsLoading(true);

    try {
      const res = await api.sendMessage(prompt);
      setGeneratedStory(res.text);
    } catch (error) {
      console.error('Error generating story:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row  justify-between  overflow-y-hidden">
      <div className="md:w-1/2 p-4 relative top-32">
     <span className="font-serif font-semibold text-5xl  relative bottom-10 text-red-900">The Ultimate Story Generator,<br/> where You will find Stories related to <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Adventure..")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Mystery..")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Romance..")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Science-Fiction..")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Thriller..")
            .start();
           
        }}
        options={{
   
    autoStart: true,
    loop: true,
  }}
       
      /></span>
      <div className="flex flex-col-2">
        <textarea
          className=" font-serif border-blue-900 rounded-md mt-6 p-3"
          rows="1"
          cols="55 "
          placeholder="  Enter your Story Prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          onClick={handleGenerateStory}
          disabled={isLoading}
          className=" relative  top-5 left-5 p-3 h-[9vh] font-semibold rounded-lg bg-red-700  text-white"
        >
          Generate
        </button>
        {/* <button type="button" className=" relative  top-5 left-5 p-3 h-[9vh] font-semibold rounded-lg bg-red-700  text-white">Generate</button> */}
        </div>


        {isLoading && <p>Generating story...</p>}
        {generatedStory && (
          <div>
            <h3>Generated Story:</h3>
            <p>{generatedStory}</p>
          </div>
        )}
      </div>

      <div className="relative right-0 top-0">
        <img src={books} alt="Image" className="w-[37vw] h-screen  " />
      </div>
    </div>
    </div>
  );
}

export default GenerateStory;


