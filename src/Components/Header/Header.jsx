import React, { useContext } from 'react';
import './styles.scss';

export default function Header() {
  const menuLinks = [
    {
      title: 'Link A',
      link: '#',
    },
    {
      title: 'Link B',
      link: '#',
    },
    {
      title: 'Link C',
      link: '#',
    },
  ];

  return (
    <>
      <header>
        <ul>
          {menuLinks.map((item, idx) => (
            <li key={idx}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
