import React, {Component} from 'react';
import Search from './search';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Whats your favorite city?</h1>
                <Search/>
            </div>
        );
    }
}
export default App;
