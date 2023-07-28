import * as Styled from './styles';

import { InstagramIcon, MapsIcon, WhatsAppIcon } from '@/icons';
import Image from 'next/image';
import { Flags } from './Flags';

import logo_sbg_blue from '@/public/logo/logo_sbg_blue.webp';

export const Header = () => {
    return (
        <>
            <Styled.Container>
                <Image
                    src={logo_sbg_blue}
                    alt='Logo do Minimercado Scandia'
                    width={150}
                    height={150}
                />
                <Styled.Section>
                    <div className='icons-container'>
                        <WhatsAppIcon
                            className='icon'
                            width='2em'
                            height='2em'
                            color="white"
                            style={{ cursor: 'pointer' }}
                        />
                        <InstagramIcon
                            className='icon'
                            width='2em'
                            height='2em'
                            color="white"
                            style={{ cursor: 'pointer' }}
                        />
                        <MapsIcon
                            className='icon'
                            width='2em'
                            height='2em'
                            color="white"
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className='info-container'>
                        <p>Seg a Sáb das 07:00 às 20:00</p>
                        <p>Dom e Feriado das 07:00 às 13:00</p>
                        <p>Rua Antônio Marcos Tôrres, 45 - Jardim Scandia, Taboão da Serra - SP</p>
                    </div>
                </Styled.Section>
            </Styled.Container>
            <Flags />
        </>
    )
};
