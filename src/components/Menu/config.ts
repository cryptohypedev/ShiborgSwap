import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
        status:  {text: "LIVE", color: "primary"}
      },
      // {
      //   label: t('Liquidity'),
      //   href: '/pool',
      // },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  //   status:  {text: "SOON", color: "warning"}
  // },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: t('NTF Market'),
    icon: 'NftIcon',
    href: '/',
    status:  {text: "SOON", color: "warning"}    
  },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://shiborgtoken.com/',
  },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Audit Report'),
        href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_ShiborgInu.pdf',
      },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   label: t('Github'),
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.pancakeswap.finance',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
