import React from 'react';
import ParticleField from 'react-particles-webgl';
import { particleConfig } from './particle-config';

const ParticleVisualization = ( { ecoli }: { ecoli: number }) => {

  const minParticleSize = ecoli < 35 ? 8 : 10;
  const maxParticleSize = ecoli < 35 ? 10 : 30;

  const beachConfig = {
    ...particleConfig,
    particles: {
      ...particleConfig.particles,
      count: ecoli,
      minSize: minParticleSize,
      maxSize: maxParticleSize,
    },
  };


  return (
    <ParticleField config={beachConfig} />
  );
};

export const ParticlesAnimation = React.memo(ParticleVisualization);
