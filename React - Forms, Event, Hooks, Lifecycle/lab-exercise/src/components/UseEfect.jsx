import React, { useState, useEffect } from "react";

function UseEfect() {
    const [data, setData] = useState(null); // Changed to hold a single object
    const [error, setError] = useState(null);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const apiUrl = "https://catfact.ninja/fact";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json); // Save the API response in state
            })
            .catch((err) => {
                setError(err.message); // Capture any errors
            });
    }, []);

    return (
        <div>
            <h1>&nbsp;&nbsp;Data Fetcher</h1>
            <br />
            <br />
            <br />
            <ul>
                <li>
                    <h2>&nbsp;&nbsp;&nbsp;Cat Facts</h2>
                    <br />
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {data
                            ? data.fact // Display the fact if data is fetched
                            : error // Display error if there is one
                            ? `Error: ${error}`
                            : "Loading..."} {/* Loading state */}
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default UseEfect;
