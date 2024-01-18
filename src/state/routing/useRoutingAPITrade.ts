import { skipToken } from '@reduxjs/toolkit/query/react'
import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { AVERAGE_L1_BLOCK_TIME } from 'constants/chainInfo'
import { ZERO_PERCENT } from 'constants/misc'
import { useRoutingAPIArguments } from 'lib/hooks/routing/useRoutingAPIArguments'
import ms from 'ms'
import { useEffect, useMemo, useRef, useState } from 'react'

import { getRoutingApiQuote } from './slice'
import { INTERNAL_ROUTER_PREFERENCE_PRICE, QuoteMethod, RouterPreference, SubmittableTrade, TradeState } from './types'

const TRADE_LOADING = { state: TradeState.LOADING, trade: undefined, currentData: undefined } as const

type RoutingAPITradeReturn = {
  state: TradeState
  trade?: SubmittableTrade
  currentTrade?: SubmittableTrade
  method?: QuoteMethod
  swapQuoteLatency?: number
}

/**
 * Returns the best trade by invoking the routing api or the smart order router on the client
 * @param tradeType whether the swap is an exact in/out
 * @param amountSpecified the exact amount to swap in/out
 * @param otherCurrency the desired output/payment currency
 */
export function useRoutingAPITrade<TTradeType extends TradeType>(
  skipFetch: boolean,
  tradeType: TTradeType,
  amountSpecified: CurrencyAmount<Currency> | undefined,
  otherCurrency: Currency | undefined,
  routerPreference: RouterPreference | typeof INTERNAL_ROUTER_PREFERENCE_PRICE,
  account?: string,
  inputTax = ZERO_PERCENT,
  outputTax = ZERO_PERCENT
): RoutingAPITradeReturn {
  const [currencyIn, currencyOut]: [Currency | undefined, Currency | undefined] = useMemo(
    () =>
      tradeType === TradeType.EXACT_INPUT
        ? [amountSpecified?.currency, otherCurrency]
        : [otherCurrency, amountSpecified?.currency],
    [amountSpecified, otherCurrency, tradeType]
  )
	const [result, setResult] = useState<RoutingAPITradeReturn>({ state: TradeState.LOADING })
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { provider } = useWeb3React()
  const queryArgs = useRoutingAPIArguments({
    account,
    tokenIn: currencyIn,
    tokenOut: currencyOut,
    amount: amountSpecified,
    tradeType,
    routerPreference,
    inputTax,
    outputTax,
  })
  useEffect(() => {
    async function updateResults() {
			const walletProvider = provider
      const makePriceQuery = async () => {
        if (queryArgs === skipToken) return { state: TradeState.INVALID }
        const {
          isError,
          data: tradeResult,
          error,
          currentData,
        } = await getRoutingApiQuote(
          queryArgs,
          walletProvider,
          queryArgs.routerPreference === INTERNAL_ROUTER_PREFERENCE_PRICE ? ms(`1m`) : AVERAGE_L1_BLOCK_TIME
        )
        if (!queryArgs.amount || isError) {
          return {
            state: TradeState.INVALID,
            trade: undefined,
            currentTrade: currentData?.trade,
            error: JSON.stringify(error),
          }
        } else if (!tradeResult?.trade) {
          return TRADE_LOADING
        } else {
          return {
            state: TradeState.VALID,
            trade: tradeResult?.trade,
            currentTrade: currentData?.trade,
          }
        }
      }
      const res = await makePriceQuery()
      if (!active || queryArgs === skipToken) return
      setResult(res)
    }
    if (skipFetch) return
    let active = true
    updateResults()
    timerIdRef.current = setInterval(updateResults, AVERAGE_L1_BLOCK_TIME)
    return () => {
      active = false
      if (timerIdRef.current) clearInterval(timerIdRef.current)
    }
  }, [queryArgs, provider, skipFetch])
  return result
}
