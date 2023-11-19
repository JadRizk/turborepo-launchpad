import React from 'react';
import clsx from 'clsx';

interface CreditCardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CreditCardProps> = ({ title, children }) => {
  const baseClasses = 'border rounded-lg shadow-dialog p-6 max-w-sm mx-auto';
  const responsiveClasses = 'w-full md:max-w-md lg:max-w-lg';

  return (
      <div className={clsx(baseClasses, responsiveClasses)}>
        <h2 className="text-just20 mb-4">{title}</h2>
        {children}
      </div>
  );
};
