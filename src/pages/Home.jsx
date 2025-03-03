import React, { useEffect } from 'react';
import peopleComment from '../assets/imagesForSections/peopleCommentThree.png';
import starAndGift from '../assets/imagesForSections/starAndGiftTwo.png';
import { 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';


const Home = () => {
  const updateDots = (activeIndex) => {
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('bg-green-500', i === activeIndex);
      dot.classList.toggle('bg-gray-300', i !== activeIndex);
    });
  };

  useEffect(() => {
    let currentSlide = 0;
    const totalSlides = 4;
    const interval = 5000; // 5 segundos por slide

    const moveCarousel = () => {
      const carousel = document.getElementById('reviewsCarousel');
      if (carousel) {
        currentSlide = (currentSlide + 1) % totalSlides;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots(currentSlide);
      }
    };

    const autoPlayInterval = setInterval(moveCarousel, interval);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(autoPlayInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-12 items-center">
            {/* Lado izquierdo - Texto principal */}
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight text-gray-900 font-[Poppins] text-center">
                Recompensas que{' '}
                <span className="text-green-500">transforman</span> la lealtad
              </h1>
              <p className="text-xl text-gray-600 font-[Inter] max-w-2xl">
                Impulsa tu negocio con un programa de recompensas que verdaderamente conecta con tus clientes. Simple, efectivo y diseñado para el crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-green-500/25">
                  Comienza Gratis
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-base font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Ver Demo
                </button>
              </div>
            </div>

            {/* Lado derecho - Imagen/Ilustración */}
            <div className="relative flex items-center justify-center">
              <img
                src={starAndGift}
                alt="Dashboard de Recompensas"
                className="block w-auto max-w-4xl mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="funciones" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 font-[Poppins] mb-4">
              Funciones que{' '}
              <span className="relative">
                <span className="relative z-10 text-green-500">potencian</span>
                <span className="absolute inset-0 bg-green-500/10 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Descubre por qué las empresas líderes confían en nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integración Sencilla',
                description: 'Implementación en minutos, no en semanas. API robusta y documentación clara.',
                icon: CogIcon
              },
              {
                title: 'Análisis en Tiempo Real',
                description: 'Visualiza el impacto de tu programa de recompensas con métricas claras.',
                icon: ChartBarIcon
              },
              {
                title: 'Personalización Total',
                description: 'Adapta las recompensas a tu marca y preferencias de tus clientes.',
                icon: UserGroupIcon
              },
              {
                title: 'Despliegue Rápido',
                description: 'Lanza tu programa rápidamente con nuestro proceso optimizado.',
                icon: RocketLaunchIcon
              },
              {
                title: 'Seguridad Avanzada',
                description: 'Seguridad de nivel empresarial para proteger los datos de tus clientes.',
                icon: ShieldCheckIcon
              },
              {
                title: 'Soporte 24/7',
                description: 'Asistencia experta disponible en todo momento cuando la necesites.',
                icon: ClockIcon
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-50 rounded-xl p-8 hover:bg-gradient-to-b hover:from-white hover:to-green-50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-[Poppins]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-[Inter] group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App functionality section */}
      <section id="beneficios" className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Grid del lado izquierdo */}
            <div className="grid grid-cols-2 grid-rows-2 gap-8 h-[900px]">
              {/* Panel Principal - Home */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500">
                <div className="h-full flex flex-col">
                  <div className="w-full h-52 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 overflow-hidden">
                    {/* Espacio para imagen de la app */}
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-6">
                    Home
                  </h3>
                  <p className="text-gray-600 font-[Inter] text-lg mb-6">
                    Tu centro de control personal. Accede a todas tus recompensas y descubre nuevas experiencias.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-green-500 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                      Explorar Home
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel Misiones */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500">
                <div className="h-full flex flex-col">
                  <div className="w-full h-52 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 overflow-hidden">
                    {/* Espacio para imagen de la app */}
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-6">
                    Misiones
                  </h3>
                  <p className="text-gray-600 font-[Inter] text-lg mb-6">
                    Completa desafíos diarios y semanales. Gana recompensas exclusivas y compite con amigos.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-green-500 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                      Ver Misiones
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel Wallet */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500">
                <div className="h-full flex flex-col">
                  <div className="w-full h-52 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 overflow-hidden">
                    {/* Espacio para imagen de la app */}
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-6">
                    Wallet
                  </h3>
                  <p className="text-gray-600 font-[Inter] text-lg mb-6">
                    Gestiona tus puntos y recompensas. Accede a tu historial y realiza canjes al instante.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-green-500 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                      Abrir Wallet
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel Beneficios */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-500/20 backdrop-blur-3xl transition-opacity group-hover:opacity-75"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-full h-52 bg-white/20 rounded-lg mb-6 backdrop-blur-xl">
                    {/* Espacio para imagen de la app */}
                  </div>
                  <h3 className="text-3xl font-semibold font-[Poppins] mb-6">
                    Beneficios Premium
                  </h3>
                  <p className="text-lg font-[Inter] mb-6 text-white/90">
                    Descubre un mundo de beneficios exclusivos. Acceso prioritario a nuevos productos y eventos especiales.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 text-lg font-semibold backdrop-blur-xl">
                      Explorar Beneficios
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido del lado derecho */}
            <div className="lg:sticky lg:top-32 space-y-8 max-w-xl">
              <h2 className="text-5xl font-bold text-gray-900 font-[Poppins] leading-tight">
                Una app diseñada para{' '}
                <span className="relative">
                  <span className="relative z-10 text-green-500">tu estilo</span>
                  <span className="absolute inset-0 bg-green-500/10 blur-lg"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-[Inter] leading-relaxed">
                Descubre una experiencia única de recompensas, diseñada para hacer de cada visita un momento especial.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Interfaz Intuitiva',
                    description: 'Navega sin esfuerzo y encuentra todo lo que necesitas'
                  },
                  {
                    title: 'Recompensas Instantáneas',
                    description: 'Acumula y canjea puntos en tiempo real'
                  },
                  {
                    title: 'Misiones Diarias',
                    description: 'Completa desafíos y obtén beneficios exclusivos'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 font-[Poppins]">
                        {feature.title}
                      </h4>
                      <p className="text-base text-gray-600 font-[Inter]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-[Poppins] leading-tight mb-5">
                  Planes que se adaptan a{' '}
                  <span className="relative">
                    <span className="relative z-10 text-green-500">tu negocio</span>
                    <span className="absolute inset-0 bg-green-500/10 blur-lg"></span>
                  </span>
                </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Elige el plan perfecto para impulsar la lealtad de tus clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Básico',
                price: '29',
                features: [
                  'Hasta 500 clientes activos',
                  'Panel de control básico',
                  'Reportes mensuales',
                  'Soporte por email',
                  '---',
                  '---'
                ],
                isPopular: false
              },
              {
                name: 'Profesional',
                price: '79',
                features: [
                  'Hasta 2,000 clientes activos',
                  'Panel de control avanzado',
                  'Reportes en tiempo real',
                  'Soporte prioritario 24/7',
                  'Personalización de recompensas',
                  '---'
                ],
                isPopular: true
              },
              {
                name: 'Empresarial',
                price: 'Personalizado',
                features: [
                  'Clientes ilimitados',
                  'Panel de control premium',
                  'API completa',
                  'Soporte dedicado',
                  'Personalización total',
                  'Integración con CRM'
                ],
                isPopular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 group
                  ${plan.isPopular ? 'ring-2 ring-green-500 scale-105 shadow-xl' : 'hover:shadow-xl'}
                  hover:shadow-green-500/10 hover:bg-gradient-to-b hover:from-white hover:to-green-50`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-green-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {plan.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 font-[Poppins] mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      {plan.price !== 'Personalizado' && <span className="text-gray-600 text-2xl">$</span>}
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.price !== 'Personalizado' && <span className="text-gray-600 ml-2">/mes</span>}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        {feature !== '---' ? (
                          <>
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-[Inter]">{feature}</span>
                          </>
                        ) : (
                          <span className="h-6 w-full border-b border-gray-100"></span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300
                      ${plan.isPopular
                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-500/25'
                        : 'bg-gray-100 text-gray-900 hover:bg-green-500 hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/10'
                      }`}
                  >
                    Comenzar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="testimonios" className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative w-full h-full">
              <img
                src={peopleComment}
                alt="Design Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 font-[Poppins] leading-tight">
                  Voces que{' '}
                  <span className="relative">
                    <span className="relative z-10 text-green-500">inspiran</span>
                    <span className="absolute inset-0 bg-green-500/10 blur-lg"></span>
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-500 font-[Inter] max-w-xl">
                  Descubre cómo empresas de todos los tamaños están revolucionando la forma de conectar con sus clientes a través de nuestro programa.
                </p>
              </div>

              {/* Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" id="reviewsCarousel">
                    {[
                      {
                        name: 'Ana Martínez',
                        role: 'CEO de CaféXpress',
                        image: '/testimonials/ana.jpg',
                        comment: 'Incrementamos la retención de clientes en un 45% en solo 3 meses. La implementación fue sorprendentemente sencilla.',
                        rating: 5,
                        keyword: 'Sorprendente'
                      },
                      {
                        name: 'Carlos Ruiz',
                        role: 'Director de Marketing, TechStore',
                        image: '/testimonials/carlos.jpg',
                        comment: 'La flexibilidad del programa nos permite adaptarnos a las necesidades cambiantes de nuestros clientes.',
                        rating: 5,
                        keyword: 'Flexible'
                      },
                      {
                        name: 'Laura Sánchez',
                        role: 'Fundadora de BeautyClub',
                        image: '/testimonials/laura.jpg',
                        comment: 'Los análisis en tiempo real nos ayudan a tomar decisiones informadas sobre nuestras campañas.',
                        rating: 4,
                        keyword: 'Intuitiva'
                      },
                      {
                        name: 'Miguel Torres',
                        role: 'COO de FitLife',
                        image: '/testimonials/miguel.jpg',
                        comment: 'La integración con nuestro sistema existente fue perfecta. El soporte técnico es excepcional.',
                        rating: 5,
                        keyword: 'Confiable'
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative">
                          {/* Profile Header */}
                          <div className="flex items-center mb-6">
                            <div className="relative">
                              <div className="absolute -inset-1 bg-green-500/20 rounded-full blur"></div>
                              <img
                                className="h-16 w-16 rounded-full object-cover relative ring-2 ring-green-500/20"
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-xl font-semibold text-gray-900 font-[Poppins]">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600 font-[Inter]">{testimonial.role}</p>
                            </div>
                          </div>

                          {/* Comment */}
                          <p className="text-gray-600 font-[Inter] mb-6 text-lg">
                            {testimonial.comment}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-green-600 font-semibold font-[Poppins]">
                              {testimonial.keyword}
                            </span>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-gray-400 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
                              </svg>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-5 h-5 ${
                                      i < testimonial.rating ? 'text-green-500' : 'text-gray-200'
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors duration-300"
                  onClick={() => {
                    const carousel = document.getElementById('reviewsCarousel');
                    const currentTransform = carousel.style.transform;
                    const currentIndex = parseInt(currentTransform.match(/-?(\d+)/)?.[1] || 0) / 100;
                    const newIndex = (currentIndex - 1 + 4) % 4;
                    carousel.style.transform = `translateX(-${newIndex * 100}%)`;
                    updateDots(newIndex);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors duration-300"
                  onClick={() => {
                    const carousel = document.getElementById('reviewsCarousel');
                    const currentTransform = carousel.style.transform;
                    const currentIndex = parseInt(currentTransform.match(/-?(\d+)/)?.[1] || 0) / 100;
                    const newIndex = (currentIndex + 1) % 4;
                    carousel.style.transform = `translateX(-${newIndex * 100}%)`;
                    updateDots(newIndex);
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Carousel Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 carousel-dot ${
                        index === 0 ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      onClick={() => {
                        const carousel = document.getElementById('reviewsCarousel');
                        carousel.style.transform = `translateX(-${index * 100}%)`;
                        updateDots(index);
                      }}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 font-[Poppins] mb-6">
              Resolvemos tus{' '}
              <span className="relative">
                <span className="relative z-10 text-green-500">inquietudes</span>
                <span className="absolute inset-0 bg-green-500/10 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-[Inter] max-w-2xl mx-auto">
              Todo lo que necesitas saber para comenzar tu viaje con nosotros
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: '¿Cómo funciona el programa de recompensas?',
                answer: 'Nuestro programa permite a tus clientes acumular puntos por cada compra, los cuales pueden canjear por recompensas personalizadas. Tú defines las reglas y los premios.',
              },
              {
                question: '¿Cuánto tiempo toma la implementación?',
                answer: 'La implementación básica toma menos de 1 hora. Para integraciones más complejas con sistemas existentes, nuestro equipo te guiará en el proceso que típicamente toma 1-2 días.',
              },
              {
                question: '¿Puedo personalizar las recompensas?',
                answer: 'Sí, tienes control total sobre las recompensas. Puedes crear diferentes niveles, establecer múltiples tipos de beneficios y ajustar las reglas según tus necesidades.',
              },
              {
                question: '¿Qué tipo de soporte ofrecen?',
                answer: 'Ofrecemos soporte por email 24/7 para todos los planes. Los planes Profesional y Empresarial incluyen soporte prioritario y acceso a un gerente de cuenta dedicado.',
              },
              {
                question: '¿Puedo cambiar de plan más adelante?',
                answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.',
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <button
                  className="w-full flex items-center justify-between p-8 bg-gray-50 rounded-2xl text-left transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-green-50 group-hover:shadow-lg"
                  onClick={() => {
                    const allAnswers = document.querySelectorAll('[id^="answer-"]');
                    allAnswers.forEach((answer, i) => {
                      if (i !== index) {
                        answer.classList.add('hidden', 'opacity-0', 'scale-95');
                      }
                    });
                    const answer = document.getElementById(`answer-${index}`);
                    if (answer) {
                      answer.classList.toggle('hidden');
                      answer.classList.toggle('scale-95');
                      answer.classList.toggle('opacity-0');
                    }
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="text-xl font-semibold text-gray-900 font-[Poppins] group-hover:text-green-500 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <svg 
                    className="w-6 h-6 text-gray-400 transform transition-transform duration-500 ease-in-out group-hover:text-green-500 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id={`answer-${index}`} 
                  className="hidden opacity-0 scale-95 transform transition-all duration-300 ease-in-out overflow-hidden"
                >
                  <div className="p-8 text-lg text-gray-600 font-[Inter] bg-gradient-to-b from-white to-gray-50 rounded-2xl mt-2 border-l-4 border-green-500">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;