import * as Styled from './styles';
import Link from 'next/link'

export const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    return (
        <Styled.Container>
            <h1>Como Chegar</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.1606947603955!2d-46.8036287!3d-23.634415499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce550a30d54cf5%3A0x389e5b58ecad43d5!2sMini%20Mercado%20Scandia!5e0!3m2!1spt-BR!2sbr!4v1693244476488!5m2!1spt-BR!2sbr"
                style={{ border: 0, width: '95%', height: '75%' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            />
            <text>
                Minimercado Scandia © {currentYear} - Todos os direitos reservados.
                <br />
                Desenvolvido por:&nbsp;
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/victor-alves-de-oliveira/"
                >
                    Victor A. de Oliveira
                </Link>
            </text>
        </Styled.Container>
    )
};
