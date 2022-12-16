import { Route, Routes } from 'react-router-dom';
import { Aside } from '../components';

import { AdminHomeView, AdminMascotasView, AdminFormView, AdminSolicitudesView } from '../views';


export const AdminRouter = () => {
    return (
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
    )
}