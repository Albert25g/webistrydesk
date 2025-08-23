import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  id?: string;
};

export default function LocalLink({ href, children, id }: Props) {
  return (
    // Use native anchor; Next's Link adds client routing but this shim keeps simple navigation
    <a href={href} id={id}>
      {children}
    </a>
  );
}
