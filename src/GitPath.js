import React, { Component } from 'react';
import axios from 'axios';
import './GitPath.css'

class GitPath extends Component {

    constructor(props) {
        super(props);
        this.state = {urls:[]};
    }

    componentDidMount() {
        let windowPath = window.location.pathname;
        windowPath = windowPath.replace(/\//g, '_');
        console.log("window path is " + windowPath);

        axios.get("http://localhost:3001/api/v1/" + windowPath + "/9/5")
            .then(res => {
                console.log(res);
                this.setState({urls: res.data.dates});
            });
    }

    render() {
        const urls = this.state.urls;
        const urlsItems = urls.map((url) =>
            <li key={url}>{url}</li>
        );

        return(
            <h4 id="urls">{urlsItems}</h4>
        );

    }
}


export default GitPath;