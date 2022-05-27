import React, { useEffect, useRef, useState } from 'react';
import useIntersection from '../../helpers/IsInViewoport';
import '../styles/main.scss'


export default function Main() {
	const [current, setCurrent] = useState(1)

	const ref1 = useRef()
	const ref2 = useRef()
	const ref3 = useRef()
	const ref4 = useRef()
	const ref5 = useRef()

	const viewPorts = [
		useIntersection(ref1, '-500px'),
		useIntersection(ref2, '-500px'),
		useIntersection(ref3, '-500px'),
		useIntersection(ref4, '-500px'),
		useIntersection(ref5, '-500px'),
	]

	const [inVieport1, inVieport2, inVieport3, inVieport4, inVieport5] = viewPorts

	const onScroll = (e: React.UIEvent<HTMLElement>) => {
		//
	}
	const onLink = (ref:React.MutableRefObject<HTMLElement>) => () => {
		// @ts-ignore
		if(ref.current) ref.current.parentNode.scrollTop = ref.current.offsetTop;
	}

	useEffect(() => {
		const currentViewPort = (viewPorts.findIndex(vp => Boolean(vp)) + 1)
		if(currentViewPort > 0) setCurrent(currentViewPort)
	}, [inVieport1, inVieport2, inVieport3, inVieport4, inVieport5])

	return (
		<div className="content">
			<div className="content__main" onScroll={onScroll}>
				<div className="content__item" ref={ref1}>
					<div className="content__title" id="01">
						<h1> Хто ми? </h1>
					</div>
					<div className="content__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
						Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
						<p>
							Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
							Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
						</p>
						<p>
							Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
							Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
						</p>
					</div>
				</div>
				<div className="content__item" ref={ref2}>
					<div className="content__title" id="02">
						<h1> Чим ми можемо вам допомогти? </h1>
					</div>
					<div className="content__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
						Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
						<p>
							Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
							Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
						</p>
						<p>
							Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
							Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
						</p>
					</div>
				</div>
				<div className="content__item" ref={ref3}>
					<div className="content__title" id="03">
						<h1> Що ми предлагаємо </h1>
					</div>
					<div className="content__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
						Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
						<p>
							Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
							Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
						</p>
						<p>
							Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
							Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
						</p>
					</div>
				</div>
				<div className="content__item" ref={ref4}>
					<div className="content__title" id="04">
						<h1> Наші партнери </h1>
					</div>
					<div className="content__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
						Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
						<p>
							Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
							Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
						</p>
						<p>
							Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
							Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
						</p>
					</div>
				</div>
				<div className="content__item" ref={ref5}>
					<div className="content__title" id="05">
						<h1> Наші контакти  </h1>
					</div>
					<div className="content__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
						Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
						<p>
							Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
							Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
						</p>
						<p>
							Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
							Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
						</p>
					</div>
				</div>
			</div>
			<div className="content__navigation navigation">
				<div
					onClick={onLink(ref1)}
					className={`navigation__item ${current === 1 ? 'navigation__item-current' : ''}`}
				>
					<div className="navigation__number">01</div>
					<div className="navigation__text">Хто ми? </div>
				</div>
				<div
					onClick={onLink(ref2)}
					className={`navigation__item ${current === 2 ? 'navigation__item-current' : ''}`}
				>
					<div className="navigation__number">02</div>
					<div className="navigation__text"> Чим ми можемо вам допомогти? </div>
				</div>
				<div
					onClick={onLink(ref3)}
					className={`navigation__item ${current === 3 ? 'navigation__item-current' : ''}`}
				>
					<div className="navigation__number">03</div>
					<div className="navigation__text"> Що ми предлагаємо</div>
				</div>
				<div
					onClick={onLink(ref4)}
					className={`navigation__item ${current === 4 ? 'navigation__item-current' : ''}`}
				>
					<div className="navigation__number">04</div>
					<div className="navigation__text"> Наші партнери </div>
				</div>
				<div
					onClick={onLink(ref5)}
					className={`navigation__item ${current === 5 ? 'navigation__item-current' : ''}`}
				>
					<div className="navigation__number">05</div>
					<div className="navigation__text"> Наші контакти </div>
				</div>
			</div>
			<div className="content__counter">
				0
				{current}
			</div>
		</div>
	)
}
