// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "Karhdo's Coding Adventure",
  author: 'Elencio',
  fullName: 'Elencio Calado Zivane',
  headerTitle: "elencio's Blog",
  description:
    'Meu desejo de praticar minhas habilidades e compartilhar o conhecimento adquirido impulsiona meus esforços.',
  language: 'pt-BR',
  theme: 'system',
  siteUrl: 'https://elencio.dev',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/Karhdo's%20Blog%20-%20Karhdo's%20Coding%20Adventure",
  siteRepo: 'https://github.com/Karhdo/karhdo.dev',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'dotrongkhanh.dev@gmail.com',
  github: 'https://github.com/Karhdo',
  facebook: 'https://www.facebook.com/karhdo.dev',
  linkedin: 'https://www.linkedin.com/in/karhdo',
  twitter: 'https://twitter.com/karhdo',
  youtube: 'https://youtube.com',
  locale: 'pt-BR',
  socialAccounts: {
    github: 'Karhdo',
    linkedin: 'karhdo',
    facebook: 'karhdo.dev',
  },
  analytics: {
    umamiWebsiteId: '7b7953a7-de2e-4e30-9a29-1a4aee05c627',
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
