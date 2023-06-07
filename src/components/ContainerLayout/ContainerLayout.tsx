import React, { ReactNode } from "react";

import './containerLayout.css'

interface IContainerLayoutProps {
  children?: ReactNode
};

export function ContainerLayout({ children }: IContainerLayoutProps) {
  return <div className='container'>
    {children}
  </div>;
}
