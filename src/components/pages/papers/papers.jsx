import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';

export default function Papers() {

    return (
        <React.Fragment>
            <PageHeader heading="Past Papers" subheading="The best way to prepare for the real thing" />

            <p className="alignRight">
                Using past exam papers is the best way to revise and prepare yourself for the real thing. From this page you can click through to the right place to search for and download any past papers you need. You can also find links to all the screencasts in case you get stuck.
            </p>
        </React.Fragment>
    );
};