import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('#dialog')

interface Props {
	visible: boolean;
	children: React.ReactNode;
	isClosable?: boolean;
	onClose?: () => void;
}

export default function Dialog(props: Props) {
	const { children, isClosable = true, onClose = () => {}, visible } = props
	const ref = useRef(null)

	const onBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if(!ref.current.contains(e.target) && isClosable) onClose()
	}

	return ReactDOM.createPortal(
		(
			<div className={`dialog ${visible ? 'open' : ''}`} onClick={onBackgroundClick}>
				<div className="dialog__content" ref={ref}>
					{ children }
				</div>
			</div>
		), container
	)
}
