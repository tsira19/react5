import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }
    increment = () => {
        const name= 'Tsira';
    this.setState({ name: name});
    alert('Name: ' + name);
      };
    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={this.increment}>
                    click!
                </button>
            </React.Fragment>
        );
    }
}
const el = document.getElementById("root");
ReactDOM.render(<App />, el);