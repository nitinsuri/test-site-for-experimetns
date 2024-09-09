import React from 'react';
import './styles.scss';

const DynamicGrid = () => {
  const sectionSequence = [
    'sectionOne',
    'sectionTwo',
    'sectionThree',
    'sectionFour',
  ];
  const sectionData = [
    {
      sectionBg: '#d6ccc2',
      sectionId: 'sectionOne',
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
      sectionBg: '#f5ebe0',
      sectionId: 'sectionTwo',
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
      sectionBg: '#e3d5ca',
      sectionId: 'sectionThree',
      sectionTitle: 'Section Three',
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
    {
      sectionBg: '#d5bdaf',
      sectionId: 'sectionFour',
      sectionTitle: 'Section Four',
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
  const getSequencedData = sectionSequence.map((sectionseq) =>
    sectionData.filter((section) => section.sectionId === sectionseq)
  );
  return (
    <ul id="dynamicGrid">
      {getSequencedData?.map((section) => {
        return section.map((item) => {
          return (
            <li style={{ backgroundColor: item.sectionBg }}>
              {item.sectionTitle ? (
                <h2 key={Math.random()}>{item.sectionTitle}</h2>
              ) : null}
              <ul>
                {item.sectionLinks.map((test) => {
                  return (
                    <li key={Math.random()}>
                      <a href={test.link}>{test.title}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        });
      })}
    </ul>
  );
};

export default DynamicGrid;
