import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import FancyButton from '../../multiPageComponents/fancyButton';

export default function Home() {

    return (
        <React.Fragment>
            <PageHeader heading="Northgate High School Maths Revision Portal" subheading="You can make a difference!" />

            <h2>
                Welcome to the maths revision portal for Northgate High School students.
            </h2>
            <table style={{width: '66%'}}>
                <thead>
                    <tr>
                        <td>
                            <FancyButton backgroundColor={'#8c0f0f'} destination="/papers" buttonText="Past Papers" />
                        </td>
                        <td>
                            <FancyButton backgroundColor={'#bc9e1e'} destination='/howToRevise' buttonText="How to revise" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <p>
                                Click a button or use the menu above to navigate
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FancyButton backgroundColor={'#ef8017'} destination='/sixthForm' buttonText="Sixth form" />
                        </td>
                        <td>
                            <FancyButton backgroundColor={'#0053a9'} destination='/topicPractice' buttonText="Topic practice" />
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};