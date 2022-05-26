import React from 'react';
import '../styles/main.scss'


export default function Main() {
	return (
		<div className="content">
			<div className="content__main">
				<div className="content__title">
					<h1> Хто ми </h1>
				</div>
				<div className="content__text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit officiis exercitationem eius reprehenderit? Quaerat ratione nisi a possimus veritatis! Natus ducimus accusamus id earum ea distinctio quisquam quia unde.
					Hic voluptatum accusantium quo ullam velit cupiditate sed, suscipit aperiam porro eligendi incidunt omnis! Non saepe molestiae magni! Aperiam illum ipsam suscipit, eius aliquid quasi architecto dolores totam non tempore!
					Illo eius ut mollitia eligendi quae fugiat vitae laudantium possimus nam odit exercitationem voluptas nihil laborum, cum tempora, ab corrupti eum, repudiandae error enim. Similique aliquid labore veniam. Ab, quo!
					Deserunt fuga dicta ea illum doloremque tempora fugiat facere officia vitae aperiam iure minus qui iste, molestiae impedit eum molestias. Porro, amet nobis. Voluptas, placeat voluptatibus optio itaque eligendi mollitia?
					Alias non dolorem eum laudantium! Aliquam repudiandae consequatur cupiditate tempore assumenda incidunt fugit. Minus, perspiciatis amet consequatur voluptate placeat, ab, nobis consectetur fugit suscipit nihil similique culpa accusamus. Recusandae, voluptatibus.
					Temporibus culpa perferendis rerum minima exercitationem quia incidunt iste! Voluptate culpa a error harum qui labore. Eos cum esse labore dolore aliquid aliquam atque praesentium ipsa. Excepturi officiis assumenda eaque!
				</div>
			</div>
			<div className="content__navigation navigation">
				<div className="navigation__item navigation__item-current">
					<div className="navigation__number">01</div>
					<div className="navigation__text">Хто ми </div>
				</div>
				<div className="navigation__item">
					<div className="navigation__number">02</div>
					<div className="navigation__text"> Чим ми можемо вам допомогти </div>
				</div>
				<div className="navigation__item">
					<div className="navigation__number">03</div>
					<div className="navigation__text"> Що ми предлагаємо</div>
				</div>
				<div className="navigation__item">
					<div className="navigation__number">04</div>
					<div className="navigation__text"> Наші партнери </div>
				</div>
				<div className="navigation__item">
					<div className="navigation__number">05</div>
					<div className="navigation__text"> Наші контакти </div>
				</div>
			</div>
			<div className="content__counter">
				01
			</div>
		</div>
	)
}
