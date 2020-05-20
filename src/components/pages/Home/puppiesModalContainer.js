import React, { Component } from 'react';
import PuMInfo from './PuMInfo';
import Card from 'react';
class PuppiesModalContainer extends Component {
    render() {
        return (
            <Card>
                {this.props.PuMInfo.map((puppies)=> {
                    return <PuMInfo puppies={puppies}/>
                })
                }
                
            </Card>
        )
    }
}
export default PuppiesModalContainer;