import React from 'react';


class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    componenetWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            let randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }
    renderDisplay() {
        let { chamber, spinningTheChamber } = this.state
        let { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
            <div className='RoultteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!

                </button>

            </div>
        )
    }
    
}

export default RouletteGun