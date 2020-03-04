import React, {Component} from 'react';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map(task => (
                    <li>{task}</li>
                ))}
            </ul>
        )
    }
}

export default Tasks;