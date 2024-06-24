import React from 'react';

const MapEmbed = () => {
    return (
        <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative' }}>
            <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=26.774943632480195,75.86658472514544&z=15&output=embed"
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};
26.774943632480195, 75.86658472514544
export default MapEmbed;
