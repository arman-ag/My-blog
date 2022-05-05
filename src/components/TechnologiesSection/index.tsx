import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';

const Technologies = () => {
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
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1 className="text-center text-2xl  my-10">
        <Trans>technologies.skills</Trans>
      </h1>
      <div className="flex justify-center flex-wrap">
        {skills.map((item, key: number) => (
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
