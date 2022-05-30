import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../store';
import { Dividend, Ticker } from '../store/main/types';
import '../styles/stats.scss'
import Footer from './Footer';
import Menu from './Menu';

export default function Stats() {
	const [currentStats, setCurrentStats] = useState('dividends')
	const { additional } = useSelector((state: RootReducerType) => state.main)
	//
	const countedDividents = useMemo(() => additional?.dividends.reduce((acc: Record<string, Dividend>, curr: Dividend) => {
		const item = acc[curr.isin]
		return { ...acc, [curr.isin]: item ? { ...curr, amount: item.amount + curr.amount } : curr }
	}, {}), [additional])

	const summ = useMemo(() => Object.values(countedDividents).reduce((acc: number, curr: Dividend) => acc + curr.amount, 0), [countedDividents])
	const summPaper = useMemo(() => additional?.tickers?.reduce((acc: Pick<Ticker, 'profit_close' | 'profit' | 'market_value' | 'open_bal'>, curr: Ticker) => ({
		profit_close: acc.profit_close + curr.profit_close,
		profit: acc.profit + curr.profit,
		market_value: acc.market_value + curr.market_value,
		open_bal: acc.open_bal + curr.open_bal
	}), { profit_close: 0, profit: 0, market_value: 0, open_bal: 0 }), [additional.tickers]);

	const onStatsClick = (type: string) => () => {
		setCurrentStats(type)
	}

	return (
		<>
			<header>
				<Menu />
			</header>
			<section>
				<div className="stats">
					<div className="dividends">
						<div className="dividends__title">
							<div onClick={onStatsClick('dividends')}>
								<h2 className={`${currentStats === 'dividends' ? 'active' : ''}`}>
									Дівіденди
								</h2>
							</div>
							<div onClick={onStatsClick('papers')}>
								<h2 className={`${currentStats !== 'dividends' ? 'active' : ''}`}>
									Бумаги у кошельку
								</h2>
							</div>
						</div>
						{ currentStats === 'dividends' ? (
							<div className="dividends__content">
								<table>
									<thead>
										<tr>
											<td>
												Тікер
											</td>
											<td>
												ISIN
											</td>
											<td>
												Дата получення
											</td>
											<td>
												Сума доходу від дівідендів
											</td>
										</tr>
									</thead>
									<tbody>
										{ Object.values(countedDividents).map(item => <DividendItem key={item.isin} data={item} />)}
									</tbody>
									<tfoot>
										<tr>
											<td>
												Сума
											</td>
											<td />
											<td />
											<td className="divident__amount">
												{ summ + additional.plainAccountInfoData.base_currency }
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						) : (
							<div className="papers__content">
								<table>
									<thead>
										<tr>
											<td>
												Тікер
											</td>
											<td>
												Назва
											</td>
											<td>
												ISIN
											</td>
											<td>
												Кількість
											</td>
											<td>
												Ціна за шт
											</td>
											<td>
												Дохід від акції за весь час
											</td>
											<td>
												Профіт
											</td>
											<td>
												Вартість
											</td>
											<td>
												Балансова вартість
											</td>
										</tr>
									</thead>
									<tbody>
										{ additional.tickers.map((item, ind) => <PaperItem key={ind} data={item} />)}
									</tbody>
									<tfoot>
										<tr>
											<td>
												Сума
											</td>
											<td />
											<td />
											<td />
											<td />
											<td className="paper__amount">
												{ summPaper.profit_close + additional.plainAccountInfoData.base_currency }
											</td>
											<td className="paper__amount">
												{ summPaper.profit + additional.plainAccountInfoData.base_currency }
											</td>
											<td className="paper__amount">
												{ summPaper.market_value + additional.plainAccountInfoData.base_currency }
											</td>
											<td className="paper__amount">
												{ summPaper.open_bal + additional.plainAccountInfoData.base_currency }
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

function DividendItem({ data }: { data: Dividend }) {
	const { ticker, isin, amount, currency, ex_date } = data
	return (
		<tr className="dividends__divident divident">
			<td className="divident__title">
				{ ticker }
			</td>
			<td>
				{ isin }
			</td>
			<td>
				{ ex_date }
			</td>
			<td className="divident__amount">
				{ amount + currency }
			</td>
		</tr>
	)
}

function PaperItem({ data }: { data: Ticker }) {
	const {
		issue_nb, i,
		q, name, mkt_price,
		open_bal, profit_close, profit,
		market_value, curr
	} = data
	return (
		<tr className="paper">
			<td className="paper__title">
				{ i }
			</td>
			<td>
				{ name }
			</td>
			<td>
				{ issue_nb }
			</td>
			<td>
				{ q }
			</td>
			<td>
				{ mkt_price + curr }
			</td>
			<td className="paper__amount">
				{ profit_close + curr }
			</td>
			<td className="paper__amount">
				{ profit + curr }
			</td>
			<td className="paper__amount">
				{ market_value + curr }
			</td>
			<td className="paper__amount">
				{ open_bal + curr }
			</td>
		</tr>
	)
}

