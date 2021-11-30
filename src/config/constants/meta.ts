import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ShiborgSwap',
  description:
    'The most popular swap! Earn SHIBORG through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ShiworgSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://shiborgtoken.com/wp-content/uploads/2021/10/Hanzo-Inu-Cyborg-Army3.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ShiborgSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ShiborgSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ShiborgSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ShiborgSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ShiborgSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ShiborgSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ShiborgSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ShiborgSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ShiborgSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ShiborgSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ShiborgSwap')}`,
      }
    default:
      return null
  }
}
