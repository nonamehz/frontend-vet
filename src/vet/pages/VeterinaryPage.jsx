import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { usePetStore } from '../../hooks';
import { Footer, Header, Hero } from '../../ui'
import { ContactCard, PetCard, RequestModal } from '../components';
import { SectionLayout } from '../layout/SectionLayout';

import '../../ui/styles/styles.scss';


export const VeterinaryPage = () => {

    const { pets, startLoadingPets } = usePetStore();

    useEffect(() => {
        startLoadingPets();
    }, []);

    return (
        <>

            <Header />

            <Hero />

            <SectionLayout title="Servicios">
                <div className="services">
                    <div className="services__description">
                        <h3>¡Lo mejor para tu mascota!</h3>
                        <p>
                            En MedicVet Delgado ofrecemos una asistencia completa y de calidad a tu mascota. Nuestro principal
                            objetivo es mantener la salud y el bienestar de nuestros animales y ayudarlos a restablecerse cuando
                            están enfermos. Para ello, contamos con un personal altamente cualificado e instalaciones modernas y
                            bien equipadas.
                        </p>
                        <ul>
                            <li>Medicina Preventiva</li>
                            <li>Dermatología</li>
                            <li>Medicina Interna</li>
                        </ul>
                    </div>
                    <div className="services__img">
                        <img src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Imagen Servicios" />
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout title="Nosotros">
                <div className="services">
                    <div className="services__description">
                        <h3>Cuidando a tu mascota</h3>
                        <p>
                            Ofrecemos servicios de alta calidad en medicina y cirugía de perros y gatos con la mayor
                            satisfacción
                            de nuestros clientes y dando un trato personalizado y humano.
                            Nuestros Valores:
                        </p>
                        <ul>
                            <li>Honradez</li>
                            <li>Responsabilidad</li>
                            <li>Dedicación</li>
                            <li>Compromiso</li>
                            <li>Alto sentido de la ética profesional</li>
                            <li>Amor por los animales</li>
                        </ul>
                    </div>
                    <div className="services__img">
                        <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Imagen Nosotros" />
                    </div>
                </div>
            </SectionLayout>

            <SectionLayout title="Adopta una Mascota">
                <div className="adoption">
                    <h3>Encuentra un nuevo amigo</h3>
                    <p>
                        ¡Cientos de mascotas esperan por un hogar!
                    </p>

                    <div className="adopt">
                        {
                            pets.slice(0, 3).map(pet => (
                                <PetCard key={pet._id} pet={pet} />
                            ))
                        }
                    </div>

                    <Link className="button primary" to="/mascotas">Ver más mascotas</Link>
                </div>
            </SectionLayout>

            <SectionLayout title="Contáctanos">
                <div className="contact">
                    <ContactCard assetIcon="MailIcon" title="Mándanos un Mensaje" message="medicvetdelgado@gmail.com" />
                    <ContactCard assetIcon="MarketIcon" title="Visítanos" message="Urb. Valle Sharon Av. Víctor Castro Iglesias Mz Ñ lt 3., San Juan de Miraflores'" />
                    <ContactCard assetIcon="PhoneIcon" title="Llámanos" message="981 286 370" />
                    <ContactCard assetIcon="HeartIcon" title="Síguenos en nuestras redes sociales" message="Veterinaria Medicvet Delgado" />
                </div>
            </SectionLayout>

            <Footer />
        </>
    )
}