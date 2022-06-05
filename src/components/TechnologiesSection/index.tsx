import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { propsType, skillType } from './types';

const Technologies = ({ slice = false }: propsType) => {
  const [data, setData] = useState([]);
  const {
    site: {
      siteMetadata: { skills }
    }
  } = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          skills {
            name
            experience
            url
            years
          }
        }
      }
    }
  `);
  useEffect(() => {
    slice ? setData(skills.slice(0, 8)) : setData(skills);
  }, [slice]);

  console.log(skills);
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {data?.map((item: skillType, key: number) => (
          <div className="flex flex-col m-5 justify-center text-center " key={key}>
            <img src={item.url} className="w-20 h-20" />
            <span>{item.name}</span>
            <span className="text-green">
              <Trans>{item.experience}</Trans>
            </span>
            <span>
              {item.years} <Trans>technologies.years</Trans>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
