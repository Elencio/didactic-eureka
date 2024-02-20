// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Kudonza',
  author: 'Elencio',
  fullName: 'Elencio Calado Zivane',
  headerTitle: 'Kudonza',
  description:
    'Meu desejo de praticar minhas habilidades e compartilhar o conhecimento adquirido impulsiona meus esforços.',
  language: 'pt-BR',
  theme: 'system',
  siteUrl: 'https://didactic-eureka.vercel.app/',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/Karhdo's%20Blog%20-%20Karhdo's%20Coding%20Adventure",
  siteRepo: 'https://github.com/Elencio/didactic-eureka',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'elencio.dev.studio@gmail.com',
  github: 'https://github.com/Elencio',
  facebook: 'https://www.facebook.com/karhdo.dev',
  linkedin: 'https://www.linkedin.com/in/elencio-calado-zivane/',
  twitter: 'https://twitter.com/karhdo',
  youtube: 'https://youtube.com',
  locale: 'pt-BR',
  socialAccounts: {
    github: 'Elencio',
    linkedin: 'elencio',
    facebook: 'karhdo.dev',
  },
  analytics: {
    umamiWebsiteId: 'e1ed5a11-2052-4320-be2b-211933409af1',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
