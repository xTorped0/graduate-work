import React from 'react';
import '../styles/footer.scss'

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__copyright">
				©2022
			</div>
			<div className="footer__social">
				<a href="https://www.instagram.com/dabizha_vanya/" target="_blank" rel="noreferrer">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046V3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64846 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47698 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47698 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002V8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188V7.188Z" />
					</svg>
				</a>
				<a href="https://www.linkedin.com/in/vanya-dabizha-475b271b2/" target="_blank" rel="noreferrer">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M19.868 2.625H4.13203C3.3 2.625 2.625 3.3 2.625 4.13203V19.868C2.625 20.7 3.3 21.375 4.13203 21.375H19.868C20.7 21.375 21.375 20.7 21.375 19.868V4.13203C21.375 3.3 20.7 2.625 19.868 2.625V2.625ZM19.868 19.875C9.37266 19.8727 4.125 19.8703 4.125 19.868C4.12734 9.37266 4.12969 4.125 4.13203 4.125C14.6273 4.12734 19.875 4.12969 19.875 4.13203C19.8727 14.6273 19.8703 19.875 19.868 19.875ZM5.40469 9.65391H8.18672V18.6023H5.40469V9.65391ZM6.79688 8.43047C7.68516 8.43047 8.40937 7.70859 8.40937 6.81797C8.40937 6.60621 8.36767 6.39653 8.28663 6.20089C8.2056 6.00525 8.08682 5.82749 7.93708 5.67776C7.78735 5.52802 7.60959 5.40925 7.41395 5.32821C7.21831 5.24718 7.00863 5.20547 6.79688 5.20547C6.58512 5.20547 6.37544 5.24718 6.1798 5.32821C5.98416 5.40925 5.8064 5.52802 5.65667 5.67776C5.50693 5.82749 5.38815 6.00525 5.30712 6.20089C5.22608 6.39653 5.18437 6.60621 5.18437 6.81797C5.18203 7.70859 5.90391 8.43047 6.79688 8.43047ZM12.7102 14.175C12.7102 13.0078 12.9328 11.8781 14.3789 11.8781C15.8039 11.8781 15.825 13.2117 15.825 14.25V18.6023H18.6047V13.6945C18.6047 11.2852 18.0844 9.43125 15.2695 9.43125C13.9172 9.43125 13.0102 10.1742 12.6375 10.8773H12.6V9.65391H9.93047V18.6023H12.7102V14.175Z" />
					</svg>
				</a>
				<a href="https://myaccount.google.com/profile" target="_blank" rel="noreferrer">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M21.456 10.154C21.579 10.813 21.646 11.502 21.646 12.221C21.646 17.845 17.882 21.844 12.197 21.844C10.9042 21.8444 9.6239 21.59 8.42939 21.0955C7.23489 20.6009 6.14954 19.8758 5.23536 18.9616C4.32118 18.0475 3.59609 16.9621 3.10152 15.7676C2.60696 14.5731 2.3526 13.2929 2.353 12C2.3526 10.7072 2.60696 9.42691 3.10152 8.2324C3.59609 7.0379 4.32118 5.95255 5.23536 5.03837C6.14954 4.12419 7.23489 3.3991 8.42939 2.90453C9.6239 2.40997 10.9042 2.15561 12.197 2.15601C14.855 2.15601 17.076 3.13401 18.78 4.72201L16.005 7.49701V7.49001C14.972 6.50601 13.661 6.00101 12.197 6.00101C8.949 6.00101 6.309 8.74501 6.309 11.994C6.309 15.242 8.949 17.992 12.197 17.992C15.144 17.992 17.15 16.307 17.562 13.993H12.197V10.154H21.457H21.456Z" />
					</svg>
				</a>
				<a href="https://github.com/xTorped0" target="_blank" rel="noreferrer">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
					</svg>
				</a>
			</div>
			<div className="footer__settings">
				<div className="footer__languages">
					<div className="footer__language footer__language-active">
						UA
					</div>
					<div className="footer__language">
						RU
					</div>
					<div className="footer__language">
						EN
					</div>
				</div>
				<div className="footer__theme" />
			</div>
			<div className="footer__contact_us">
				{/* Наші контакти */}
			</div>
		</div>
	)
}
