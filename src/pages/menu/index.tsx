import { GetServerSidePropsContext, NextPage } from 'next';
import { fetchMutualGuilds } from '../../utils/api';
import { Guild } from '../../utils/types';
import styles from './index.module.scss';
import { GuildMenuItem } from './../../components/guilds/GuildMenuItem';

type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds } : any) => {
    return (
        <div className='page'>
            <div className={styles.container}>
                <h1 className={styles.title}>Please Select a Guild</h1>
                {guilds.guilds.map((guild : any) => (
                    <div key={guild.id}>
                        <GuildMenuItem guild={guild} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchMutualGuilds(context);
}

export default MenuPage;
