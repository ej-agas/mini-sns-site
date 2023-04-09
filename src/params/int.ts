import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (parameter): boolean => {
	return Number.isInteger(+parameter) && +parameter > 0;
};
