import React from 'react'
import BrowserMockup from './BrowserMockup'

function Hero() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen flex flex-col">
                <div className="hero-content text-center mt-28">
                    <div className="w-8/12">
                        <h1 className="text-5xl font-bold">Write Excel and Google Sheets Formulas 10x Faster With AI</h1>
                        <p className="py-6 sm:text-md">
                            Generate complex formulas using simple text instructions in seconds.
                        </p>
                        <button className="btn btn-primary w-32 hover:w-36 hover:text-lg hover:text-white transition-all	 ">Get Started</button>
                    </div>
                </div>
                <BrowserMockup />
            </div>
        </div>
    )
}

export default Hero