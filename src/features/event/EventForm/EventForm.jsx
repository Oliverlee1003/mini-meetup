import React, {Component} from 'react';
import {Form, Segment, Button, Grid,Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createEvent,updateEvent} from '../eventActions'
import {
    composeValidators,
    combineValidators,
    isRequired,
    hasLengthGreaterThan} from'revalidate'
import cuid from 'cuid'
import {reduxForm, Field} from 'redux-form'
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const validate = combineValidators({
        title: isRequired({message: "The event title is required"}),
        category: isRequired({message: "The category title is required"}),
        description: composeValidators(
            isRequired({message: "The description is required"}),
            hasLengthGreaterThan(4)({message: "Description has to be greater than 4 characters"})
        )(),
        city: isRequired('City is required'),
        venue: isRequired('Venue is required'),
        date: isRequired("Date is required")
    }
);

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

    state = {...this.props.event};

    componentDidMount() {
        console.log(this.props.selectedEvent);
        if (this.props.selectedEvent !== null){
            this.setState({
                    ...this.props.selectedEvent
                }
            )
        }
    }

    onFormSubmit = (values) => {
        if (this.props.initialValues.id){
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`)
        }
        else{
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: '/assets/user.png',
                hostedBy:'Bob'
            };
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`)
        }
    };

    handleInputChange = (evt) =>{
        this.setState({
                [evt.target.name]: evt.target.value
            }
        );

    };

    render() {
        const {history, initialValues, invalid, submitting, pristine} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Header sub color='teal' content= 'Event Details'/>

                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete = 'off'>
                            <Field
                                name='title'
                                component={TextInput}
                                placeholder='Give your event a name '
                            />

                            <Field
                                name='category'
                                component={SelectInput}
                                options={category}
                                placeholder='What is your the event about'
                            />

                            <Field
                                name='description'
                                component={TextArea}
                                rows={3}
                                placeholder='Tell us about your event '
                            />

                            <Header sub color='teal' content= 'Event Locations Details'/>
                            <Field name='city' component={TextInput} placeholder='Event city '/>
                            <Field name='venue' component={TextInput} placeholder='Event Venue '/>

                            <Field
                                name='date'
                                component={DateInput}
                                dateFormat='dd LLL yyyy h:mm a'
                                showTimeSelect
                                timeFormat='HH:mm'
                                onChangeRaw={(e)=> e.preventDefault()}
                                placeholder='Event Date '
                            />

                            <Button
                                disabled = {invalid || submitting||pristine}
                                positive
                                type="submit"
                            >
                                Submit
                            </Button>

                            <Button type="button" onClick={
                                initialValues.id ?
                                    () => history.push(`/events/${initialValues.id}`)
                                    :
                                    ()=> history.push(`/events`)
                            }
                            >Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    const eventId = ownProps.match.params.id;
    let event = {};

    if(eventId && state.events.length > 0){
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return{
        initialValues: event
    }
};

const mapDispatchToProps = {
    createEvent,
    updateEvent
};

export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form: 'eventForm',validate})(EventForm));