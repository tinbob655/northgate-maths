import React from 'react';
import DividerLine from './dividerLine';
import northgateImage from '../../media/northgateImageNoBackground.png';

export default function PageHeader({heading, subheading}) {

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <td style={{width: '75%'}}>

                            <h1 style={{marginLeft: '8%'}} className="alignLeft">
                                {heading}
                            </h1>
                            <p style={{marginLeft: '11%'}} className="alignLeft">
                                {subheading}
                            </p>
                        </td>
                        <td>
                            <img className="noVerticalSpacing" style={{height: '180px', float: 'right', marginRight: '10%', marginBottom: '40px'}} src={northgateImage} alt="The Northgate High School logo" />
                        </td>
                    </tr>
                </thead>
            </table>
            <DividerLine/>
        </React.Fragment>
    );
};