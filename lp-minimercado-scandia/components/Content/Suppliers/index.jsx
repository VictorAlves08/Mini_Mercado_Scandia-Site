import Image from 'next/image';
import * as Styled from './styles';

import adria_logo from '@/public/fornecedores/adria-logo.webp';
import arcor_logo from '@/public/fornecedores/arcor_logo.webp';
import coca_cola_logo from '@/public/fornecedores/coca-cola-logo.webp';
import elma_chips_logo from '@/public/fornecedores/Elma_Chips-logo.webp';
import italac_logo from '@/public/fornecedores/italac-logo.svg';
import lacfrut_logo from '@/public/fornecedores/lacfrut-logo.webp';
import logo_cafe_3coracoes from '@/public/fornecedores/logo-cafe-3-coracoes.webp';
import logo_comercial_souza from '@/public/fornecedores/logo-comercial-souza.webp';
import logo_friboi from '@/public/fornecedores/logo-friboi.webp';
import logo_perdigao from '@/public/fornecedores/logo-perdigao.webp';
import martins_logo from '@/public/fornecedores/martins-logo.webp';
import merce_logo from '@/public/fornecedores/merce-logo.webp';
import mondelez_logo from '@/public/fornecedores/mondelez_Logo.webp';
import panco_logo from '@/public/fornecedores/panco-logo.webp';
import pullman_logo from '@/public/fornecedores/pullman-logo.webp';
import sadia_logo from '@/public/fornecedores/sadia-logo.webp';
import seara_logo from '@/public/fornecedores/seara-logo.webp';
import izy_logo from '@/public/fornecedores/izy_logo.svg';

export const Suppliers = () => {
    return (
        <Styled.Container>
            <h1>Principais Fornecedores</h1>
            <section>
                <Image
                    src={adria_logo}
                    alt='Logo Adria'
                    width={85}
                    height={70}
                />
                <Image
                    src={arcor_logo}
                    alt='Logo Arcor'
                    width={85}
                    height={70}
                />
                <Image
                    src={coca_cola_logo}
                    alt='Logo Coca-Cola'
                    width={85}
                    height={70}
                />
                <Image
                    src={elma_chips_logo}
                    alt='Logo Elma Chips'
                    width={85}
                    height={70}
                />
                <Image
                    src={italac_logo}
                    alt='Logo Italac'
                    width={85}
                    height={70}
                />
                <Image
                    src={lacfrut_logo}
                    alt='Logo Lacfrut'
                    width={85}
                    height={70}
                />
                <Image
                    src={logo_cafe_3coracoes}
                    alt='Logo Café 3 Corações'
                    width={85}
                    height={70}
                />
                <Image
                    src={logo_comercial_souza}
                    alt='Logo Comercial Souza'
                    width={85}
                    height={45}
                />
                <Image
                    src={logo_friboi}
                    alt='Logo Fribobi'
                    width={85}
                    height={70}
                />
                <Image
                    src={logo_perdigao}
                    alt='Logo Perdigão'
                    width={85}
                    height={70}
                />
                <Image
                    src={martins_logo}
                    alt='Logo Martins'
                    width={85}
                    height={70}
                />
                <Image
                    src={merce_logo}
                    alt='Logo Mercê do Bairro'
                    width={85}
                    height={70}
                />
                <Image
                    src={mondelez_logo}
                    alt='Logo Mondelez Internacional'
                    width={85}
                    height={45}
                />
                <Image
                    src={panco_logo}
                    alt='Logo Panco'
                    width={85}
                    height={70}
                />
                <Image
                    src={pullman_logo}
                    alt='Logo Pullman'
                    width={85}
                    height={70}
                />
                <Image
                    src={sadia_logo}
                    alt='Logo Sadia'
                    width={85}
                    height={70}
                />
                <Image
                    src={seara_logo}
                    alt='Logo Seara'
                    width={85}
                    height={70}
                />
                <Image
                    src={izy_logo}
                    alt='Logo Izy | H&H Indústria e Comércio de Produtos de Saneantes Ltda'
                    width={85}
                    height={70}
                />
            </section>
        </Styled.Container>
    )
};
