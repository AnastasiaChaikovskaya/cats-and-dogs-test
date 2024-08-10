import React, { FC } from 'react'

interface IBreedPage {
  params: {
    breed: string;
  };
}

const BreedPage = ({ params }: IBreedPage ) => {
  return (
    <div>BreedPage {params.breed}</div>
  )
}

export default BreedPage;