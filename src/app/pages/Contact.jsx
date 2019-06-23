import React from 'react';
import { CountdownSecond } from '../components/countdown/Countdown';
import Subscribe from '../components/subscribe/Subscribe';
import ContactPage from '../components/contact_page/CotactPage';


const Contact = () => {
    return (
        <main>
            <CountdownSecond content="Contact" />
            <ContactPage />
            <Subscribe />
        </main>
    );
}

export default Contact;