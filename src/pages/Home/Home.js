import React from 'react';
import Banner from '../../compo/IndexView/Banner/Banner';
import DentalCare from '../../compo/IndexView/DentalCare/DentalCare';
import Doctors from '../../compo/IndexView/Doctors/Doctors/Doctors';
import Testing from '../../compo/IndexView/Testing/Testing';
import Footer from '../../compo/Shared/Footer/Footer';
import Header from '../../compo/Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Testing />
            <Doctors />
            <DentalCare />
            <Footer />
        </div>
    );
};

export default Home;