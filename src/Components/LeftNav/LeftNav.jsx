import React, { useContext } from 'react';
import { LeftNavStatusContext } from '../../Contexts/LeftNavContext/LeftNavContext';
import './styles.scss';

export default function LeftNav() {
  const [active, setActive] = useContext(LeftNavStatusContext);
  const leftNavData = [
    {
      sectionTitle: 'Section One',
      sectionLinks: [
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
      ],
    },
    {
      sectionTitle: 'Section Two',
      sectionLinks: [
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
      ],
    },
    {
      sectionLinks: [
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
      ],
    },
  ];
  return (
    <nav className={active ? 'active' : 'inactive'}>
      <button onClick={() => setActive((active) => !active)}>
        {active ? '\u2A2F' : '\u2630'}
      </button>
      {leftNavData.map((leftNavSection) => {
        return (
          <>
            {leftNavSection.sectionTitle ? (
              <h2 key={Math.random()}>{leftNavSection.sectionTitle}</h2>
            ) : null}
            <ul>
              {leftNavSection.sectionLinks.map((item) => {
                return (
                  <li key={Math.random()}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </nav>
  );
}
