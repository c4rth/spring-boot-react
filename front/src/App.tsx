
import { Header } from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MainContent } from './pages/MainContent';
import { UserContent } from './pages/UserContent';
import { ProfileContent } from './pages/ProfileContent';
import { SpringBootContent } from './pages/SpringBootContent';
import { MenuNavigation } from './MenuNavigation';
import { DummyContent } from './pages/DummyContent';
import { MuiTable } from './pages/mui/table/MuiTable';
import { MuiMisc } from './pages/mui/misc/MuiMisc';
import { MuiDialog } from './pages/mui/dialog/MuiDialog';
import {NotFoundContent} from "./pages/NotFoundContent.tsx";
import {useEffect} from "react";

export default function App() {

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            console.log('handleBeforeUnload');
            event.returnValue ="";
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    return (
            <BrowserRouter>
                <>
                    <Header />
                    <Routes>
                        <Route path={MenuNavigation.HOME} element={<MainContent />} />
                        <Route path={MenuNavigation.SPRINGBOOT} element={<SpringBootContent />} />
                        <Route path={MenuNavigation.PROFILE} element={<ProfileContent />} />
                        <Route path={MenuNavigation.USER} element={<UserContent />} />
                        <Route path={MenuNavigation.DUMMY} element={<DummyContent />} />
                        <Route path={MenuNavigation.MUI_TABLE} element={<MuiTable />} />
                        <Route path={MenuNavigation.MUI_MISC} element={<MuiMisc />} />
                        <Route path={MenuNavigation.MUI_DIALOG} element={<MuiDialog />} />
                        <Route element={<NotFoundContent />} />
                    </Routes>
                </>
            </BrowserRouter >
    );
}
