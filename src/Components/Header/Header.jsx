import React, { useContext } from 'react';
import './styles.scss';

export default function Header() {
  const menuLinks = [
    {
      title: 'Link A',
      link: 'https://www.test.com',
    },
    {
      title: 'Link B',
      link: 'https://www.test.com',
    },
    {
      title: 'Link C',
      link: 'https://www.test.com',
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
