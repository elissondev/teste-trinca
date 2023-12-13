import React from 'react';

interface Props {
    center?: boolean
}

export function Loader({center}: Props) {
    return (
        <div className={`lds-ellipsis-wrap ${center ? 'center' : ''}`}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}