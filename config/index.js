import en from '../lang/en.js'
import tw from '../lang/tw.js'

export const API_ROOT = '/api'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      name: '繁體中文'
    },
  ],
  defaultLocale: 'en',
  routes: {
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, tw }
  }
}