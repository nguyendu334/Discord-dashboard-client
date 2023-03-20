import { NextPageWithLayout } from '@/utils/types';
import { ReactElement } from 'react';
import { DashboardLayout } from '../../../components/layouts/dashboard';

const SettingsPage: NextPageWithLayout = () => {
    return <div className="page">Settings page</div>;
};

SettingsPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default SettingsPage;