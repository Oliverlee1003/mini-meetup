import React, {Component} from 'react';
import {Grid, Button} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from 'cuid'
import {connect} from "react-redux";
import eventReducer from "../eventReducer";
import {createEvent,updateEvent,deleteEvent} from '../eventActions'

// const eventsFromDashBoard = [
//     {
//         id: '1',
//         title: 'Trip to Tower of London',
//         date: '2018-03-27',
//         category: 'culture',
//         description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//         city: 'London, UK',
//         venue: "Tower of London, St Katharine's & Wapping, London",
//         hostedBy: 'Bob',
//         hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
//         attendees: [
//             {
//                 id: 'a',
//                 name: 'Bob',
//                 photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
//             },
//             {
//                 id: 'b',
//                 name: 'Tom',
//                 photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
//             }
//         ]
//     },
//     {
//         id: '2',
//         title: 'Trip to Punch and Judy Pub',
//         date: '2018-03-28',
//         category: 'drinks',
//         description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//         city: 'London, UK',
//         venue: 'Punch & Judy, Henrietta Street, London, UK',
//         hostedBy: 'Tom',
//         hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
//         attendees: [
//             {
//                 id: 'b',
//                 name: 'Tom',
//                 photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
//             },
//             {
//                 id: 'a',
//                 name: 'Bob',
//                 photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
//             }
//         ]
//     }
// ];

class EventDashboard extends Component {
    state = {
        selectedEvent: null,
        isOpen: false
    };

    // // {isOpen} is destructed version of this.state.isOpen
    // handleFormOpenToggle = () =>  {
    //     this.setState( ({isOpen}) => ({
    //         isOpen: ! isOpen
    //     }))
    // };

    // {isOpen} is destructed version of this.state.isOpen
    handleCreateFormOpen = () =>  {
        this.setState( ({isOpen}) => ({
            isOpen: true,
            selectedEvent: null
        }))
    };

    handleFormCancel = () =>  {
        this.setState( ({isOpen}) => ({
            isOpen: false
        }))
    };

    handleSelectEvent = (event) => {
        this.setState(() => ({
                selectedEvent: event,
                isOpen: true
            })

        )
    };

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.props.createEvent(newEvent);
        this.setState({isOpen: false})
    };

    handleUpdateEvent = (updatedEvent) => {
        this.props.updateEvent(updatedEvent);
        this.setState( {
            isOpen:false,
            selectedEvent: null
        })
    };

    handleDeleteEvent = (deletedEventId) => {
        this.props.deleteEvent(deletedEventId);
    };


    render() {
        const {isOpen,selectedEvent} = this.state;
        const {events} = this.props;
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList
                            deleteEvent = {this.handleDeleteEvent}
                            events = {events}
                            selectEvent = {this.handleSelectEvent}
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button onClick={this.handleCreateFormOpen} positive content ='Create Event'/>
                        {isOpen &&
                        <EventForm
                            key = {selectedEvent ? selectedEvent.id : 0}
                            cancelFormOpen = {this.handleFormCancel}
                            createEvent = {this.handleCreateEvent}
                            updateEvent = {this.handleUpdateEvent}
                            selectedEvent = {selectedEvent}
                        />}
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
//         updateComment: (comment,trainerObjectID) => dispatch(trainerCommentUpdate(comment,trainerObjectID)),
//         fetchData: (url) => dispatch(trainersFetchData(url))
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);