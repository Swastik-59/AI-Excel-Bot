import React from 'react'

function Main() {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200 px-20 py-6">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">Generate Formulas</div>
                <div className="collapse-content">
                    <p>Easily generate Excel or Google Sheets formulas with simple text prompts.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 px-20 py-6">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Understand Complex Formulas</div>
                <div className="collapse-content">
                    <p>No need to scratch your head to understand complex Excel or Google Sheets formulas. Let the AI help you do that.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 px-20 py-6">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">VBA Code Support</div>
                <div className="collapse-content">
                    <p>No need to waste time writing or understanding VBA. AI Excel Bot can write VBA and explain it to you in seconds.</p>
                </div>
            </div>
            <div className="bg-base-200 py-8">
                <div className="bg-green-100 flex justify-between items-center px-8 py-4 rounded-lg shadow-md max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800">Access the power of AI</h2>
                    <button className="btn btn-success text-white font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Main