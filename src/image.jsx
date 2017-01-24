import React, {Component} from 'react';

class ImageSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.searchImg
        }
    }
    render() {
        console.log("should change", this.props.searchImg)
        if (this.props.searchImg === 'san francisco') {
            return (<img src="../images/sanfrancisco.jpg" alt="" height="100px" width='150px'/>)
        } else if (this.props.searchImg === 'boston') {
            return (<img src="../images/boston.jpg" alt="" height="100px" width='150px'/>)
        } else {
            return (
                <p></p>
            )
        }
    }
}

export default ImageSearch;
