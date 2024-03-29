'use client'
/*
'use client' is needed for rendering by Next.js see:
https://nextjs.org/docs/app/building-your-application/rendering/client-components
It is a React statement: https://react.dev/reference/react/use-client
marks the code part, which runs on the client
*/

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import Link from 'next/link';


const DashboardHeader = () => (
  <HeaderContainer
    render = {
      ({isSideNavExpanded, onClickSideNavExpand}) => (
        <Header aria-label="Dashboard">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            isActive={isSideNavExpanded}
            onClick={onClickSideNavExpand}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix='IBM'>Dashboard</HeaderName>
          </Link>
        </Header>
    )}
  />
);

export default DashboardHeader;