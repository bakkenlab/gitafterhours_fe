import React, {Component} from 'react';

class NumbersList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const numberList = this.props.numbers;
        const listItems = numberList.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }


}



export default NumbersList;