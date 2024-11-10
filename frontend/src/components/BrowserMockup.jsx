import React from 'react';

const BrowserMockup = () => {
    return (
        <div className="mockup-browser bg-base-300 border w-full max-w-4xl mx-auto my-16">
            <div className="mockup-browser-toolbar"></div>
            <div className="bg-base-200 p-6 flex flex-col space-y-4">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md w-max">
                    Sum column A when cell B10 equals the word hello
                </div>

                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md self-end w-max">
                    =SUMIF(B10, "hello", A:A)
                </div>

                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md w-max">
                    =VLOOKUP(B3, $F$3:$G$8, 2, FALSE)
                </div>

                <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md w-60 self-end w-max">
                    <ol className="list-decimal list-inside space-y-1">
                        <li>The formula is a VLOOKUP formula.</li>
                        <li>It looks up the value in cell B3.</li>
                        <li>It looks for the value in the range of cells from F3 to G8.</li>
                        <li>It returns the value from the second column of the range (G3:G8).</li>
                        <li>It does not approximate the value if it is not found (FALSE).</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default BrowserMockup;
