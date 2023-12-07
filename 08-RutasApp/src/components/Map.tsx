import React from 'react'
import MapView, { Marker } from 'react-native-maps'


interface Props {
    markers?: Marker[];
}

export const Map = ({markers = []}: Props) => {
    return (
        <>
            <MapView
                showsUserLocation={true}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                { (markers.length > 0) &&
                    markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.props.coordinate}
                            title={marker.props.title}
                            description={marker.props.description}
                        />
                    ))
                }
            </MapView>
        </>
    )
}
