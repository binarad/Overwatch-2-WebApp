export interface SelectOptions {
    value: string;
    label: string;
}


export const tankOptions: readonly SelectOptions[] = [
    {value: 'D.Va', label: 'D.Va'},
    {value: 'Doomfist', label: 'Doomfist'},
    {value: 'Junker Queen', label: 'Junker Queen'},
    {value: 'Mauga', label: 'Mauga'},
    {value: 'Orisa', label: 'Orisa'},
    {value: 'Ramattra', label: 'Ramattra'},
    {value: 'Reinhardt', label: 'Reinhardt'},
    {value: 'Roadhog', label: 'Roadhog'},
    {value: 'Sigma', label: 'Sigma'},
    {value: 'Winston', label: 'Winston'},
    {value: 'Wrecking Ball', label: 'Wrecking Ball'},
    {value: 'Zarya', label: 'Zarya'}
]

export const damageOptions: readonly SelectOptions[] = [
	{ value: 'Ashe', label: 'Ashe' },
	{ value: 'Bastion', label: 'Bastion' },
	{ value: 'Cassidy', label: 'Cassidy' },
	{ value: 'Echo', label: 'Echo' },
	{ value: 'Genji', label: 'Genji' },
	{ value: 'Hanzo', label: 'Hanzo' },
	{ value: 'Junkrat', label: 'Junkrat' },
	{ value: 'Mei', label: 'Mei' },
	{ value: 'Pharah', label: 'Pharah' },
	{ value: 'Reaper', label: 'Reaper' },
	{ value: 'Sojourn', label: 'Sojourn' },
	{ value: 'Soldier: 76', label: 'Soldier: 76' },
	{ value: 'Sombra', label: 'Sombra' },
	{ value: 'Symmetra', label: 'Symmetra' },
	{ value: 'Torbjörn', label: 'Torbjörn' },
	{ value: 'Tracer', label: 'Tracer' },
	{ value: 'Venture', label: 'Venture' },
	{ value: 'Widowmaker', label: 'Widowmaker' },
]

export const supportOptions: readonly SelectOptions[] = [
	{ value: 'Ana', label: 'Ana' },
	{ value: 'Baptiste', label: 'Baptiste' },
	{ value: 'Brigitte', label: 'Brigitte' },
	{ value: 'Illari', label: 'Illari' },
	{ value: 'Kiriko', label: 'Kiriko' },
	{ value: 'Lifeweaver', label: 'Lifeweaver' },
	{ value: 'Lúcio', label: 'Lúcio' },
	{ value: 'Mercy', label: 'Mercy' },
	{ value: 'Moira', label: 'Moira' },
	{ value: 'Zenyatta', label: 'Zenyatta' },
]

export interface GroupedOptions {
    readonly label: string;
    readonly options: readonly SelectOptions[];
}

export const groupedOptions: readonly GroupedOptions[] = [
    {
        label: 'Tank',
        options: tankOptions
    },
    {
        label: 'Damage',
        options: damageOptions
    },
    {
        label: 'Support',
        options: supportOptions
    },
];