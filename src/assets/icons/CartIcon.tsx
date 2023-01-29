import React from 'react';
import { FixMeLater } from 'src/utils';

export default function CartIcon({
  size = 18, // or any default size of your choice
  color = 'white', // or any color of your choice
}: FixMeLater) {
  return (
    <svg
      viewBox="0 0 26.6 25.6"
      width={size} // added size here
      height={size} // added size here
      fill={color} // added color here
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path d="M3,3H5V17a1,1,0,0,0,1,1H18a1,1,0,0,0,.958-.713l3-10A1,1,0,0,0,21,6H7V2A1,1,0,0,0,6,1H3A1,1,0,0,0,3,3ZM7,8H19.656l-2.4,8H7ZM6.5,19A1.5,1.5,0,1,1,5,20.5,1.5,1.5,0,0,1,6.5,19Zm10,0A1.5,1.5,0,1,1,15,20.5,1.5,1.5,0,0,1,16.5,19Z" />
      </g>
    </svg>
  );
}
