import { Component } from "react";

class Input extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    changeInput = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    clearInput = () => {
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <div className="input-container">
                <input value={this.state.input} onChange={this.changeInput} />
                {this.state.input}
                <button onClick={this.clearInput}>Clear</button>
            </div>
        );
    }
}

export default Input;
