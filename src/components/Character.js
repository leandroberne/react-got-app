import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Character = ({ data }) => (
  <Card className='CharCard'>
    <Image src={data.imageUrl} wrapped ui={false} alt='Imagen de personaje' />
    <Card.Content>
      <Card.Header>{data.fullName}</Card.Header>
      <Card.Description>"{data.title}"</Card.Description>
    </Card.Content>
  </Card>
);

export default Character;
