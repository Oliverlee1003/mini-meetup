import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter,decrementCounter} from './testActions'
import {Button} from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";


class TestComponent extends Component {

    state = {
        latLng: {
            lat: 59.95,
            lng: 30.33
        }
    };

    handleLatLng = (newLatLng) =>{
        this.setState({latLng: newLatLng })
    };

    render() {
        const {data, incrementCounter,decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data} </h3>
                {console.log({data})}

                <Button onClick={incrementCounter} positive content='Increment' />
                <Button onClick={decrementCounter} negative content='Decrement' />

                <TestPlaceInput handleLatLng={this.handleLatLng}/>

                <SimpleMap key={this.state.latLng.lat + ',' + this.state.latLng.lng} latLng = {this.state.latLng} />


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.test.data
});

const mapDispatchToProps = {
    incrementCounter ,
    decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);