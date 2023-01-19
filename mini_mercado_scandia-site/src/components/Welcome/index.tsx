import React from 'react';
import Image from 'next/image'

import { Container, Title, Text, ContainerImage } from './styles'

import Logo from '../../assets/logos/logo-sembg.webp';

const Welcome = () => (
  <Container>
    <div>
      <Title>Seja bem-vindo ao Mini Mercado Scandia.</Title>
      <Text>
        Desde 2020, o Mini Mercado Scandia tem sido a escolha certa para quem busca qualidade e frescor nos produtos.
        Localizado no Jardim Scandia, em Taboão da Serra oferecemos um ambiente acolhedor e uma variedade de produtos
        frescos e de qualidade para atender às necessidades de nossos clientes. Nós nos orgulhamos de oferecer uma
        excelência no atendimento e em nossos produtos, sempre em busca de inovação e crescimento. Nossa prioridade é
        garantir que cada visita ao nosso minimercado seja uma experiência agradável e satisfatória para nossos clientes,
        sempre buscando superar as suas expectativas. Seja para uma refeição rápida ou para fazer suas compras semanais,
        o Mini Mercado Scandia é a sua escolha certa.
      </Text>
    </div>
    <ContainerImage>
      <Image src={Logo} alt='Logo do Mini Mercado Scandia' height={300} />
    </ContainerImage>
  </Container >
)

export default Welcome;

