import SectionLayout from "../components/home/SectionLayout"
import CardServicesSection from "../components/home/CardServicesSection"
import ServicesSection from "../components/home/ServicesSection"
import InvitationCompaniesSection from "../components/home/InvitationCompaniesSection"
import LandingNav from "../components/home/NavLanding"
import Footer from "../components/home/Footer"

export default function Landing() {
  const invitations = [
    {
      img: '/cardsHome/Chef.jpg',
      title: 'Registra tu restaurante',
      description: 'Accede a nuestros usuarios y disfruta de la logistica que ofrecemos.'
    },
    {
      img: '/cardsHome/Negocio-1.jpg',
      title: 'Registra tu negocio',
      description: 'Descubre los beneficios de asociarte con MiFiesta para impulzar tus ventas.'
    },
    {
      img: '/cardsHome/PersonaGlobos.jpeg',
      title: 'Cotiza tu evento',
      description: 'Busca los mejores profesionales y ahorra tiempo para crear tu evento.'
    }
  ]
  return (
    <>
        <LandingNav />
        <SectionLayout>
          <CardServicesSection />
          <InvitationCompaniesSection invitations={invitations}/>
          <ServicesSection />
        </SectionLayout>
        <Footer />
    </>
  )
}