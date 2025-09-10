'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';
export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link className="flex items-center" href="/" title={t('common.homepage')}>
            <Image alt="Logo" src="/Images/Dark Logo.png" width={'50'} height={50} />{' '}
            <span className="font-Poppins text-white ml-2 font-light">
              Ank<span className="text-slate-400 font-normal">ith</span>
            </span>
          </Link>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
