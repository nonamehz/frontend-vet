import { PetCard } from '../../home/components/PetCard';


export const AdminHomeView = () => {
    return (
        <main className='main'>
            <h1 className="title">Inicio</h1>

            <div className="adoption">

                <div className="adopt">
                    {
                        ['enero', 'febrero', 'marzo'].map(mascota => (
                            <PetCard key={mascota} />
                        ))
                    }
                </div>

                <div className="container">
                    <a className="button primary mt">Ver todas las mascotas</a>
                </div>
            </div>
        </main>
    )
}