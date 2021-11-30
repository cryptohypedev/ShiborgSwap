import tokens from 'config/constants/tokens'
import { Address } from './types'

const { bondly, safemoon, shiborg } = tokens

interface WarningToken {
  symbol: string
  address: Address
}

interface WarningTokenList {
  [key: string]: WarningToken
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  shiborg,
  bondly,
}

export default SwapWarningTokens
