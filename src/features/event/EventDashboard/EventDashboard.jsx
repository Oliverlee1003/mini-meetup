import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import cuid from 'cuid'
import {connect} from "react-redux";
import {createEvent,updateEvent,deleteEvent} from '../eventActions'

class EventDashboard extends Component {


    handleDeleteEvent = (deletedEventId) => {
        this.props.deleteEvent(deletedEventId);
    };


    render() {
        const {events} = this.props;
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList
                            deleteEvent = {this.handleDeleteEvent}
                            events = {events}
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h2>Activity Feed</h2>
                    </Grid.Column>

                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.events
});

const mapDispatchToProps = {
    createEvent,
    updateEvent,
    deleteEvent,
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateComment: (common,trainerObjectID) => dispatch(trainerCommentUpdate(common,trainerObjectID)),
//         fetchData: (url) => dispatch(trainersFetchData(url))
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);