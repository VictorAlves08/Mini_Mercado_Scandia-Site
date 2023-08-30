"use client";
import * as React from "react";
import Image from 'next/image';
import * as Styled from './styles';

import izy_planfeto from '@/public/produtos/izy_planfeto.webp';
import gondola_1 from '@/public/produtos/1_gondola.webp';
import gondola_2 from '@/public/produtos/2_gondola.webp';
import gondola_3 from '@/public/produtos/3_gondola.webp';
import gondola_4 from '@/public/produtos/4_gondola.webp';
import gondola_5 from '@/public/produtos/5_gondola.webp';
import gondola_6 from '@/public/produtos/6_gondola.webp';
import gondola_7 from '@/public/produtos/7_gondola.webp';
import gondola_8 from '@/public/produtos/8_gondola.webp';
import gondola_9 from '@/public/produtos/9_gondola.webp';
import gondola_10 from '@/public/produtos/10_gondola.webp';
import gondola_11 from '@/public/produtos/11_gondola.webp';

export const Products = () => {
  return (
    <Styled.Container>
      <h1>Nossos Produtos</h1>

      <section>
        <Image
          src={gondola_1}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={izy_planfeto}
          alt='Planfeto Izy Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_2}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_3}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_4}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_5}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
      </section>

      <section>
        <Image
          src={gondola_6}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_7}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_8}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_9}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_10}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
        <Image
          src={gondola_11}
          alt='Gôndola de Produtos'
          width={300}
          height={150}
        />
      </section>

    </Styled.Container>
  );
}