const HEADERS = { // || DEF_HEADERS
	'Accept': 'application/json'
	// 'Content-Type': 'application/json'
	// 'Access-Control-Request-Method': 'DELETE'
	// 'Allow': 'DELETE, POST, GET'
};

export function buildRequest(
	path,
	method = 'GET',
	params = null,
	body = null,
	headers = null,
) {
	// [ headers, token supply, body ]
	const reqConfig = { method, mode: 'no-cors' };
	finishReqConfig(reqConfig, body, headers);
	// [ query ]
	const query = queryParamsToStr(params);
	if(query != null) path += query;
	// [ request ]
	const request = new Request(path, reqConfig);
	//
	return request;
}

export function finishReqConfig(reqConfig, body, headers) {
	// [ body ]
	// body | Note that a request using the GET or HEAD method cannot have a body
	// if(body != null) reqConfig.body = typeof body === 'object' ? JSON.stringify(body) : body; // (!) Check logic here
	let contentTypeHeader;
	if(body != null) {
		const typeof_body = typeof body;
		if(typeof_body === 'string' || typeof_body === 'number' || typeof_body === 'boolean') {
			contentTypeHeader = 'text/plain';
			reqConfig.body = String(body);
		} else if(typeof_body === 'object') {
			// if(body instanceof FormData) {} else
			// Assuming JSON
			// contentTypeHeader = 'application/json; charset=utf-8';
			contentTypeHeader = 'application/json';
			reqConfig.body = JSON.stringify(body); // (!) Try first
		} else {
			reqConfig.body = body; // (!) Essentially giving up here
			contentTypeHeader = null;
		}
	} else contentTypeHeader = null;
	// [ headers ]
	const interHeaders = contentTypeHeader ? { 'Content-Type': contentTypeHeader } : null;
	reqConfig.headers = { ...HEADERS, ...interHeaders, ...headers };
}

function queryParamsToStr(params) {
	if(params == null || typeof params !== 'object') return null;
	// const query = Object.keys(params).map(k => encodeURIComponent(k)+'='+encodeURIComponent(JSON.stringify(params[k])) ).join('&');
	// (i) Look into URLSearchParams
	const keys = Object.keys(params);
	// if(keys.length) path += '?' + keys.map(k =>
	//	 k + '=' + ( typeof params[k] === 'object' ? JSON.stringify(params[k]) : String(params[k]) )
	// ).join('&');
	if(keys.length) {
		return `?${keys.map(key => {
			const _val = params[key];
			const val = Array.isArray(_val) ? _val : typeof _val === 'object' ? JSON.stringify(_val) : _val;
			return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
		}).join('&')}`;
	}

	return null;
}
