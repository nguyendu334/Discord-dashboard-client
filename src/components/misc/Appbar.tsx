import { FC } from 'react';
import styles from './index.module.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { Guild } from '../../utils/types';

type Props = {
    guild?: Guild;
}

export const Appbar:FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push(`/menu`)}>
                <RiMenu3Line size={40} />
                <p>Menu</p>
            </div>
            <div>
                <p>{guild?.name}</p>
            </div>
        </div>
    );
};
