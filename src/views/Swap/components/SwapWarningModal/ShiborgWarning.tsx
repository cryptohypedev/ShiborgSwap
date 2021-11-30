import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Text } from '@pancakeswap/uikit'

const ShiborgWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('To trade Shiborg, you must:')} </Text>
      <Text>• {t('Click on the settings icon')}</Text>
      <Text mb="24px">• {t('Set your slippage tolerance to 12%+')}</Text>
      <Text>{t('This is because Shiborg taxes a 10% fee on each transaction:')}</Text>
      <Text>• {t('2% fee = redistributed to all existing holders')}</Text>
      <Text>• {t('8% fee = used to add liquidity')}</Text>
    </>
  )
}

export default ShiborgWarning
