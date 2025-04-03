'use client';

import { ReactNode, useEffect, useState } from 'react';
import i18n, { initI18n } from './config';
import { I18nextProvider } from 'react-i18next';

export default function I18nProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initI18n().then(() => setReady(true));
    }, []);

    if (!ready) return null;

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
