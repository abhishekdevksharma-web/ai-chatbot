const express = require("express")
const OpenAI = require("openai"); 
const dotenv = require("dotenv");



const router = express.Router()

router.post("/", async (req, res) => {
    const { data } = req.body
    dotenv.config();
    const apiKey = process.env.GROQ_API_KEY;


    const client = new OpenAI({
        apiKey,
        baseURL: "https://api.groq.com/openai/v1",
    });

    const response = await client.responses.create({
        model: "openai/gpt-oss-20b",
        input: data,
    });

    res.json(response.output_text)
})

module.exports = router

