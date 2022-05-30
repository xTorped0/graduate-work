export interface MainData {
	openPositionSum: number;
	posval: number;
	netAsset: number;
	moneyInvested: number;
	brokerCommissioned: number;
	devidendProfit: number;
	totalProfitFixed: number;
	totalProfitReal: number;
	totalProfitOut: number;
	profitPercent: number;
	baseCurrency: string;
}

export interface PlainAccountInfoData {
	account_type: string;
	client_name: string;
	base_currency: string;
	tariff_name: string;
	client_date_open: string;
	activation_date: string;
}
export interface History {
	trade_id: number;
	date: any;
	short_date: string;
	pay_d: string;
	instr_nm: string;
	instr_type: number;
	instr_kind: string;
	issue_nb: string;
	operation: string;
	p: number;
	curr_c: string;
	q: number;
	summ: number;
	turnover: string;
	profit: number;
	fifo_profit: number;
	mkt_id: any;
	order_id: string;
	office: number;
	commission: number;
	commission_currency: string;
	comment: string;
	transaction_id: number;
	isin: string;
	otc: number;
	trade_nb: string;
	mkt_name: string;
	id: string;
}

export interface Dividend {
	amount: number;
	isin: string;
	currency: string;
	ticker: string;
}

export interface Ticker {
	i: string;
	s: number;
	curr: string;
	name: string;
	open_bal: number;
	mkt_price: number;
	profit_close: number;
	market_value: number;
	profit: number;
	issue_nb: string;
}

export interface AdditionalData {
	plainAccountInfoData: PlainAccountInfoData;
	history: History[];
	dividends: Dividend[];
	tickers: Ticker[];
}


export interface AuthData {
	number: string;
	token: string;
}
