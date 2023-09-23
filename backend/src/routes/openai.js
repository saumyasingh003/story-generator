const express = require("express");
const router = express.Router();


// Define a route for ChatGPT
router.post("/generate", async (req, res) => {
    try {
        const { inputText } = req.body;
    
        // Dynamic import of the model files
        const { TFAutoModelForCausalLM, TFAutoTokenizer } = await import("@xenova/transformers");
    
        // Load the GPT-2 model and tokenizer
        const modelName = "gpt2"; // You can change the model if needed
        const tokenizer = await TFAutoTokenizer.fromPretrained(modelName);
        const model = await TFAutoModelForCausalLM.fromPretrained(modelName);
    
        // Tokenize the input text
        const inputIds = await tokenizer.encode(inputText, { return_tensors: "tf" });
    
        // Generate text
        const output = await model.generate(inputIds);
    
        // Decode the generated output
        const generatedText = await tokenizer.decode(output[0], { skipSpecialTokens: true });
    
        // Respond with the generated text
        res.json({ generatedText });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
      }
    
});

module.exports = router;
