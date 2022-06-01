import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from "../pages/Welcome";
import Films from "../pages/Films";
import Film from "../pages/Film";
import NotFound from "../components/NotFound/NotFound";
import OnlyAuthorized from "./OnlyAuthorized";
import NotAuthorized from './NotAuthorized';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <NotAuthorized>
                    <Navigate to="/welcome" replace />
                </NotAuthorized>
            } />
            
            <Route path="/welcome" element={
                <NotAuthorized>
                    <Welcome />
                </NotAuthorized>
            } />
            
            <Route path="/films" element={
                <OnlyAuthorized>
                    <Films />
                </OnlyAuthorized>} exact />
            
            <Route path="/films/:filmId" element={
                <OnlyAuthorized>
                    <Film />
                </OnlyAuthorized>
            } />
            
            <Route path="*" element={
                <NotFound />} />
        </Routes>
    );
};

export default AllRoutes;