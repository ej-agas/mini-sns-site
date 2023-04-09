import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (parameter): boolean => {
	return parameter.split('/').length > 1;
};
