import { Route, Routes } from 'react-router-dom';
import PageContent from '../Templates/PageContent/PageContent';
import NotFound from '../Templates/NotFound/NotFound';

const RoutesMapping = () => {
    return (
        <Routes>
            {/* One route with an optional param, not two: separate "/" and "/:id" entries
                would remount PageContent on every card open/close, replaying the intro
                animation and its scroll lock each time. */}
            <Route path="/:id?" element={<PageContent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RoutesMapping;
