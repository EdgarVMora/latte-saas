import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado izquierdo - Texto principal */}
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight text-gray-900 font-[Poppins]">
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
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Ver Demo
                </button>
              </div>
            </div>

            {/* Lado derecho - Imagen/Ilustración */}
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <img
                  src="/rewards-dashboard.svg"
                  alt="Dashboard de Recompensas"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-[Poppins] mb-4">
              Beneficios que marcan la diferencia
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Descubre por qué las empresas líderes confían en nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fácil Integración',
                description: 'Implementación en minutos, no en semanas. API robusta y documentación clara.',
                icon: '🔌'
              },
              {
                title: 'Análisis en Tiempo Real',
                description: 'Visualiza el impacto de tu programa de recompensas con métricas claras.',
                icon: '📊'
              },
              {
                title: 'Personalización Total',
                description: 'Adapta las recompensas a tu marca y a las preferencias de tus clientes.',
                icon: '✨'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-[Poppins]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-[Inter]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Cómo Funciona */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Grid del lado izquierdo */}
            <div className="grid grid-cols-3 grid-rows-4 gap-5 h-[800px]">
              {/* Panel Principal - Dashboard */}
              <div className="col-span-2 row-span-2 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-full flex flex-col">
                  <h3 className="text-3xl font-semibold text-gray-900 font-[Poppins] mb-6">
                    Dashboard Principal
                  </h3>
                  <p className="text-gray-600 font-[Inter] text-lg mb-6">
                    Visualiza todas tus métricas clave en un solo lugar. Monitorea el engagement y el ROI de tu programa.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-green-500 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                      Explorar Dashboard
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel Central - Centro de Control */}
              <div className="row-span-4 col-start-3 bg-gradient-to-b from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-500/20 backdrop-blur-3xl transition-opacity group-hover:opacity-75"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-3xl font-semibold font-[Poppins] mb-8">
                    Centro de Control
                  </h3>
                  <ul className="space-y-8">
                    <li className="flex items-center">
                      <span className="bg-white/20 p-3 rounded-lg mr-4 text-xl">✨</span>
                      <span className="text-lg">Configura recompensas</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-white/20 p-3 rounded-lg mr-4 text-xl">📊</span>
                      <span className="text-lg">Analiza resultados</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-white/20 p-3 rounded-lg mr-4 text-xl">🎯</span>
                      <span className="text-lg">Personaliza objetivos</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300 text-lg font-semibold">
                      Acceder al Centro
                    </button>
                  </div>
                </div>
              </div>

              {/* Paneles Fila 3 */}
              <div className="row-start-3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-gray-900 font-[Poppins] mb-3">Análisis</h4>
                <p className="text-gray-600 font-[Inter] text-base">Datos en tiempo real</p>
              </div>

              <div className="row-start-3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-gray-900 font-[Poppins] mb-3">Puntos</h4>
                <p className="text-gray-600 font-[Inter] text-base">Sistema flexible</p>
              </div>

              {/* Paneles Fila 4 */}
              <div className="row-start-4 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-gray-900 font-[Poppins] mb-3">Automatización</h4>
                <p className="text-gray-600 font-[Inter] text-base">Reglas inteligentes</p>
              </div>

              <div className="row-start-4 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-gray-900 font-[Poppins] mb-3">Integración</h4>
                <p className="text-gray-600 font-[Inter] text-base">APIs robustas</p>
              </div>
            </div>

            {/* Contenido del lado derecho */}
            <div className="lg:sticky lg:top-32 space-y-8 max-w-xl">
              <h2 className="text-5xl font-bold text-gray-900 font-[Poppins] leading-tight">
                Diseñado para hacer crecer tu{' '}
                <span className="text-green-500">programa de lealtad</span>
              </h2>
              <p className="text-xl text-gray-600 font-[Inter] leading-relaxed">
                Nuestra plataforma integra todas las herramientas que necesitas para crear y escalar tu programa de recompensas.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Interfaz Intuitiva',
                    description: 'Diseñada para ser fácil de usar desde el primer día'
                  },
                  {
                    title: 'Datos en Tiempo Real',
                    description: 'Toma decisiones informadas con análisis instantáneos'
                  },
                  {
                    title: 'Escalabilidad Total',
                    description: 'Crece sin límites, nos adaptamos a tu negocio'
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

      {/* Sección Testimonios */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-[Poppins] mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Historias reales de empresas que han transformado su programa de lealtad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ana Martínez',
                role: 'CEO de CaféXpress',
                image: '/testimonials/ana.jpg',
                comment: 'Incrementamos la retención de clientes en un 45% en solo 3 meses. La implementación fue sorprendentemente sencilla.',
                rating: 5
              },
              {
                name: 'Carlos Ruiz',
                role: 'Director de Marketing, TechStore',
                image: '/testimonials/carlos.jpg',
                comment: 'La flexibilidad del programa nos permite adaptarnos a las necesidades cambiantes de nuestros clientes.',
                rating: 5
              },
              {
                name: 'Laura Sánchez',
                role: 'Fundadora de BeautyClub',
                image: '/testimonials/laura.jpg',
                comment: 'Los análisis en tiempo real nos ayudan a tomar decisiones informadas sobre nuestras campañas.',
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-green-500/5 rounded-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img
                      className="h-14 w-14 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 font-[Poppins]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 font-[Inter]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-[Inter] mb-6">{testimonial.comment}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-green-500' : 'text-gray-300'
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
            ))}
          </div>
        </div>
      </section>

      {/* Sección Planes */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-[Poppins] mb-4">
              Planes que se adaptan a tu negocio
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
                  'Soporte por email'
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
                  'Personalización de recompensas'
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
                className={`relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                  plan.isPopular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 font-[Poppins] mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    {plan.price !== 'Personalizado' && <span className="text-gray-600 text-2xl">$</span>}
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Personalizado' && <span className="text-gray-600 ml-2">/mes</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl text-lg font-semibold transition-colors duration-300 ${
                    plan.isPopular
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Comenzar ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Preguntas Frecuentes */}
      <section className="bg-white py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-[Poppins] mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Todo lo que necesitas saber sobre nuestra plataforma
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: '¿Cómo funciona el programa de recompensas?',
                answer: 'Nuestro programa permite a tus clientes acumular puntos por cada compra, los cuales pueden canjear por recompensas personalizadas. Tú defines las reglas y los premios.'
              },
              {
                question: '¿Cuánto tiempo toma la implementación?',
                answer: 'La implementación básica toma menos de 1 hora. Para integraciones más complejas con sistemas existentes, nuestro equipo te guiará en el proceso que típicamente toma 1-2 días.'
              },
              {
                question: '¿Puedo personalizar las recompensas?',
                answer: 'Sí, tienes control total sobre las recompensas. Puedes crear diferentes niveles, establecer múltiples tipos de beneficios y ajustar las reglas según tus necesidades.'
              },
              {
                question: '¿Qué tipo de soporte ofrecen?',
                answer: 'Ofrecemos soporte por email 24/7 para todos los planes. Los planes Profesional y Empresarial incluyen soporte prioritario y acceso a un gerente de cuenta dedicado.'
              },
              {
                question: '¿Puedo cambiar de plan más adelante?',
                answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.'
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <button
                  className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => {
                    const answer = document.getElementById(`faq-answer-${index}`);
                    const allAnswers = document.querySelectorAll('[id^="faq-answer-"]');
                    allAnswers.forEach((el) => {
                      if (el.id !== `faq-answer-${index}`) {
                        el.classList.add('hidden');
                      }
                    });
                    answer.classList.toggle('hidden');
                  }}
                >
                  <span className="text-lg font-semibold text-gray-900 font-[Poppins]">{faq.question}</span>
                  <svg
                    className="w-6 h-6 text-gray-500 transform group-hover:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-answer-${index}`} className="hidden px-6 py-4">
                  <p className="text-gray-600 font-[Inter]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/10 blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-white font-[Poppins] mb-6">
                Comienza tu viaje hacia la lealtad del cliente
              </h2>
              <p className="text-xl text-gray-300 font-[Inter] mb-8 max-w-2xl mx-auto">
                Únete a las empresas que están transformando la manera de recompensar a sus clientes
              </p>
              <button className="px-8 py-4 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-green-500/25">
                Prueba Gratis por 14 Días
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;    