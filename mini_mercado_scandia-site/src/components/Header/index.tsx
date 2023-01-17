import Image from 'next/image'
import Link from 'next/link';

import { Container } from "./styles";

import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

import Logo from '../../assets/logos/logo_sembg.png';

import credit_cards from '../../mocks/credit_cards';

interface CreditCardInterface {
  id: number;
  alt: string;
  src: any;
  width: number;
  height: number;
  title: string;
};

export default function Header() {
  return (
    <Container>
      <Image src={Logo} alt='Logo do Mini-Mercado Scandia' width={215} height={215} />

      <div className="icons-details">
        <Link rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/minimercadoscandia/">
          <BsInstagram title='Siga-nos no Instagram! @minimercadoscandia' size='24' />
        </Link>

        <Link rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?l=pt_BR&phone=5511980533265%20&text=Olá! Vim do Site e gostaria de mais informações sobre o Mini Mercado Scandia.">
          <BsWhatsapp title='Faça seu pedido pelo WhatsApp!' size='24' />
        </Link>

        <Link rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/t3iQnkNbYP5vHQSE6">
          <FiMapPin title='Visite nossa loja!' size='24' />
        </Link>
      </div>

      <strong>
        Seg a Sáb das 07h00 às 20h
        <br />
        Dom e Feriado das 07h00 às 13h
        <br />
        R. Antônio Marcos Tôrres, 45 - Jardim Scandia, Taboão da Serra - SP
      </strong>

      <div className="logos-creditCards">
        {credit_cards.map((card: CreditCardInterface) => {
          return (
            <Image
              key={card.id}
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              title={card.title}
            />
          )
        }
        )}
      </div>
    </Container>
  );
};
