import { Footer, Header, Hero } from '../ui';

import '../ui/styles/ui.scss';
import { ContactCard } from './components/ContactCard';
import { PetCard } from './components/PetCard';
import { SectionLayout } from './layout/SectionLayout';


export const HomePage = () => {
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
                        <img src="/assets/img/ServicesImg.png" alt="Imagen Servicios" />
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
                        <img src="/assets/img/AboutImg.png" alt="Imagen Nosotros" />
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
                            ['enero', 'febrero', 'marzo'].map(mascota => (
                                <PetCard key={mascota} />
                            ))
                        }
                    </div>

                    <a className="button primary">Ver más mascotas</a>
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