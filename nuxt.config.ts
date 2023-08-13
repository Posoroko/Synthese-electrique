// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: "https://synthese-electric.fr",
            siteName: 'Synthèse électric, électricien à Maël-Carhaix.',
            siteDescription: "Nous vous accompagnons au quotidien dans vos travaux d’installation, de rénovation et de dépannage de votre installation électrique.",
            language: 'fr-FR',
            titleSeparator: '|'
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            title: '%siteName',
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png', },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png', },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png', },
                { rel: "manifest", href: "/favicon/site.webmanifest" },
                { rel: "shortcut icon", href: "/favicon/favicon.ico" }
            ],
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:title',
                    content: '%siteName',
                },
                {
                    name: 'og:description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:image',
                    content: '/favicon/synthese-electric-1200x630.webp',
                },
                {
                    name: 'og:url',
                    content: '%siteUrl',
                },
                {
                    name: 'og:site_name',
                    content: '%siteName',
                },
                {
                    name: 'og:locale',
                    content: 'fr_FR',
                },
                {
                    name: 'og:type',
                    content: 'website',
                }
            ]
        }
    },
    css: [
        '@/assets/css/main.css'
    ],
    ssr: true,
    extends: [
        'nuxt-seo-kit'
    ]
})
