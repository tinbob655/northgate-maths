import React, {useState, useEffect} from 'react';

export default function SitePasswordWrapper({children}) {

    function hash(value) {

        //will hash a string with a length less than 20 characters
        if (value.length > 20) {
            throw new Error('string for hashing must be less than 20 characters');
        };

        const utf8Value = new TextEncoder().encode(value);

        let hash = 1;
        utf8Value.forEach((value) => {
            hash *= value;
        });

        return hash;
    };

    function checkLoggedIn(event) {
        event.preventDefault();

        const userPassword = event.currentTarget.password.value;
        const correctPasswordBool = hash(userPassword) == passwordWhenHashed ? true : false;

        //save the login state
        setLoggedIn(correctPasswordBool);
    };

    const [formStyles, setFormStyles] = useState({});
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('loggedIn'));
    const passwordWhenHashed = process.env.REACT_APP_SITE_PASSWORD_HASH;

    //work out the margins for the form if it is shown (to make it vertically aligned center)
    useEffect(() => {

        //save the login state to session storage
        sessionStorage.setItem('loggedIn', loggedIn);

        if (!loggedIn) {

            const heightOfForm = document.getElementById('sitePasswordForm')?.offsetHeight;
            const windowHeight = window.innerHeight;
    
            //calculate the distance from the top and bottom of the screen the form should be to be centred
            const marginTopBottom = (windowHeight - heightOfForm) / 2;
            setFormStyles( {
                marginTop: String(marginTopBottom) + 'px',
            });
        };

    }, [loggedIn]);

    return (
        <React.Fragment key={loggedIn}>
            {loggedIn ? (
                <React.Fragment>

                    {/*user has entered the password, show them the website */}
                    {children}
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {/*user has not entered the password, show the the password form */}
                    <form onSubmit={(event) => {checkLoggedIn(event)}} style={formStyles} id="sitePasswordForm">
                        <p>
                            You need a password to access this content
                        </p>
                        <input name="password" type="password" placeholder="Enter password..." required maxLength={20} />
                        <input name="submit" type="submit" className="submit" value="Submit" />
                    </form>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};