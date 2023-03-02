import Head from 'next/head';

interface PageContainerProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

const fallback = {
    title: 'ANDRE___ROCCO',
    description:
        'Explore a visão de Andre Rocco através do site oficial. Descubra os últimos lançamentos, projetos e criações.',
};

export default function PageContainer({ title, description, children }: PageContainerProps) {
    return (
        <>
            <Head>
                <title>{title ? title : fallback.title}</title>
                <meta name="description" content={description ? description : fallback.description} />
            </Head>
            <main>{children}</main>
        </>
    );
}
