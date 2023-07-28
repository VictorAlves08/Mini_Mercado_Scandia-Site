import * as Styled from './styles';
import Image from 'next/image';

import alelo_logo from '@/public/bandeiras/alelo-logo.webp';
import amex_logo from '@/public/bandeiras/amex-logo.svg';
import caixa_tem_logo from '@/public/bandeiras/caixa-tem-logo.webp';
import card_logo from '@/public/bandeiras/card-logo.webp';
import elo_logo from '@/public/bandeiras/elo-logo.webp';
import hipercard_logo from '@/public/bandeiras/hipercard-logo.webp';
import mastercard_logo from '@/public/bandeiras/mastercard-logo.webp';
import pix_logo from '@/public/bandeiras/pix-logo.webp';
import safrapay_logo from '@/public/bandeiras/safrapay-logo.svg';
import sodexo_logo from '@/public/bandeiras/sodexo-logo.webp';
import ticket_logo from '@/public/bandeiras/ticket-logo.webp';
import verocard_logo from '@/public/bandeiras/verocard-logo.webp';
import visa_logo from '@/public/bandeiras/VISA-logo.webp';
import vr_logo from '@/public/bandeiras/vr-logo.webp';

export const Flags = () => {
    return (
        <Styled.Container>
            <Image
                src={alelo_logo}
                alt='Logo bandeira de cartão de crédito Alelo'
                width={50}
                height={50}
            />
            <Image
                src={amex_logo}
                alt='Logo bandeira de cartão de crédito American Express'
                width={50}
                height={50}
            />
            <Image
                src={caixa_tem_logo}
                alt='Logo bandeira de cartão de crédito Caixa Tem'
                width={50}
                height={50}
            />
            <Image
                src={card_logo}
                alt='Logo bandeira de cartão de crédito Card'
                width={50}
                height={20}
            />
            <Image
                src={elo_logo}
                alt='Logo bandeira de cartão de crédito Elo'
                width={50}
                height={25}
            />
            <Image
                src={hipercard_logo}
                alt='Logo bandeira de cartão de crédito Hipercard'
                width={50}
                height={25}
            />
            <Image
                src={mastercard_logo}
                alt='Logo bandeira de cartão de crédito Mastercard'
                width={50}
                height={30}
            />
            <Image
                src={pix_logo}
                alt='Logo Pix'
                width={50}
                height={40}
            />
            <Image
                src={safrapay_logo}
                alt='Logo bandeira de cartão de crédito Safrapay'
                width={50}
                height={50}
            />
            <Image
                src={sodexo_logo}
                alt='Logo bandeira de cartão de crédito Sodexo'
                width={50}
                height={25}
            />
            <Image
                src={ticket_logo}
                alt='Logo bandeira de cartão de crédito Ticket'
                width={50}
                height={40}
            />
            <Image
                src={verocard_logo}
                alt='Logo bandeira de cartão de crédito Verocard'
                width={50}
                height={45}
            />
            <Image
                src={visa_logo}
                alt='Logo bandeira de cartão de crédito Visa'
                width={50}
                height={20}
            />
            <Image
                src={vr_logo}
                alt='Logo bandeira de cartão de crédito VR'
                width={50}
                height={20}
            />
        </Styled.Container>
    )
};
