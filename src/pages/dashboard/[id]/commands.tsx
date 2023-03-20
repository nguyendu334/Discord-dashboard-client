import { NextPageWithLayout } from '@/utils/types';
import { ReactElement } from 'react';
import { DashboardLayout } from '../../../components/layouts/dashboard';

const CommandsPage: NextPageWithLayout = () => {
    return <div className="page">Commands page</div>;
};

CommandsPage.getLayout = (page: ReactElement) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default CommandsPage;