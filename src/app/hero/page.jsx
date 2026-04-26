import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
  return (
    <div>
      <h2>Hero Page</h2>
      <Button variant="solid">Get Started</Button>
      <Button variant="secondary">Get Started</Button>
      <Button variant="danger-soft">Get Started</Button>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default HeroPage;