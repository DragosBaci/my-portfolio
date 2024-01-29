import { Route, Routes } from 'react-router-dom';
import PageContent from '../Templates/PageContent/PageContent';

const RoutesMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<PageContent />} />
            <Route path="/:id" element={<PageContent />} />
        </Routes>
    );
};

export default RoutesMapping;
