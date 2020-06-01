import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return(
        <header className={headerStyles.container}>
            <h1 className={headerStyles.logo}>
                <Link to="/" className={headerStyles.logoLink}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/">Main</Link></li>
                    <li><Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;
