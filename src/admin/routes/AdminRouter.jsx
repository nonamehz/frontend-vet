import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import { Aside } from '../components';
import { AdminFormView, AdminHomeView, AdminMascotasView, AdminSolicitudesView } from '../views';

import '../styles/styles.scss';


export const AdminRouter = () => {

    const { user } = useAuthStore();

    return (
        <>
            {
                (user.role === 'ADMIN_ROLE')
                    ? <>
                        <div className='admin'>
                            <Aside />
                            <Routes>

                                <Route path='/' element={<AdminHomeView />} />
                                <Route path='/mascotas' element={<AdminMascotasView />} />
                                <Route path='/form' element={<AdminFormView />} />
                                <Route path='/solicitudes' element={<AdminSolicitudesView />} />

                                <Route path='/admin/*' element={<AdminHomeView />} />

                            </Routes>
                        </div>
                    </>
                    :
                    <Routes>
                        <Route path='/*' element={<Navigate to='/' />} />
                    </Routes>
            }
        </>
    )
}