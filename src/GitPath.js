import React, { Component } from 'react';
import axios from 'axios';
import './GitPath.css'

class GitPath extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urls:[],
            hourStart:"",
            hourEnd:"",
        };
        this.handleHourStartChange = this.handleHourStartChange.bind(this);
        this.handleHourEndChange = this.handleHourEndChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const hourStart = this.state.hourStart;
        const hourEnd = this.state.hourEnd;
        const prevHourStart = prevState.hourStart;
        const prevHourEnd = prevState.hourEnd;

        if((hourStart !== prevHourStart && hourStart !== "") || (hourEnd !== prevHourEnd && hourEnd !== "")) {
            let windowPath = window.location.pathname;
            windowPath = windowPath.replace(/\//g, '_');
            console.log("window path is " + windowPath);

            if (hourStart !== "" && hourEnd !== "") {
                axios.get("http://localhost:3001/api/v1/" + windowPath + "/" + hourStart + "/" + hourEnd)
                    .then(res => {
                        this.setState({urls: res.data.dates});
                    });
            }
        }
    }

    handleHourStartChange(event) {
        this.setState({hourStart: event.target.value});
    }

    handleHourEndChange(event) {
        this.setState({hourEnd: event.target.value});
    }


    render() {

        const hourStart = this.state.hourStart;
        const hourEnd = this.state.hourEnd;
        const urls = this.state.urls;

        return(
            <div>
                <label>Please enter your working hours.</label>
                <br/>
                <span>Date Start:</span>
                <HourStart hourState={hourStart} onChange={this.handleHourStartChange}/>
                <br/>
                <span>Date End:</span>
                <HourEnd hourEnd={hourEnd} onChange={this.handleHourEndChange}/>
                <Commits urls={urls}/>
            </div>
        );

    }
}

function HourStart(props) {
    return(
        <input className="hours" id="hourStart" type="text" maxLength="2" size="4" value={props.hourStart} onChange={props.onChange}/>
    );
}

function HourEnd(props) {
    return (
        <input className="hours" id="hourEnd" type="text" maxLength="2" size="4" value={props.hourEnd} onChange={props.onChange}/>
    );
}

function Commits(props) {
    if (props.urls.length > 0 ) {
        return props.urls.map((url) =>
             <li key={url}>{url}</li>
        );
    }
    return null;

}

export default GitPath;