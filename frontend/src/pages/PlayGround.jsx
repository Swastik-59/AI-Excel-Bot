import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import Markdown from 'marked-react';

function PlayGround() {
    const [prompt, setPrompt] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Generate");
    const [activeButton, setActiveButton] = useState("generate");
    const [sheetType, setSheetType] = useState("Excel");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleButtonClick = (label) => {
        setButtonLabel(label);
        setActiveButton(label.toLowerCase());
    };

    const handleSheetTypeClick = (type) => {
        setSheetType(type);
    };

    const handleSubmit = async () => {
        setIsFetching(true);
        setError("");
        try {
            const res = await axios.post("http://localhost:3000/api", { prompt, activeButton, sheetType });
            setResponse(res.data);
        } catch (e) {
            console.error(e);
            setError("An error occurred. Please try again.");
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="hero bg-base-200 min-h-screen scroll-smooth">
                <div className="hero-content text-center">
                    <div className="max-w-fit">
                        <div>
                            <p className="py-5 text-lg sm:text-md">
                                Is this request for Excel or Google Sheets?
                            </p>
                            <button
                                className={`btn btn-lg btn-outline mx-4 text-lg ${sheetType === 'Excel' ? 'btn-primary' : ''}`}
                                onClick={() => handleSheetTypeClick("Excel")}
                            >
                                Excel
                            </button>
                            <button
                                className={`btn btn-lg btn-outline text-lg ${sheetType === 'Google Sheets' ? 'btn-accent' : ''}`}
                                onClick={() => handleSheetTypeClick("Google Sheets")}
                            >
                                Google Sheets
                            </button>
                            <p className="py-5 text-lg my-4 sm:text-md">
                                Do you want to generate a formula or have a formula explained?
                            </p>
                            <button
                                className={`btn btn-lg btn-outline mx-4 text-lg ${activeButton === 'generate' ? 'btn-primary' : 'btn-default'}`}
                                onClick={() => handleButtonClick("Generate")}
                            >
                                Generate
                            </button>
                            <button
                                className={`btn btn-lg btn-outline text-lg ${activeButton === 'explain' ? 'btn-secondary' : 'btn-default'}`}
                                onClick={() => handleButtonClick("Explain")}
                            >
                                Explain
                            </button>
                        </div>
                        <div>
                            <p className="text-lg my-4 sm:text-md">
                                Type the problem you are trying to solve or formula you want explained. Be as specific as possible.
                            </p>
                            <textarea
                                onChange={(e) => setPrompt(e.target.value)}
                                className="textarea textarea-bordered textarea-lg w-full h-40 max-w-2xl my-5"
                                value={prompt}
                            />
                            <button
                                onClick={handleSubmit}
                                className="btn btn-lg btn-success mx-4 text-lg"
                            >
                                {buttonLabel}
                            </button>

                            <p className="text-lg my-10 sm:text-md">Output👇</p>
                            <div className="text-center">
                                {isFetching ? (
                                    <div className="skeleton w-full h-40 max-w-4xl my-5"></div>
                                ) : (
                                    <div className="bg-base-100 h-40 max-w-4xl my-5 p-4">
                                        {error ? (
                                            <p className="text-red-500 p-4">
                                                <Markdown>
                                                    {error}
                                                </Markdown>
                                            </p>
                                        ) : (
                                            <p className="text-lg sm:text-md p-4">
                                                <Markdown>
                                                    {response}
                                                </Markdown>
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayGround;
