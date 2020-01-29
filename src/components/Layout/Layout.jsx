import React, {Fragment} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({children}) => (
    <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
)

export default Layout;