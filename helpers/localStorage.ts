const storage = window.localStorage

export function setLocal(value: any) {
	// const keys = storage.getItem('local_storage_keys')
	// const keysParsed = keys ? JSON.parse(keys) : []

	// if(keysParsed.includes(key)) {
	// 	console.warn(`The key ${key} was used in local storage before`)
	// }

	storage.setItem(getFullKey(), JSON.stringify(value))
	//
	// keysParsed.push(key)
	// storage.setItem('local_storage_keys', JSON.stringify(keysParsed))
}

type combineData = { [key: string]: any } | any[]

export function combineLocal(data: combineData) {
	const storageData = storage.getItem(getFullKey())
	const parsedData = storageData ? JSON.parse(storageData) : {}

	if(typeof parsedData !== 'object') return
	const isDataArray = Array.isArray(data)

	let mixedData: combineData;

	if(Array.isArray(parsedData)) {
		if(isDataArray) mixedData = parsedData.concat(data)
		else mixedData = [...parsedData, data]
	} else if(!isDataArray) {
		mixedData = Object.assign(parsedData, data)
	} else {
		console.warn('Data cant be combined')
		return
	}

	storage.setItem(getFullKey(), JSON.stringify(mixedData))
}

export function getLocal() {
	const data = storage.getItem(getFullKey())
	return data ? JSON.parse(data) : {}
}

function getFullKey(): string {
	return 'graduate'
}
