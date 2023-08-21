import * as Styled from './styles';

import { About } from './About';
import { Suppliers } from './Suppliers';
import { Products } from './Products';

export const Content = () => {
    return (
        <Styled.Container>
            <About />
            <Suppliers />
            <Products />
        </Styled.Container>
    )
};
