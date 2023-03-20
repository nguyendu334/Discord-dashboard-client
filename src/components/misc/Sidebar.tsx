import { FC } from 'react';
import Image from 'next/image';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsTerminal } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { Guild } from '../../utils/types';
import { getIcon } from '../../utils/helpers';

const routes = [
    {
        name: 'dashboard',
        icon: <MdSpaceDashboard size={36} />,
        getPath: (id: string) => `/dashboard/${id}`,
    },
    {
        name: 'commands',
        icon: <BsTerminal size={36} />,
        getPath: (id: string) => `/dashboard/${id}/commands`,
    },
    {
        name: 'settings',
        icon: <FaWrench size={36} />,
        getPath: (id: string) => `/dashboard/${id}/settings`,
    },
];

type Props = {
    guild?: Guild;
};

export const Sidebar:FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={styles.sidebar}>
            <Image src={getIcon(guild)} height={80} width={80} alt="guild avatar" className={styles.avatar} />
            <div className={styles.icons}>
                {routes.map((route) => (
                    <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))}>
                        {route.icon}
                    </div>
                ))}
            </div>
            <div>
                <RiLogoutCircleLine size={36} />
            </div>
        </div>
    );
};
