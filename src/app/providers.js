'use client';

import { Content, Theme } from '@carbon/react';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

/*
This follows the provider pattern (https://www.patterns.dev/vanilla/provider-pattern/),
i.e. rather than defining specific components and pass them to each endpoint, define a
Providers function, which emits the Header and components as children.
*/

export function Providers({ children }) {
  return(
    <div>
      <Theme theme='g100'>
        <DashboardHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}