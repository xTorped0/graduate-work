export const MainData = {
	openPositionSum: 2168.95,
	posval: 574.95,
	netAsset: 2716.90,
	moneyInvested: 2870,
	brokerCommissioned: 105.28,
	devidendProfit: 57.71,
	totalProfitFixed: 320.64,
	totalProfitReal: -131.87,
	totalProfitOut: -132.93,
	profitPercent: -4.59,
	baseCurrency: 'USD'
}

export const additionalData = {
	plainAccountInfoData: {
		account_type: 'Особистий рахунок фізичної особи',
		client_name: 'Dabizha Ivan',
		base_currency: 'USD',
		tariff_name: 'Smart in USD',
		client_date_open: '2021-03-05',
		activation_date: '2021-03-16'
	},
	history: [
		{
			trade_id: 128176805,
			date: '2021-04-09T16:42:34',
			short_date: '2021-04-09',
			pay_d: '2021-04-13',
			instr_nm: 'PCY.US',
			instr_type: 1,
			instr_kind: 'Фонды',
			issue_nb: 'US46138E7849',
			operation: 'buy',
			p: 27.1,
			curr_c: 'USD',
			q: 2,
			summ: 54.2,
			turnover: '0.00',
			profit: 0,
			fifo_profit: 0.000000,
			mkt_id: 30000000001,
			order_id: '124470559',
			office: 35,
			commission: 0.04,
			commission_currency: 'USD',
			comment: ' Market: usa, security type: stocks, commission currency: USD, service plan: Smart in USD, trade currency: USD.  The minimum commission for each security in a trade: 0.02 USD. ',
			transaction_id: 518620378,
			isin: 'US46138E7849',
			otc: 0,
			trade_nb: 'das_20210409_-T24766',
			mkt_name: 'NYSE/NASDAQ',
			id: '128176805/124470559'
		},
		{
			trade_id: 175572069,
			date: '2021-09-15T20:07 :34',
			short_date: '2021-09-15',
			pay_d: '2021-09-15',
			instr_nm: 'MQ_IPO.US',
			instr_type: 1,
			instr_kind: 'Фонды',
			issue_nb: 'US57142B1044',
			operation: 'sell',
			p: 28.25,
			curr_c: 'USD',
			q: 2,
			summ: 56.5,
			turnover: '0.00',
			profit: 2.5,
			fifo_profit: 0.000000,
			mkt_id: 30000000001,
			order_id: '170211114',
			office: 35,
			commission: 0.28,
			commission_currency: 'USD',
			comment: ' Market: usa, security type: stocks, commission currency: USD, service plan: Smart in USD, trade currency: USD.  The minimum commission for each security in a trade: 0.02 USD. ',
			transaction_id: 7442342,
			isin: 'US57142B1044',
			otc: 0,
			trade_nb: 'das_20210409_-T24766',
			mkt_name: 'NYSE/NASDAQ',
			id: '128176805/124470559'
		}
	],
	dividends: [
		{
			amount: 0.52,
			isin: 'US57142B1044',
			currency: 'USD',
			ticker: 'NOBL.US'
		},
		{
			amount: 0.532,
			isin: 'US57142B1045',
			currency: 'USD',
			ticker: 'NOBbL.US'
		},
		{
			amount: 0.42,
			isin: 'US57142B1044',
			currency: 'USD',
			ticker: 'NOBL.US'
		},
		{
			amount: 0.333,
			isin: 'US57142B1045',
			currency: 'USD',
			ticker: 'NOBbL.US'
		},
		{
			amount: 0.78,
			isin: 'US57142B1043',
			currency: 'USD',
			ticker: 'wqq.NOBL.US'
		}
	],
	tickers: [
		{
			i: 'VNQ.US',
			s: 281.65,
			curr: 'USD',
			name: 'Vanguard REIT Index ETF',
			open_bal: 281.64999,
			mkt_price: 100.65,
			profit_close: 20.3,
			market_value: 300.69,
			profit: 20.3,
			issue_nb: 'US9229085538'
		},
		{
			i: 'EXFY_IPO.US',
			s: 27,
			curr: 'USD',
			name: 'Expensify Inc',
			open_bal: 27,
			mkt_price: 20.93,
			profit_close: -6.07,
			market_value: 20.49,
			profit: -6.07,
			issue_nb: 'US30219Q1067'
		}
	]
}
