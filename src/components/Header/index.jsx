import React from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Header() {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%']);

  return (
    <Container style={{ y: headerY }}>
      <Link to="/more">More</Link>
    </Container>
  );
}

export default Header;
