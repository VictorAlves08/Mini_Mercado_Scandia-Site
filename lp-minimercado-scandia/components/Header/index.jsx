import * as Styled from './styles';

import { InstagramIcon, MapsIcon, WhatsAppIcon } from '@/icons';

import Image from 'next/image';
import Link from 'next/link'

import { Flags } from './Flags';

import logo_sbg_blue from '@/public/logo/logo_sbg_blue.webp';

export const Header = () => {
    return (
        <>
            <Styled.Container>
                <Image
                    src={logo_sbg_blue}
                    alt='Logo do Minimercado Scandia'
                    width={200}
                    height={150}
                />
                <Styled.Section>
                    <div className='icons-container'>
                        <Link
                            target="_blank"
                            href="https://api.whatsapp.com/send?l=pt_BR&phone=5511980533265%20&text=Olá, Minimercado Scandia! Vim do site e gostaria de mais informações."
                            aria-label="Entre em contato pelo WhatsApp"
                        >
                            <WhatsAppIcon
                                className='icon'
                                width='2em'
                                height='2em'
                                color="white"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.instagram.com/minimercadoscandia/"
                            aria-label="Entre em contato pelo Instagram"
                        >
                            <InstagramIcon
                                className='icon'
                                width='2em'
                                height='2em'
                                color="white"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://goo.gl/maps/JSBq2cs2ZNbc9cTP7"
                            aria-label="Localização do Minimercado"
                        >
                            <MapsIcon
                                className='icon'
                                width='2em'
                                height='2em'
                                color="white"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
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
