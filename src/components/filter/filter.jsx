import {Label, Input} from './styled'

export const Filter = ({onFindContact}) => {
    return (
        <Label>
            Fint contacts by name
            <Input
                type="text"
                onChange={onFindContact}
            >
            </Input>
        </Label>)
}