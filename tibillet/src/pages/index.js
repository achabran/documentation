import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import styles from './index.module.css';


function HeroBanner() {
    return (
        <div className={clsx(styles.announcement, styles.announcementDark)}>
            <div className={styles.heroInner}>
                <h1 className={styles.heroProjectTagline}>
                    <img
                        alt={translate({message: ''})}
                        className={styles.heroLogo}
                        src={useBaseUrl('/img/logoTibMJ4300.png')}
                        width="200"
                        height="200"
                    />
                    <span
                        className={styles.heroTitleTextHtml}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: translate({
                                id: 'homepage.hero.title',
                                message:
                                    "Outils <b>évènementiels</b> et économiques <b>libres</b> créateurs de réseaux <b>cooperatifs</b>.",
                                description:
                                    'Titre',
                            }),
                        }}
                    />
                </h1>

                <div className={styles.indexCtas}>
                    <Link className="button button--primary" to="/docs/presentation/introduction">
                        <Translate>En savoir plus</Translate>
                    </Link>
                    <Link className="button button--info" to="/docs/presentation/demonstration">
                        <Translate>Demonstration</Translate>
                    </Link>
                    {/*<Link className="button button--warning" to="https://donate.stripe.com/28o6oPg8Ad7T3Sg5kk">*/}
                    {/*    <Translate>Contribuer</Translate>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>
    );
}


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/presentation/introduction">
                        En savoir plus
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://donate.stripe.com/28o6oPg8Ad7T3Sg5kk">
                        Soutenir
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Ticketing, cashless and cooperative tools for organisations and artists">
            <main>
                {/*<HomepageHeader/>*/}
                <HeroBanner/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
