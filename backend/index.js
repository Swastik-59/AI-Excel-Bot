const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
dotenv.config()
app.use(bodyParser.json());

const api = process.env.API_KEY
const genAI = new GoogleGenerativeAI(api);

app.post("/api", async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const { prompt, activeButton, sheetType } = req.body;
    let mainPrompt = "";

    if (sheetType === "Google Sheets") {
        mainPrompt += "In Google Sheets, ";
    } else if (sheetType === "Excel") {
        mainPrompt += "In Excel, ";
    }

    if (activeButton === "explain") {
        mainPrompt += `explain the formula needed to ${prompt}. Provide a step-by-step breakdown.`;
    } else if (activeButton === "generate") {
        mainPrompt += `generate the formula needed to ${prompt}. Provide the formula and any necessary details for correct usage.`;
    }

    try {
        const result = await model.generateContent(mainPrompt);
        const response = await result.response;
        const text = await response.text();
        res.send(text);
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).send("Error generating content.");
    }
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});