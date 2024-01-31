import { Route, Routes } from 'react-router-dom';
import PageContent from '../Templates/PageContent/PageContent';
import NotFound from '../Templates/NotFound/NotFound';

const RoutesMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<PageContent />} />
            <Route path="/:id" element={<PageContent />} />
            <Route element={<NotFound />} />
        </Routes>
    );
};

export default RoutesMapping;
