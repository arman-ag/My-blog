import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../Button';

const GroupButtons = () => {
  return (
    <div className="flex justify-center mx-4 flex-wrap ">
      <Button solid styles="mx-2 mt-2" href="/resume/skills">
        <Trans>technologies.skills</Trans>
      </Button>
      <Button solid styles="mx-2  mt-2" href="/resume/jobs">
        <Trans>resume.jobs</Trans>
      </Button>
      <Button solid styles="mx-2  mt-2" href="/resume/education">
        <Trans>resume.education</Trans>
      </Button>
    </div>
  );
};

export default GroupButtons;
