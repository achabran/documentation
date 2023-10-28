// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'TiBillet',
    tagline: "L'événementiel coopératif",
    url: 'https://tibillet.org',
    baseUrl: '/',
    // baseUrl: '/documentation/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    scripts: [{src: 'https://plausible.codecommun.co/js/script.js', defer: true, 'data-domain': 'tibillet.org'}],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'TiBillet', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/TiBillet/documentation/tree/main/tibillet/',
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: 'TiBillet, le blog.',
                    blogDescription: 'Le blog de TiBillet, l\'événementiel coopératif.',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    editUrl:
                        'https://github.com/TiBillet/documentation/tree/main/tibillet/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({

            navbar: {
                title: 'TiBillet',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logoTibMJ5-300.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'presentation',
                        label: 'Presentation',
                    },
                    {to: '/roadmap', label: 'Fonctionnalités', position: 'left'},
                    {
                        type: 'doc',
                        docId: '/category/documentation-utilisateur',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'api',
                        label: 'API',
                    },
                    {
                        href: 'https://github.com/TiBillet',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {to: 'https://codecommun.coop/blog/', label: 'Blog', position: 'left'},

                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Documentation',
                                to: '/docs/category/documentation-utilisateur',
                            },
                            {
                                label: 'API',
                                to: '/docs/api/intro',
                            },

                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/7FJvtYx',
                            },
                            {
                                label: 'Rocket Chat',
                                href: 'https://chat.communecter.org/channel/Tibillet/',
                            },
                            {
                                label: 'Mail',
                                href : 'mailto:contact@tibillet.re',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: 'https://codecommun.coop/blog/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/TiBillet',
                            },
                        ],
                    },
                ],
                copyright: `MIT Licence @ ${new Date().getFullYear()} - SCIC TiBillet Coop. Built with Docusaurus. Illustration by undraw.co`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            forceDarkMode: true,
            image: 'img/logoTibMJ5-150.png',
            metadata: [{
                name: 'keywords',
                content: "Adhésion, billetterie, cashless, monnaie locale, monnaie temps, compagne de don, gestion de prise de commande buvette et restauration"
            }],
        }),
};

module.exports = config;
