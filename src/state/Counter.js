import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
       
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={() => this.handleButtonClick = () => {
                    console.log('props in handleButtonClick', this.props)
                    console.log('state in handleButtonClick', this.state)

                    let newCount = this.state.count + 1
                    this.setState({
                        count: newCount
                    })
                }}>
                    Add 1
                </button>
            </div>
        )
    }
}










export default Counter;