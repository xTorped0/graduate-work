declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare const fileURL :string;
declare module '*.png' {
	export default fileURL
}

declare module '*.jpg' {
	export default fileURL
}

declare module '*.jpeg' {
	export default fileURL
}

declare module '*.gif' {
	export default fileURL
}
