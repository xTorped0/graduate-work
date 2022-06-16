import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../store';
import '../styles/user.scss'
import Footer from './Footer';
import Menu from './Menu';

export default function User() {
	const { main, additional } = useSelector((state: RootReducerType) => state.main)
	//
	const { plainAccountInfoData } = additional || {}

	const {
		account_type, client_name, client_date_open,
		base_currency, tariff_name, activation_date
	} = plainAccountInfoData || {}
	const {
		openPositionsSum, posval, netAsset,
		moneyInvested, brokerCommissioned, dividendProfit,
		totalProfitFixed, totalProfitReal, totalProfitOut,
		profitPercent, baseCurrency
	} = main || {}

	return (
		<>
			<header>
				<Menu />
			</header>
			<section>
				<div className="user">
					<div className="user__info">
						<div className="user__preview">
							<div className="user__icon">
								<svg viewBox="0 0 32 32" fill="none">
									<path d="M16 8C15.0111 8 14.0444 8.29325 13.2222 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0246 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.8271 17.241 19.6079 16.6001 20.1574 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8ZM16 16C15.4067 16 14.8266 15.8241 14.3333 15.4944C13.8399 15.1648 13.4554 14.6962 13.2284 14.1481C13.0013 13.5999 12.9419 12.9967 13.0576 12.4147C13.1734 11.8328 13.4591 11.2982 13.8787 10.8787C14.2982 10.4591 14.8328 10.1734 15.4147 10.0576C15.9967 9.94189 16.5999 10.0013 17.1481 10.2284C17.6962 10.4554 18.1648 10.8399 18.4944 11.3333C18.8241 11.8266 19 12.4067 19 13C18.9992 13.7954 18.6829 14.558 18.1204 15.1204C17.558 15.6829 16.7954 15.9992 16 16Z" />
									<path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5194 8.72977 25.8948 6.10518C23.2702 3.48059 19.7117 2.00423 16 2V2ZM10 26.377V25C10.0008 24.2046 10.3171 23.442 10.8796 22.8796C11.442 22.3171 12.2046 22.0008 13 22H19C19.7954 22.0008 20.558 22.3171 21.1204 22.8796C21.6829 23.442 21.9992 24.2046 22 25V26.377C20.1792 27.4402 18.1085 28.0005 16 28.0005C13.8915 28.0005 11.8208 27.4402 10 26.377V26.377ZM23.992 24.926C23.9721 23.6143 23.4377 22.363 22.5039 21.4416C21.5702 20.5202 20.3118 20.0025 19 20H13C11.6882 20.0025 10.4298 20.5202 9.4961 21.4416C8.56235 22.363 8.02794 23.6143 8.00801 24.926C6.19457 23.3067 4.91574 21.1749 4.34084 18.8127C3.76594 16.4505 3.92211 13.9693 4.78864 11.6979C5.65518 9.42637 7.19123 7.47167 9.19338 6.09257C11.1955 4.71347 13.5693 3.97503 16.0005 3.97503C18.4317 3.97503 20.8055 4.71347 22.8076 6.09257C24.8098 7.47167 26.3458 9.42637 27.2124 11.6979C28.0789 13.9693 28.2351 16.4505 27.6602 18.8127C27.0853 21.1749 25.8064 23.3067 23.993 24.926H23.992Z" />
								</svg>
								<div className="user__edit">
									<svg viewBox="0 0 36 36" fill="none">
										<path d="M33.8701 8.31997L28.0001 2.41997C27.6122 2.03403 27.0872 1.81738 26.5401 1.81738C25.9929 1.81738 25.468 2.03403 25.0801 2.41997L4.27006 23.2L2.37006 31.4C2.30451 31.6997 2.30676 32.0103 2.37663 32.3091C2.44651 32.6079 2.58224 32.8873 2.77392 33.1269C2.9656 33.3665 3.20838 33.5602 3.48453 33.694C3.76068 33.8277 4.06323 33.8981 4.37006 33.9C4.51303 33.9144 4.65709 33.9144 4.80006 33.9L13.0901 32L33.8701 11.24C34.256 10.8521 34.4726 10.3272 34.4726 9.77997C34.4726 9.23279 34.256 8.70786 33.8701 8.31997V8.31997ZM12.0901 30.2L4.32006 31.83L6.09006 24.21L21.6601 8.69997L27.6601 14.7L12.0901 30.2ZM29.0001 13.25L23.0001 7.24997L26.4801 3.78997L32.3801 9.78997L29.0001 13.25Z" />
									</svg>

								</div>
							</div>
							<div className="user__text">
								<div className="user__title">
									<h2>
										{ client_name }
									</h2>
								</div>
								<div className="user__subtitle">
									<h4>
										{ account_type }
									</h4>
									<span>
										Тариф:
										{ tariff_name }
										; Базова валюта:
										{ base_currency }
										<br />
										Дата активації аккаунта:
										{ activation_date }
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="user__stats">
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Відкриті позиції </div>
							<div className="stat-item__value">
								{ openPositionsSum + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Грошові кошти </div>
							<div className="stat-item__value">
								{ posval + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Баланс </div>
							<div className="stat-item__value">
								{ netAsset + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Вкладені гроші </div>
							<div className="stat-item__value">
								{ moneyInvested + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Комісія брокера </div>
							<div className="stat-item__value">
								{ brokerCommissioned + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Дивідендний прибуток </div>
							<div className="stat-item__value">
								{ dividendProfit + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Загальний прибуток фіксований </div>
							<div className="stat-item__value">
								{ totalProfitFixed + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Загальний поточний прибуток </div>
							<div className="stat-item__value">
								{ totalProfitReal + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Доступно для виводу </div>
							<div className="stat-item__value">
								{ totalProfitOut + baseCurrency }
							</div>
						</div>
						<div className="user__stat-item stat-item">
							<div className="stat-item__title"> Загальний прибуток у % </div>
							<div className="stat-item__value">
								{ profitPercent }
								%
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
