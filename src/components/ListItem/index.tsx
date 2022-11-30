
import { Container } from './styles';
import {Item} from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item
}

/** 
 * Esta função pega um objeto com uma propriedade name e retorna um div estilizado com a propriedade name
 * como seu filho.
 * @param {Props} - Props - este é o tipo de props que o componente receberá.
 * @returns Um componente React
 **/

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <Container done={isChecked}>
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
             />
            <label>{item.name}</label>
        </Container>
    )
}