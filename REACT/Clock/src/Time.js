import React, { Component } from 'react'
import AnalogDisplay from './AnalogDisplay'
import DigitalDisplay from './DigitalDisplay'

class Time extends Component{
    constructor(props) {
        super(props)
        this.lounchClock()
        this.state = {currentTime : (new Date()).toLocaleString()}
        console.log(props)
    }
    
    lounchClock() {
        setInterval(  function(){
        console.log("updateTime")        
            this.setState({
                currentTime : (new Date()).toLocaleString()
            })
        }.bind(this) ,1000)
    }
    
    render() {
        console.log('rendering Clock')        
        return(
            <div>
                <div>{this.state.currentTime}</div>
                <AnalogDisplay time = {this.state.currentTime} />
                <DigitalDisplay  time = {this.state.currentTime} />
            </div>
        )
    }
}

export default Time