import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Input Task: </label>
                <input type="text" name="task" />
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}

export default Input;