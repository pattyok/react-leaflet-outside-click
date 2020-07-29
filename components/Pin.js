import React, { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icons from './icons';


const Pin = (props) => {
    const markerRef = useRef(null);
    const { center, content, openPopup, onItemClick, itemId } = props;
    useEffect(() => {
      if (openPopup) markerRef.current.leafletElement.openPopup();
    }, [openPopup]);

    const myIcon = L.divIcon({
        className: 'farm-icon',
        html: `${icons.test}`,
        iconSize: [34, 34],
    });

    return (
        <Marker
            position={center}
            icon={myIcon}
            ref={markerRef}
            onClick={e => {
                onItemClick(itemId);
            }}>
        <Popup><span dangerouslySetInnerHTML={{__html: content}} /></Popup>
        </Marker>
    );
}


export default Pin;