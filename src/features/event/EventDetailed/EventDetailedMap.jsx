import React from 'react';
import {Segment, Icon} from 'semantic-ui-react'
import GoogleMapReact from "google-map-react";


const AnyReactComponent = () => <Icon name='marker' size='big' color='red'> </Icon>;

const EventDetailedMap = ({lat,lng}) => {
    const zoom = 14;
    return (
        <Segment attached='bottom' style={{padding: 0}}>
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyB1yN-iMwWD1OOtrAXzpYkdksxeUgLAuzQ'}}
                    defaultCenter={{lat,lng}}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                    />
                </GoogleMapReact>
            </div>
        </Segment>
    );
};


export default EventDetailedMap;