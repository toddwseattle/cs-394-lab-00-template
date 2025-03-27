import './BioCard.css';

import React from 'react';

interface BioCardProps {
  name: string;
  link: string;
  description: string;
  imageUrl: string; // URL to a professional photo
}

export function BioCard({ name, link, description, imageUrl }: BioCardProps) {
  return (
    <div className="bio-card">
      <img src={imageUrl} alt={`${name}'`} />
      <a href={link} className="link" target="_blank" rel="noopener noreferrer">
        {`${name}'s Profile`}
      </a>
      <div className="description">{description}</div>
    </div>
  );
}
