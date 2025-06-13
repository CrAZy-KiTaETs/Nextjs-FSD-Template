'use client';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { TNavLinkProps } from './NavLink.types';
import { usePageLoaderStore } from '@/shared/page-loader';

export const NavLink = (props: PropsWithChildren<TNavLinkProps>) => {
  const { children, ...restProps } = props;
  const { open } = usePageLoaderStore();

  return (
    <Link {...restProps} onClick={open}>
      {children}
    </Link>
  );
};
