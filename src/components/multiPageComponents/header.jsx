import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    function headerHovered(headerNo) {
        document.querySelectorAll('.headerLine'+headerNo).forEach((headerLine) => {
            headerLine.classList.add('hovered');
        });
    };

    function headerUnhovered(headerNo) {
        document.querySelectorAll('.headerLine'+headerNo).forEach((headerLine) => {
            headerLine.classList.remove('hovered');
        });
    };

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
        allHeaders.forEach((header) => {
            headerHTML.push(
                <td className="headerCell"
                 onMouseOver={() => {headerHovered(allHeaders.indexOf(header))}}
                onMouseLeave={() => {headerUnhovered(allHeaders.indexOf(header))}}>
                    <div className={`headerLine headerLine${allHeaders.indexOf(header)}`}></div>
                    <Link to={`/${header[1]}`}>
                        <h3 style={{lineHeight: '20px', height: '20px', width: '100%', display: 'inline-block', verticalAlign: 'middle'}}>
                            {header[0]}
                        </h3>
                    </Link>
                    <div className={`headerLine headerLine${allHeaders.indexOf(header)}`}></div>
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