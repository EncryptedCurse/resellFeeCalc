// https://taxfoundation.org/2021-sales-taxes/
const salesTaxConstants = {
	AL: { state: 4.0, local: 5.22 },
	AK: { state: 0.0, local: 1.76 },
	AZ: { state: 5.6, local: 2.8 },
	AR: { state: 6.5, local: 3.01 },
	CA: { state: 7.25, local: 1.43 },
	CO: { state: 2.9, local: 4.82 },
	CT: { state: 6.35, local: 0.0 },
	DE: { state: 0.0, local: 0.0 },
	DC: { state: 6.0, local: 0.0 },
	FL: { state: 6.0, local: 1.08 },
	GA: { state: 4.0, local: 3.32 },
	HI: { state: 4.0, local: 0.44 },
	ID: { state: 6.0, local: 0.03 },
	IL: { state: 6.25, local: 2.57 },
	IN: { state: 7.0, local: 0.0 },
	IA: { state: 6.0, local: 0.94 },
	KS: { state: 6.5, local: 2.19 },
	KY: { state: 6.0, local: 0.0 },
	LA: { state: 4.45, local: 5.07 },
	ME: { state: 5.5, local: 0.0 },
	MD: { state: 6.0, local: 0.0 },
	MA: { state: 6.25, local: 0.0 },
	MI: { state: 6.0, local: 0.0 },
	MN: { state: 6.88, local: 0.59 },
	MS: { state: 7.0, local: 0.07 },
	MO: { state: 4.23, local: 4.03 },
	MT: { state: 0.0, local: 0.0 },
	NE: { state: 5.5, local: 1.44 },
	NV: { state: 6.85, local: 1.38 },
	NH: { state: 0.0, local: 0.0 },
	NJ: { state: 6.63, local: -0.03 },
	NM: { state: 5.13, local: 2.71 },
	NY: { state: 4.0, local: 4.52 },
	NC: { state: 4.75, local: 2.23 },
	ND: { state: 5.0, local: 1.96 },
	OH: { state: 5.75, local: 1.48 },
	OK: { state: 4.5, local: 4.45 },
	OR: { state: 0.0, local: 0.0 },
	PA: { state: 6.0, local: 0.34 },
	RI: { state: 7.0, local: 0.0 },
	SC: { state: 6.0, local: 1.46 },
	SD: { state: 4.5, local: 1.9 },
	TN: { state: 7.0, local: 2.55 },
	TX: { state: 6.25, local: 1.94 },
	UT: { state: 6.1, local: 1.09 },
	VT: { state: 6.0, local: 0.24 },
	VA: { state: 5.3, local: 0.43 },
	WA: { state: 6.5, local: 2.73 },
	WV: { state: 6.0, local: 0.5 },
	WI: { state: 5.0, local: 0.43 },
	WY: { state: 4.0, local: 1.33 },
	average: { state: 5.11, local: 1.46 },
};

export default salesTaxConstants;
