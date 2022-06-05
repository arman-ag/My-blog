import React from 'react';
import Layout from '.';
import GroupButtons from '../GroupButton';
import { layoutProps } from './types';

const ReWrapper = ({ children }: layoutProps) => {
  return (
    <Layout>
      <section>
        <div className="flex items-center pr-12" style={{ minHeight: '70vh' }}>
          {children}
        </div>
        <GroupButtons />
      </section>
    </Layout>
  );
};

export default ReWrapper;
