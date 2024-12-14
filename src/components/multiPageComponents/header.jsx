import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    function getHeaderCells() {
        let headerHTML = [];
        const allHeaders = [
            ['Home', ''],
            ['How to revise', 'howToRevise'],
            ['Papers', 'papers'],
            ['Skills Checks', 'skillsChecks'],
            ['Topic Practice', 'topicPractice'],
            ['Support', 'support'],
            ['Sixth Form', 'sixthForm'],
        ];

        allHeaders.forEach(([frontendName, backendName]) => {
            headerHTML.push(
                <td>
                    <Link to={`/${backendName}`}>
                        <h3 style={{marginTop: '32.5px', wordWrap:'revert'}}>
                            {frontendName}
                        </h3>
                    </Link>
                </td>
            );
        });

        return headerHTML;
    };

    return (
        <React.Fragment>
            <div id="headerWrapper">
                <table className="noVerticalSpacing">
                    <thead>
                        <tr>
                            {getHeaderCells()}
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};