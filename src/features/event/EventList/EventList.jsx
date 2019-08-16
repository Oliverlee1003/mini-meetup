import React, {Component} from 'react';
import EventListItem from "./EventListItem";

class EventList extends Component {
    render() {
        const {events,selectEvent,deleteEvent} = this.props;
        return (
            <div>
                {events.map(event => {
                    return (
                        <EventListItem
                            deleteEvent = {deleteEvent}
                            key = {event.id}
                            event = {event}
                            selectEvent = {selectEvent}
                        />
                    )})}
            </div>
        );
    }
}

export default EventList;