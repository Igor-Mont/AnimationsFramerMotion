import React, { useEffect, useRef, useState } from 'react';
import { Container, Section, Sticky } from './styles';
import FirstAndSecond from '../../components/FirstAndSecond';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Container>
    </>
  );
}

export default Home;
