import React from 'react';

type Props = {
  name: string;
  imageUrl?: string;
};

function Avatar({ name, imageUrl }: Props) {
  return (
    <>
      {name} {imageUrl}
    </>
  );
}

export default Avatar;
