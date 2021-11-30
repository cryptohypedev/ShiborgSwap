import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x389c13d5be24bed2af35c30f211e042225cb06ff',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://shiborgtoken.com/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'ShiborgSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'With Shiborg there´s no limit.',
  bodyText:
    'A Cyborg Shiba Inu Dog From Planet Shibamoon X1000.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x389c13d5be24bed2af35c30f211e042225cb06ff',
    text: 'Buy Shiborg',
    external: false,
  },
  secondaryButton: {
    to: 'https://shiborgtoken.com/',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'token', alt: 'SHIBORG token' },
    ],
    maxHeight: '290px',
  },
}

