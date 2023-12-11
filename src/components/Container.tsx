import React, { FC } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('container', className)}>
      {children}
    </div>
  )
}

export default Container