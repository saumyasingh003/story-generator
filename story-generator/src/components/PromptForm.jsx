import React, { useState } from 'react';

function PromptForm() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the prompt to the backend for story generation
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your story prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 rounded"
      />
      {/* <button type="submit" className="bg-blue-00 text-white p-2 rounded mt-2">
        Generate Story
      </button> */}
    </form>
  );
}

export default PromptForm;
