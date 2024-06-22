import Select from 'react-select'

interface RoleOptions {
    value: string;
    label: string;
}

const roleOptions: RoleOptions[] = [
    {value: 'Tank', label: 'Tank'},
    {value: 'Damage', label: 'Damage'},
    {value: 'Support', label: 'Support'}
]

export default function RoleSelect() {
    return(
        <Select 
        options={roleOptions}
        placeholder="Select role..."
        className='w-[200px] mx-[5px] h-[35px] '
        />
    )
}