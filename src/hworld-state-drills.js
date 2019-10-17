import React from 'react';

class Hworld extends React.Component {
    state = {
        who: 'world',
    };
    render() {
        return (
            <div className='helloworld'>
                <p>Hello, {this.state.who}</p>
                <button 
                    onClick={() => this.setState({who: 'world'})}
                >World</button>
                <br />
                <button
                    onClick={() => this.setState({who: 'friend'})}
                >Friend</button>
                <br/>
                <button 
                    onClick={() => this.setState({who: 'react'})}
                >React</button>

            </div>
        )
           
            
        
    }
}

export default Hworld