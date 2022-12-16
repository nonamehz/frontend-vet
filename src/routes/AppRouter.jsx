import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminRouter } from '../admin/router/AdminRouter';

import { LoginPage, RegisterPage } from '../auth';
import { HomePage } from '../home/HomePage';
import { PetProfile } from '../home/pages/PetProfile';
import { PetsHome } from '../home/pages/PetsHome';
// import { HomePage } from '../home/HomePage';


export const AppRouter = () => {

    const status = '[ADMIN-AUTHENTICATED]' // 'not authenticated | 'authenticated' | 'checking'

    return (
        <Routes>

            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/admin/*' element={<AdminRouter />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/mascota/:id' element={<PetProfile />} />
            <Route path='/mascotas' element={<PetsHome />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}