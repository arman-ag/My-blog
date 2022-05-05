import React from 'react';
import { Trans } from 'react-i18next';

const Technologies = () => {
  return (
    <div>
      <h1 className="text-center text-2xl  my-10">
        <Trans>technologies.skills</Trans>
      </h1>
      <div className="flex justify-center flex-wrap">
        {[...Array(20)].map(() => (
          <div className="flex flex-col m-5 justify-center text-center ">
            <img src={'/images/html.png'} className="w-20 h-20" />

            <span>Html</span>
            <span className="text-green">Expert</span>
            <span>
              15 <Trans>technologies.years</Trans>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
