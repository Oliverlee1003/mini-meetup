import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementAsync,decrementAsync} from './testActions'
import {Button} from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import {openModal} from '../modals/modalActions';

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
        const {data, incrementAsync,decrementAsync,openModal,loading,buttonName} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data} </h3>
                {console.log({data})}

                <Button
                    name='increment'
                    loading={loading && buttonName === 'increment'}
                    onClick={(e)=> incrementAsync(e.target.name)}
                    positive
                    content='Increment'
                />

                <Button
                    name='decrement'
                    loading={loading && buttonName === 'decrement'}
                    onClick={(e)=>decrementAsync(e.target.name)}
                    negative
                    content='Decrement'
                />

                <Button
                    onClick={()=> openModal('TestModal',{data:42})}
                    color='teal'
                    content='Open Modal'
                />

                <TestPlaceInput handleLatLng={this.handleLatLng}/>

                <SimpleMap key={this.state.latLng.lat + ',' + this.state.latLng.lng} latLng = {this.state.latLng} />



            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});

const mapDispatchToProps = {
    incrementAsync ,
    decrementAsync ,
    openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);