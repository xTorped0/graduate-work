import React from 'react';

import { useSelector } from 'react-redux';
import { RootReducerType } from '../store';
import { History } from '../store/main/types';

import '../styles/history.scss'

import Footer from './Footer';
import Menu from './Menu';

export default function User() {
	const { additional } = useSelector((state: RootReducerType) => state.main)
	//

	return (
		<>
			<header>
				<Menu />
			</header>
			<section>
				<div className="history">
					<div className="history__title">
						<h1>
							Історія угод
						</h1>
					</div>
					<div className="history__content">
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
										Дата проведення трейду
									</td>
									<td>
										Операція
									</td>
									<td>
										Вартість за одиницю
									</td>
									<td>
										Кількість
									</td>
									<td>
										Сума угоди
									</td>
									<td>
										Коммісія брокеру
									</td>
									<td>
										Дохід
									</td>
								</tr>
							</thead>
							<tbody>
								{ additional.history.map((item, key) => <Item key={item.isin + key} data={item} />)}
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

function Item(props: { data: History }) {
	const { data } = props
	const { instr_nm, isin, date, operation, p, q, summ, profit, commission, curr_c } = data

	return (
		<tr className="history__item item">
			<td className="item__title">
				{ instr_nm }
			</td>
			<td>
				{ isin }
			</td>
			<td>
				{ date }
			</td>
			<td>
				{ operation === 'buy' ? 'Покупка' : 'Продаж' }
			</td>
			<td className="item__amount">
				{ p + curr_c }
			</td>
			<td className="item__amount">
				{ q }
			</td>
			<td className="item__amount">
				{ summ + curr_c }
			</td>
			<td className="item__amount">
				{ commission + curr_c }
			</td>
			<td className="item__amount">
				{ operation === 'sell' ? profit + curr_c : ' - ' }
			</td>
		</tr>
	)
}
