import React, {Component} from 'react';
import {Form, Segment, Button} from 'semantic-ui-react'

class EventForm extends Component {

    state = {
        title: '',
        date:'',
        city: '',
        venue: '',
        hostedBy: ''
    };

    componentDidMount() {
        console.log(this.props.selectedEvent);
        if (this.props.selectedEvent !== null){
            this.setState({
                    ...this.props.selectedEvent
                }
            )
        }
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault();

        if (this.state.id){
            this.props.updateEvent(this.state)
        }
        else{
            this.props.createEvent(this.state)
        }
        console.log(this.state);
    };

    handleInputChange = (evt) =>{
        this.setState({
                [evt.target.name]: evt.target.value
            }
        );

    };

    render() {
        const {cancelFormOpen} = this.props;
        const {title,date,city,venue,hostedBy} = this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete = 'off'>
                    <Form.Field>
                        <label>Event Title</label>
                        <input
                            name = 'title'
                            onChange={this.handleInputChange}
                            value={title}
                            placeholder="Event Title"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                            type="date"
                            placeholder="Event Date"
                            name = 'date'
                            onChange={this.handleInputChange}
                            value={date}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            placeholder="City event is taking place"
                            name = 'city'
                            onChange={this.handleInputChange}
                            value={city}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            placeholder="Enter the Venue of the event"
                            name = 'venue'
                            onChange={this.handleInputChange}
                            value={venue}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            placeholder="Enter the name of person hosting"
                            name = 'hostedBy'
                            onChange={this.handleInputChange}
                            value={hostedBy}
                        />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default EventForm;