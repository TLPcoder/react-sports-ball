import React, {Component} from 'react';
import TeamImage from './image';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Go ahead"
        };
        this.getValue = this.getValue.bind(this);
    }
    getValue(event) {
        //debugger
        console.log(event);
        this.setState({value: ''})
        this.setState({value: event.target.value})
    }

    render() {
        console.log(this.state.value === '')
        if (this.state.value.toLowerCase() === 'san francisco') {
            return (
                <div>
                    <input type="text" onChange={this.getValue}/>
                    <p>{this.state.value}
                        Giants!</p>
                    <img src="../images/sanfrancisco.jpg" alt="" height="100px" width='150px'/>
                </div>
            )
        } else if (this.state.value.toLowerCase() === 'boston') {
            return (
                <div>
                    <input type="text" onChange={this.getValue}/>
                    <p>{this.state.value}
                        Red Sox!</p>
                    <img src="../images/boston.jpg" alt="" height="100px" width='150px'/>
                </div>
            )
        } else if (this.state.value === '') {
            return (
                <div>
                    <input type="text" onChange={this.getValue}/>
                    <p>Go ahead, type a city here</p>
                </div>
            )
        } else if (this.state.value === 'settle' || this.state.value === 'portland') {
            return (
                <div>
                    <input type="text" onChange={this.getValue}/>
                    <p>Sorry this cities are not in our database, only San Francisco and Boston. Try one of those :)</p>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="text" onChange={this.getValue}/>
                    <p>{this.state.value}, type a city here</p>
                </div>
            )
        }
    }
}

export default Search;
