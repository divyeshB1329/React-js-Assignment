import React, { Component } from "react";

class Clcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null, // Holds the fetched data
            loading: true, // Indicates loading state
        };
    }

    // Fetch data when the component mounts
    componentDidMount() {
        const apiUrl = "https://catfact.ninja/fact";

        fetch(apiUrl).then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({ data: data, loading: false }); // Update state with fetched data
        }).catch((error) => {
            this.setState({ error: error.message, loading: false }); // Handle errors
        });
    }

    render() {
        const { data, loading } = this.state;

        return (
            <div><br /><br /><br />
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;Data Fetcher</h1><br /><br /><br />
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cat Fact:</h2><br />
                {loading}
                {data && (
                    <div>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.fact}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Clcomponent;
