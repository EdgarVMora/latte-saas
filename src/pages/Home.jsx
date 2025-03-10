import React, { useEffect, useState } from 'react';
import peopleComment from '../assets/imagesForSections/peopleCommentThree.png';
import starAndGift from '../assets/imagesForSections/starAndGiftTwo.png';
import { 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  CommandLineIcon,
  BoltIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const testimonialData = [
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
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = testimonialData.length;

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const carousel = document.getElementById('reviewsCarousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
  }, [currentTestimonial]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const faqData = [
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
  ];

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-green-200 mix-blend-multiply opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-green-300 mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-100 mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-12 items-center">
            {/* Lado izquierdo - Texto principal */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  <SparklesIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Nuevo: Programa de Recompensas 2.0</span>
                </div>
                <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-[Poppins]">
                  Recompensas que{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">transforman</span>
                    <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
                  </span>{' '}
                  la lealtad
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 font-[Inter] max-w-2xl mx-auto lg:mx-0">
                Impulsa tu negocio con un programa de recompensas que verdaderamente conecta con tus clientes. Simple, efectivo y diseñado para el crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Comienza Gratis
                    <ArrowRightIcon className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button className="group px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg text-base font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-300 relative">
                  <span className="relative z-10">Ver Demo</span>
                  <div className="absolute inset-0 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg"></div>
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="relative inline-block">
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200"></div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">+2,000</span> negocios confían en nosotros
                </div>
              </div>
            </div>

            {/* Lado derecho - Imagen/Ilustración */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-green-50/50 rounded-3xl transform rotate-3"></div>
              <img
                src={starAndGift}
                alt="Dashboard de Recompensas"
                className="w-full h-auto max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-4xl mx-auto object-contain transform hover:scale-105 transition-all duration-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="funciones" className="relative bg-white py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Funcionalidades Premium</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-[Poppins] mb-6">
              Funciones que{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">potencian</span>
                <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-[Inter] max-w-3xl mx-auto">
              Descubre por qué las empresas líderes confían en nuestra plataforma para transformar la experiencia de sus clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integración Sencilla',
                description: 'Implementación en minutos, no en semanas. API robusta y documentación clara.',
                icon: CogIcon,
                gradient: 'from-blue-500/5 to-green-500/5'
              },
              {
                title: 'Análisis en Tiempo Real',
                description: 'Visualiza el impacto de tu programa de recompensas con métricas claras y procesables.',
                icon: ChartBarIcon,
                gradient: 'from-green-500/5 to-emerald-500/5'
              },
              {
                title: 'Personalización Total',
                description: 'Adapta las recompensas a tu marca y las preferencias específicas de tus clientes.',
                icon: UserGroupIcon,
                gradient: 'from-emerald-500/5 to-teal-500/5'
              },
              {
                title: 'Despliegue Rápido',
                description: 'Lanza tu programa rápidamente con nuestro proceso optimizado y asistencia experta.',
                icon: RocketLaunchIcon,
                gradient: 'from-teal-500/5 to-green-500/5'
              },
              {
                title: 'Seguridad Avanzada',
                description: 'Protección de nivel empresarial para mantener seguros los datos de tus clientes.',
                icon: ShieldCheckIcon,
                gradient: 'from-green-500/5 to-emerald-500/5'
              },
              {
                title: 'Soporte 24/7',
                description: 'Asistencia experta disponible en todo momento cuando más la necesites.',
                icon: ClockIcon,
                gradient: 'from-emerald-500/5 to-blue-500/5'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 hover:bg-gradient-to-b hover:from-white hover:to-green-50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-[Poppins] group-hover:text-green-500 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-[Inter] text-lg leading-relaxed group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                  <div className="mt-6 flex items-center text-green-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="mr-2">Saber más</span>
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App functionality section */}
      <section id="beneficios" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Contenedor principal con orden flexible */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            {/* Contenido del título - Aparecerá primero en móvil */}
            <div className="lg:sticky lg:top-32 space-y-8 max-w-xl mb-16 lg:mb-0 lg:order-2">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <SparklesIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Experiencia Intuitiva</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[Poppins] leading-tight mb-6">
                  Una app diseñada para{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">tu estilo</span>
                    <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-[Inter] leading-relaxed">
                  Descubre una experiencia única de recompensas, diseñada para hacer de cada visita un momento especial.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Interfaz Intuitiva',
                    description: 'Navega sin esfuerzo y encuentra todo lo que necesitas al instante',
                    icon: CommandLineIcon
                  },
                  {
                    title: 'Recompensas Instantáneas',
                    description: 'Acumula y canjea puntos en tiempo real sin complicaciones',
                    icon: BoltIcon
                  },
                  {
                    title: 'Misiones Diarias',
                    description: 'Completa desafíos y obtén beneficios exclusivos cada día',
                    icon: TrophyIcon
                  }
                ].map((feature, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-green-500/5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-gray-900 font-[Poppins] mb-2 group-hover:text-green-500 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-base text-gray-600 font-[Inter] group-hover:text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid del lado izquierdo - Aparecerá segundo en móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-auto lg:h-[1000px] lg:order-1">
              {/* Panel Principal - Home */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative p-10 border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-4 group-hover:text-green-500 transition-colors duration-300">
                      Home
                    </h3>
                    <p className="text-gray-600 font-[Inter] text-lg mb-8">
                      Tu centro de control personal. Accede a todas tus recompensas y descubre nuevas experiencias.
                    </p>
                    <div className="flex items-center text-green-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Explorar Home</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100/50">
                  <div className="aspect-video rounded-lg bg-white shadow-inner overflow-hidden">
                    {/* Aquí iría la imagen de la app */}
                  </div>
                </div>
              </div>

              {/* Panel Misiones */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative p-10 border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-4 group-hover:text-green-500 transition-colors duration-300">
                      Misiones
                    </h3>
                    <p className="text-gray-600 font-[Inter] text-lg mb-8">
                      Completa desafíos diarios y semanales. Gana recompensas exclusivas y compite con amigos.
                    </p>
                    <div className="flex items-center text-green-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Ver Misiones</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100/50">
                  <div className="aspect-video rounded-lg bg-white shadow-inner overflow-hidden">
                    {/* Aquí iría la imagen de la app */}
                  </div>
                </div>
              </div>

              {/* Panel Wallet */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative p-10 border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-4 group-hover:text-green-500 transition-colors duration-300">
                      Wallet
                    </h3>
                    <p className="text-gray-600 font-[Inter] text-lg mb-8">
                      Gestiona tus puntos y recompensas. Accede a tu historial y realiza canjes al instante.
                    </p>
                    <div className="flex items-center text-green-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Abrir Wallet</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100/50">
                  <div className="aspect-video rounded-lg bg-white shadow-inner overflow-hidden">
                    {/* Aquí iría la imagen de la app */}
                  </div>
                </div>
              </div>

              {/* Panel Beneficios Premium */}
              <div className="group bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden text-white">
                <div className="relative p-10 border-b border-white/10">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-3xl font-semibold font-[Poppins] mb-4">
                      Beneficios Premium
                    </h3>
                    <p className="text-white/90 font-[Inter] text-lg mb-8">
                      Descubre un mundo de beneficios exclusivos. Acceso prioritario a nuevos productos y eventos especiales.
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 text-base font-semibold backdrop-blur-xl group-hover:translate-x-2">
                      <span className="mr-2">Explorar Beneficios</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-8 bg-white/5">
                  <div className="aspect-video rounded-lg bg-white/10 shadow-inner overflow-hidden backdrop-blur-xl">
                    {/* Aquí iría la imagen de la app */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="bg-gray-50 py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[Poppins] leading-tight mt-15 mb-7">
                  Planes que se adaptan a{' '}
                  <span className="relative">
                    <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">tu negocio</span>
                    <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
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

      {/* Reviews Section*/}
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
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[Poppins] leading-tight mb-6">
                  Voces que{' '}
                  <span className="relative">
                    <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">inspiran</span>
                    <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 font-[Inter] max-w-xl mx-auto lg:mx-0">
                  Descubre cómo empresas de todos los tamaños están revolucionando la forma de conectar con sus clientes a través de nuestro programa.
                </p>
              </div>

              {/* Carousel */}
              <div className="relative" role="region" aria-label="Testimonios de clientes">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out" 
                    id="reviewsCarousel"
                    style={{ 
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                      width: `${testimonialData.length * 100}%`
                    }}
                  >
                    {testimonialData.map((testimonial, index) => (
                      <div 
                        key={index} 
                        className="w-full flex-shrink-0 px-4 transition-opacity duration-500"
                        role="tabpanel"
                        aria-labelledby={`testimonial-${index}`}
                        style={{ 
                          opacity: currentTestimonial === index ? 1 : 0.3,
                          transform: `scale(${currentTestimonial === index ? 1 : 0.95})`
                        }}
                      >
                        <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative">
                          {/* Profile Header */}
                          <div className="flex items-center mb-6">
                            <div className="relative">
                              <div className="absolute -inset-1 bg-green-500/20 rounded-full blur"></div>
                              <img
                                className="h-16 w-16 rounded-full object-cover relative ring-2 ring-green-500/20"
                                src={testimonial.image}
                                alt={`Foto de ${testimonial.name}`}
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
                              <div className="flex" role="img" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-5 h-5 ${
                                      i < testimonial.rating ? 'text-green-500' : 'text-gray-200'
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
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
                  onClick={handlePrevTestimonial}
                  aria-label="Testimonio anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors duration-300"
                  onClick={handleNextTestimonial}
                  aria-label="Siguiente testimonio"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Carousel Dots */}
                <div className="flex justify-center mt-8 space-x-2" role="tablist">
                  {testimonialData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentTestimonial ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Ir al testimonio ${index + 1}`}
                      aria-selected={index === currentTestimonial}
                      role="tab"
                      id={`testimonial-${index}`}
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
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-[Poppins] leading-tight mb-6">
              Resolvemos tus{' '}
              <span className="relative">
                <span className="relative z-10 text-green-500 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-green-600">inquietudes</span>
                <span className="absolute inset-0 bg-green-100 transform -rotate-2 rounded"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-[Inter] max-w-2xl mx-auto">
              Todo lo que necesitas saber para comenzar tu viaje con nosotros
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="group">
                <button
                  className="w-full flex items-center justify-between p-8 bg-gray-50 rounded-2xl text-left transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-green-50 group-hover:shadow-lg"
                  onClick={() => handleFaqClick(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-semibold text-gray-900 font-[Poppins] group-hover:text-green-500 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-500 ease-in-out group-hover:text-green-500 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index 
                      ? 'max-h-96 opacity-100 scale-100' 
                      : 'max-h-0 opacity-0 scale-95'
                  }`}
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