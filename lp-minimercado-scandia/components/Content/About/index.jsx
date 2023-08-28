import * as Styled from './styles';

import Image from 'next/image';
import logo_sbg_blue from '@/public/logo/logo_sbg_blue.webp';

export const About = () => {
    return (
        <Styled.Container>
            <h1>Bem-vindo(a) ao Minimercado Scandia!</h1>
            <section>
                <p>
                    Nossa missão é oferecer a melhor qualidade de produtos e padarias para a comunidade do Jd. Scandia.
                    <br />
                    Desde 2020, trilhamos um caminho de crescimento e inovação, sempre superando expectativas e proporcionando uma experiência única e agradável.
                    <br />
                    Excelência é nossa marca registrada, trabalhamos com fornecedores selecionados para garantir sabor e qualidade incomparáveis.
                    <br />
                    A satisfação dos clientes é nossa maior motivação. Venha conhecer um universo de sabores e aromas, tornamos suas compras momentos de prazer e praticidade.
                    <br />
                    Junte-se a nós no Minimercado Scandia, onde cada cliente é tratado com muito carinho e dedicação.
                </p>
            </section>
        </Styled.Container>
    )
};
