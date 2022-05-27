import React, { useState } from "react";
import {
	GoogleMap,
	InfoWindow,
	LoadScript,
	Marker,
} from "@react-google-maps/api";

const MapComponent = () => {
	const initialMarkers = [
		{
			position: {
				lat: 28.625485,
				lng: -79.821091,
			},
			label: { color: "white", text: "P1" },
			draggable: false,
		},
	];

	const [activeInfoWindow, setActiveInfoWindow] = useState("");
	const [markers, setMarkers] = useState(initialMarkers);

	const containerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: 28.626137,
		lng: 79.821603,
	};

	const mapClicked = (event) => {
		console.log(event.latLng.lat(), event.latLng.lng());
	};

	const markerClicked = (marker, index) => {
		setActiveInfoWindow(index);
		console.log(marker, index);
	};

	const markerDragEnd = (marker, index) => {
		console.log(marker, index);
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyDBYhLwsDd0C7GVG08e7zNj8eeCvm3vxdQ">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onClick={mapClicked}
			>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						position={marker.position}
						label={marker.label}
						draggable={marker.draggable}
						onDragEnd={(event) => markerDragEnd(marker, index)}
						onClick={(event) => markerClicked(marker, index)}
					>
						{activeInfoWindow === index && (
							<InfoWindow position={marker.position}>
								<b>
									{marker.position.lat}, {marker.position.lng}
								</b>
							</InfoWindow>
						)}
					</Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
};

export default MapComponent;
