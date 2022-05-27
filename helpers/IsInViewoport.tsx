import React, { useState, useEffect } from 'react'

const useIntersection = (element: React.MutableRefObject<undefined>, rootMargin?: string) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setState(entry.isIntersecting);
		}, { rootMargin });

		if(element.current) observer.observe(element.current);

		return () => observer.unobserve(element.current);
	}, []);

	return isVisible;
};

export default useIntersection
