import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Outil 360°',
        Svg: require('@site/static/img/undraw_report_re_f5n5.svg').default,
        description: (
            <>
                Une suite d'applications pour gérer l'évenementiel éthique :
                Adhésion, billetterie, cashless, monnaie temps, gestion de buvette et de restauration.
            </>
        ),
    },
    {
        title: 'Créateur de réseau',
        Svg: require('@site/static/img/undraw_world_re_768g.svg').default,
        description: (
            <>
                TiBillet met en relation artistes, organisateurs, publics et institutions.
                Un seul outil pour toute la fillière culturelle.
            </>
        ),
    },
    {
        title: 'Social et solidaire',
        Svg: require('@site/static/img/undraw_share_link_re_54rx.svg').default,
        description: (
            <>
                TiBillet est une société coopérative d'intérêt commun. Rejoignez l'aventure d'un collectif et inscrivez vous dans
                l'économie sociale et solidaire !
            </>
        ),
    },
    {
        title: 'Low Tech',
        Svg: require('@site/static/img/undraw_ride_a_bicycle_re_6tjy.svg').default,
        description: (
            <>
                Utilisez votre propre matériel existant ou DIY ! TiBillet est conçu pour être mutualisé,
                pérenne et facilement maintenable : 100% Open Hardware !
            </>
        ),
    },
    {
        title: 'Open Source',
        Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
        description: (
            <>
                Parce que nous constuisons un outil qui à besoin de votre confiance, le code de TiBillet est audité régulièrement,
                publié sous licence AGPLv3 et disponible sur github.
            </>
        ),
    },
        {
        title: "Créateurs d'évènements",
        Svg: require('@site/static/img/undraw_compose_music_re_wpiw.svg').default,
        description: (
            <>
                TiBillet est fabriqué pour et par des associations culturelles ! Tiers-lieux, FabLab, venez nous voir sur l'île de la Réunion :)
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
