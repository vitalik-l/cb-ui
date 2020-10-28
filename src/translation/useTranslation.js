import React from 'react';
import { translate, state } from "./translation";

export const useTranslation = (strings) => {
	return React.useMemo(() => {
		const result = {};
		Object.keys(strings).forEach(stringKey => result[stringKey] = translate(strings[stringKey]));
		return result;
	}, [state]);
};