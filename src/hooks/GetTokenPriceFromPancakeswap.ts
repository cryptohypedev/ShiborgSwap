import { useEffect, useState } from 'react'

/* eslint-disable camelcase */
type ApiResponse = {
  data : {
    [key: string]: string
  }
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 */
const api = 'https://api.pancakeswap.info/api/v2/tokens/0x389c13d5be24bed2af35c30f211e042225cb06ff' // V2

export const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData