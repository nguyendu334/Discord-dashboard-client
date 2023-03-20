import { NextPageWithLayout } from '@/utils/types';
import { ReactElement } from 'react';
import { DashboardLayout } from '../../../components/layouts/dashboard';

const DashboardPage: NextPageWithLayout = () => {
    return <div className="page">Dashboard page</div>;
};

DashboardPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
