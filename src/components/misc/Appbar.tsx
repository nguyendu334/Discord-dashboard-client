import styles from './index.module.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

export const Appbar = () => {
    const router = useRouter();
    return (
        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push(`/menu`)}>
                <RiMenu3Line size={40} />
                <p>Menu</p>
            </div>
            <div>
                <p>{'Vô cùng luôn đấy'}</p>
            </div>
        </div>
    );
};
