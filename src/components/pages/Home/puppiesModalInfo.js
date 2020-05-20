import React from 'react';

class puppiesModalInfo extends React.Component {
    render() {
        return (
            
                <li>
                    {this.props.puppy.name} {this.props.puppy.gender}
                </li>
            
        )
    }
}
export default puppiesModalInfo;