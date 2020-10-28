const get = (obj, path, defaultValue) => {
	return String(path).split('.').reduce((acc, v) => {
		try {
			acc = acc[v] === undefined ? defaultValue : acc[v];
		} catch (e) {
			return defaultValue;
		}
		return acc;
	}, obj);
};

const set = (obj, path, value) => {
	const pList = path.split('.');
	const len = pList.length;

	for (let i = 0; i < len - 1; i++) {
		const elem = pList[i];
		if (!obj[elem]) {
			obj[elem] = {};
		}
		obj = obj[elem];
	}

	// set value to second last key
	obj[pList[len - 1]] = value;
};

const cache = (() => {
	const isCacheEnabled = process.env.NODE_ENV === 'development';
	const cacheStrings = {};

	if (isCacheEnabled) {
		window.getLang = () => {
			return JSON.stringify(cacheStrings, null, 2);
		};
	}

	return (key, value) => {
		if (!isCacheEnabled) return;
		set(cacheStrings, key, value);
	};
})();

export const arrToObj = (arr, callback) => {
	let res = {};
	arr.forEach(item => {
		const normalizedItem = callback(item);
		res = {...res, ...normalizedItem};
	});
	return res;
};

export const formatString = (str, obj) => {
	let resStr = str;
	Object.keys(obj).forEach(key => {
		resStr = resStr.replace(`@${key}`, obj[key]);
	});
	return resStr;
};

export const translate = ({key, defaultValue}, state = {}) => {
	return get(state, key, defaultValue || key);
};

export const useStrings = (baseKey, strings) => {
	const result = {};
	Object.keys(strings).forEach(stringKey => {
		const key = baseKey ? `${baseKey}.${stringKey}` : stringKey;
		const defaultValue = strings[stringKey];
		cache(key, defaultValue);
		result[stringKey] = {
			key,
			defaultValue
		}
	});
	return result;
};