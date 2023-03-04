import Head from 'next/head';

interface PageHeadProps {
    title?: string;
    description?: string;
}

interface PageContainerProps extends PageHeadProps {
    children?: React.ReactNode;
}

interface AnimatedPageContainerProps extends PageContainerProps {
    variants?: any;
    transition?: any;
}

const fallback = {
    title: 'ANDRE___ROCCO',
    description:
        'Explore a visão de Andre Rocco através do site oficial. Descubra os últimos lançamentos, projetos e criações.',
};

const PageHead = ({ title, description }: PageHeadProps) => {
    return (
        <Head>
            <title>{title ? title : fallback.title}</title>
            <meta name="description" content={description ? description : fallback.description} />
        </Head>
    );
};

export default function PageContainer({ title, description, children }: PageContainerProps) {
    return (
        <>
            <PageHead title={title} description={description} />
            <main>{children}</main>
        </>
    );
}
