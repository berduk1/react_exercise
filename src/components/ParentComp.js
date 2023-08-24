import React, {Component} from 'react'
import PureComp from './PureComponent'
import RegComp from './RegComponent'
import MemoComp from './MemoComp'

class ParComp extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: 'Me'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Me'
            })
        }, 5000)
    }
    render(){
        console.log('PARENT COMPONENT')
        return(
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                
                
            </div>
        )
    }
}
export default ParComp