// import { Locale } from "next-intl";
// import { setRequestLocale } from "next-intl/server";
// import { use } from "react";

import { useTranslations } from "next-intl";

// type Props = {
//     params: Promise<{ locale: Locale }>;
// };

export default function EducationPage() {
    // const { locale } = use(params);

    // // Enable static rendering
    // setRequestLocale(locale);

    const t = useTranslations('HomePage');

    return (
        <>
            <div>
                <h3 className="text-2xl font-semibold">
                    {t('title')}
                </h3>
                <h3 className="pb-2 text-muted-foreground">I.U.T Dr. Federico Rivero Palacios</h3>
            </div>
            <div className="mt-4 mb-5">
                <h3 className="text-2xl font-semibold">
                    Degree
                </h3>
                <h3 className="pb-2 text-muted-foreground">I.T Engineering | 2010 - 2016</h3>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">
                    Certificates
                </h3>
                <ul className="max-w-md space-y-1 list-disc list-inside text-muted-foreground">
                    <li>AWS Technical Essential | 2021</li>
                    <li>React Testing Library and Jest | 2021</li>
                    <li>NodeJS From 0 to Expert | 2019</li>
                    <li>SAP Certified Development Associate | 2018</li>
                    <li>React + Redux + ES6 | 2018</li>
                    <li>React the Complete Guide: +15 Apps (MERN, Hooks, Context) | 2018</li>
                </ul>
            </div>
        </>
    );
}