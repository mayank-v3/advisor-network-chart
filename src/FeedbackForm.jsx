import React from "react";

const FeedbackForm = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzxVnUtCVof46SiyKaDQxQi_LUk9DHGK03MY2ps0IBxCn3wvVNVdZoFYXqXJLWkmNci1A/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const trendBody = formData.getAll("TRENDS").join(" ");
        formData.set("TRENDS", trendBody);
    
        fetch(scriptURL, { // Change the URL here
            method: "POST",
            body: formData,
        })
        .then((response) => response.json()) // Make sure to parse the response as JSON
        .then((data) => alert("Success!", data))
        .catch((error) => alert("Error!", error.message));
    };
    

    return (
        <div className="flex items-center h-screen w-full bg-orange-100">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center text-grey-darkest mb-6">Feedback</h1>
                <form className="mb-4 flex flex-wrap justify-between" id="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full mb-4">
                        <label className="field-label" htmlFor="email">Name</label>
                        <input className="bg-green-100 px-2 py-1 outline-none" type="text" name="Name" id="email" />
                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <label className="field-label" htmlFor="Message">Message</label>
                        <textarea className="bg-green-100 px-2 py-1 outline-none" name="Message" id="Message" />
                    </div>
                    <div className="formbuilder-checkbox w-full mb-4">
                        <label>
                            <input type="checkbox" name="TRENDS" value="1D🔼" /> 1D🔼
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="4H🔼" /> 4H🔼
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="1H🔼" /> 1H🔼
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="LTF🔼" /> LTF🔼
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="1D🔽" /> 1D🔽
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="4H🔽" /> 4H🔽
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="1H🔽" /> 1H🔽
                        </label><br />
                        <label>
                            <input type="checkbox" name="TRENDS" value="LTF🔽" /> LTF🔽
                        </label><br />
                    </div>
                    <button className="bg-orange-300 px-3 py-1 text-white mx-auto" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
