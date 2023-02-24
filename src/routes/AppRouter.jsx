import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminRouter } from '../admin/routes/AdminRouter';
import { LoginPage, RegisterPage } from '../auth';
import { useAuthStore } from '../hooks/useAuthStore';
import { Loader } from '../ui';
import { PetPage, PetsPage, VeterinaryPage } from '../vet';


export const AppRouter = () => {

    const { status, checkAuthToken, user } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    // const status = 'checking';

    if (status === 'checking') {
        return (
            <Loader />
        )
    }

    return (
        <Routes>

            <Route path='/' element={<VeterinaryPage />} />
            <Route path='/mascotas' element={<PetsPage />} />
            <Route path='/mascota/:id' element={<PetPage />} />
            <Route path='/*' element={<Navigate to="/" />} />

            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/login" element={<LoginPage />} />
                            <Route path="/auth/register" element={<RegisterPage />} />
                            <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )

                    : <>
                        <Route path='/' element={<VeterinaryPage />} />
                        <Route path='/mascotas' element={<PetsPage />} />
                        <Route path='/mascota/:id' element={<PetPage />} />
                        <Route path='/admin/*' element={<AdminRouter />} />
                        <Route path='/*' element={<Navigate to="/" />} />
                    </>
            }




        </Routes>
    )
}