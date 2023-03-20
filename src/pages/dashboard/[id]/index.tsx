import { fetchGuild } from '../../../utils/api';
import { Guild, NextPageWithLayout } from '../../../utils/types';
import { GetServerSidePropsContext } from 'next';
import { ReactElement, useContext, useEffect } from 'react';
import { DashboardLayout } from '../../../components/layouts/dashboard';
import { GuildContext } from '../../../utils/contexts/GuildContext';

type Props = {
    guild: Guild;
};

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);
    useEffect(() => {
        console.log(guild)
        setGuild(guild);
    }, [])
    return (
        <div className="page">
            Dashboard page
            <p>{guild.name}</p>
        </div>
    );
};

DashboardPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return fetchGuild(ctx);
}

export default DashboardPage;
