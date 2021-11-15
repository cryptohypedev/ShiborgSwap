import { useEffect, useState } from 'react'
import { useMultipleContractSingleData } from 'state/multicall/hooks'
import { Result } from 'ethers/lib/utils'
import BigNumberJs from 'bignumber.js'
import { PAIR_INTERFACE } from './usePairs'


const BANANA_BUSD_POOL = process.env.REACT_APP_BANANA_BUSD_POOL || '0x7bd46f6da97312ac2dbd1749f82e202764c0b914'

export const useGetPriceDataFromLP = () => {
  const [response] = useMultipleContractSingleData([BANANA_BUSD_POOL], PAIR_INTERFACE, 'getReserves')
  if (response.loading === false) {
    const result = response.result as Result;
    if (result) {
      const bananaReserve = new BigNumberJs(result[0]._hex)
      const busdReserve = new BigNumberJs(result[1]._hex)
      const bananaUsd = busdReserve.div(bananaReserve)
      return bananaUsd.toNumber()    
    }
    
  }

  return undefined
}

export default useGetPriceDataFromLP
