import { useCallback } from 'react';
import { debounce } from 'throttle-debounce';

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const decimalFormatter = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});

export function isObjectEmpty(object) {
	return Object.keys(object).length === 0;
}

export function isStringNumber(string) {
	return !isNaN(string) && !isNaN(parseFloat(string));
}

export function formatCurrency(number) {
	return currencyFormatter.format(number);
}

export function formatDecimalPlaces(number) {
	return decimalFormatter.format(number);
}

export function copyToClipboard(string) {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(string);
	} else {
		const element = document.createElement('clipboard');
		const focus = document.activeElement;
		element.value = string;
		document.body.appendChild(element);
		element.select();
		document.execCommand('copy');
		document.body.removeChild(element);
		focus.focus();
	}
}

export function populateFormWithParams(setFormValues, searchParams) {
	setFormValues((prevState) => ({
		...prevState,
		...Object.fromEntries(
			Object.keys(prevState)
				.map((key) => {
					const searchParam = searchParams.get(key);
					return searchParam ? [key, searchParam] : undefined;
				})
				.filter((element) => element)
		),
	}));
}

export function useDebounce(fn, delay = 400) {
	return useCallback(debounce(delay, fn), []);
}

export function intersperseArray(array, separator) {
	return array.flatMap((element) => [separator, element]).slice(1);
}

export function useFormChangeHandler(setFormValues) {
	return useCallback((e) => {
		setFormValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}, []);
}

export function mergeSearchParams(initialState, searchParams) {
	return Object.fromEntries(
		Object.entries(initialState)
			.map(([key, value]) => [key, searchParams.get(key) || value])
			.filter((element) => element)
	);
}

export function useValueCalculationHandler(setCalculatedValues, calculateValues) {
	return useDebounce((...args) => setCalculatedValues(calculateValues(...args)));
}
