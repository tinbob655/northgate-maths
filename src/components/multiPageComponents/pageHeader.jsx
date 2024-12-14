import React from 'react';
import DividerLine from './dividerLine';

export default function PageHeader({heading, subheading}) {

    return (
        <React.Fragment>
            <h1 style={{marginLeft: '8%'}} className="alignLeft">
                {heading}
            </h1>
            <p style={{marginLeft: '11%'}} className="alignLeft">
                {subheading}
            </p>
            <DividerLine/>
        </React.Fragment>
    );
};