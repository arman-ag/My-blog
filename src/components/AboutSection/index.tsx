import React from 'react';
import { Trans } from 'react-i18next';
const AboutSections = () => {
  return (
    <div>
      AboutSections
      <div className=" flex items-center flex-col 	md:flex-row	 ">
        <p className="max-w-xl	">
          <Trans>about.description</Trans>
        </p>
      </div>
    </div>
  );
};

export default AboutSections;
