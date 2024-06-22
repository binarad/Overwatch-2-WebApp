import { CSSProperties } from "react";
import Select from 'react-select'
import { SelectOptions, GroupedOptions, groupedOptions } from "./heroSelectData";



const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}
const groupBadgeStyles: CSSProperties = {
	backgroundColor: '#73C2FB',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center',
}

const FormatGroupLabel = (data: GroupedOptions) => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
)
type Props = {
	value: SelectOptions | undefined
	setValue: (value: SelectOptions | undefined) => void
}

function HeroSelect(props: Props) {
	const {value, setValue} = props
    return (

		<Select<SelectOptions, false, GroupedOptions>
		options={groupedOptions}
		value={value}
		placeholder="Select hero..."
		formatGroupLabel={FormatGroupLabel}
		onChange={(e) => setValue(e || undefined)}
		className="w-[250px] mt-auto mb-auto"
		/>	)
}

export default HeroSelect;