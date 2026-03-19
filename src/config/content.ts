/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Servicios profesionales de desocupación en {{city}}',
    h1main:      'Vaciado de Viviendas y Comercios',
    h1accent:    'en {{city}} y alrededores',
    description: 'JClean Tarragona ofrece soluciones integrales para el vaciado de pisos, locales comerciales y fincas en toda la provincia de Tarragona. Proporcionamos un servicio rápido, eficiente y confidencial, adaptado a sus necesidades en Baix Ebre, Priorat o Terra Alta.',
    badge1:      'Tasación gratuita en 30 minutos',
    badge2:      'Más de 15 años de experiencia profesional',
    badge3:      'Reciclaje y gestión responsable de residuos',
    badge4:      'Servicio a toda la provincia de Tarragona',
    cardStat:    '+2000',
    cardLabel:   'vaciados realizados en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desokupación integral y legal',
      description: 'Nos encargamos del vaciado integral de viviendas, cumpliendo con todas las normativas legales. Gestionamos los trámites y permisos necesarios para un proceso eficiente y sin complicaciones en {{city}} y sus alrededores.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y eficiencia garantizada',
      description: 'Retiramos muebles, electrodomésticos y otros objetos en 24-48 horas. Nuestro equipo trabaja de forma organizada para minimizar molestias y optimizar plazos en la zona del Camp de Tarragona.',
    },
    {
      icon: 'check',
      title:       'Gestión responsable de residuos',
      description: 'Separamos y reciclamos los materiales según su tipo, promoviendo la sostenibilidad ambiental. Colaboramos con gestores autorizados para una correcta eliminación de residuos en {{city}} y municipios colindantes.',
    },
    {
      icon: 'box',
      title:       'Servicio llave en mano completo',
      description: 'Gestionamos todo el proceso: desmontaje, carga, transporte y limpieza final. Ofrecemos un servicio completo que le libera de preocupaciones en {{city}}, Reus, Amposta y otras localidades del Baix Penedès.',
    },
    {
      icon: 'heart',
      title:       'Atención personalizada y cercana',
      description: 'Nos adaptamos a su disponibilidad y necesidades concretas. Nuestro equipo se compromete a ofrecer un trato cordial y profesional, escuchando sus requerimientos en {{city}} y la comarca.',
    },
    {
      icon: 'users',
      title:       'Equipo experimentado y cualificado',
      description: 'Contamos con un equipo de expertos cualificados con amplia experiencia en el sector del vaciado. Garantizamos un servicio impecable y eficiente en toda la provincia, desde Sant Carles de la Ràpita hasta Valls.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'vaciado-pisos',
      nombre:      'Vaciado de pisos',
      description: '¿Necesitas desocupar una vivienda en {{city}}? JClean Tarragona ofrece un vaciado integral y eficiente de pisos y apartamentos en toda la provincia, liberando el inmueble para una nueva etapa con rapidez y discreción.',
      features:    ['Retirada de muebles, electrodomésticos y enseres', 'Desinfección y limpieza básica post-vaciado', 'Gestión de residuos según normativa vigente', 'Experiencia en pisos de cualquier antigüedad', 'Servicio urgente disponible en {{city}} y alrededores'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-locales',
      nombre:      'Vaciado de locales',
      description: 'Vaciado profesional de locales comerciales en toda la zona del Tarragonès y el Baix Ebre. Desocupamos oficinas, tiendas y almacenes para reformas, alquiler o traspaso con la máxima eficiencia y sin interrumpir tu actividad más de lo necesario.',
      features:    ['Retirada de mobiliario comercial y estanterías', 'Limpieza profunda tras el vaciado', 'Desmontaje de elementos fijos y rótulos', 'Adaptación a horarios comerciales', 'Cobertura en Reus, Valls y comarcas tarraconenses'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'recogida-muebles',
      nombre:      'Recogida de muebles',
      description: 'Retiramos muebles usados a domicilio en {{city}} y municipios cercanos. Servicio rápido, económico y responsable: clasificamos los objetos para su reutilización, donación o reciclaje correctos. Sin complicaciones para el cliente.',
      features:    ['Recogida de todo tipo de mobiliario (sofás, camas, armarios)', 'Desmontaje opcional incluido', 'Transporte seguro al gestor autorizado', 'Posibilidad de donación a entidades benéficas', 'Disponible en Altafulla, Torredembarra y municipios cercanos'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'Equipo especializado en la recuperación de viviendas afectadas por el síndrome de Diógenes en {{city}} y provincia. Actuamos con total confidencialidad, respetando la dignidad del afectado y coordinándonos con servicios sociales o familiares si es necesario.',
      features:    ['Desinfección y eliminación de residuos orgánicos', 'Recuperación del espacio habitable', 'Atención discreta y sensible al afectado', 'Trabajo con autorización judicial o médica si procede', 'Certificado de desinfección al finalizar'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-vaciado',
      nombre:      'Limpieza post vaciado',
      description: 'Después de cualquier vaciado, tu propiedad merece quedar impecable. JClean Tarragona realiza limpiezas a fondo en {{city}} y comarca, eliminando suciedad, manchas persistentes y olores para dejar el inmueble listo para alquilar o vender.',
      features:    ['Limpieza profunda de suelos, paredes y techos', 'Eliminación de manchas y olores residuales', 'Desinfección completa del espacio', 'Preparación del inmueble para alquiler o venta', 'Disponible con cita previa en Vila-seca, Cambrils y alrededores'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'pintura-express',
      nombre:      'Pintura express',
      description: 'Renovamos el aspecto de tu piso o local en {{city}} con un servicio de pintura express profesional y a buen precio. Trabajamos rápido y limpio para que puedas recuperar el inmueble en el menor tiempo posible.',
      features:    ['Pinturas de alta calidad y larga duración', 'Personal cualificado y experimentado', 'Trabajos rápidos con mínima perturbación', 'Adaptación a tus preferencias de color y acabado', 'Disponible para comunidades de vecinos y particulares'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Salou',
      service:  'Vaciado de piso completo',
      quote:    'JC Tarragona fue una solución fantástica para el vaciado del piso de mi abuela en Salou. Fueron rápidos, profesionales y se llevaron todo sin problemas. ¡Muy recomendable!',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Reus',
      service:  'Vaciado de local comercial',
      quote:    'Necesitaba vaciar un local comercial en Reus con urgencia. El equipo de JC Tarragona llegó a tiempo, desmontaron todo el mobiliario y lo cargaron sin causar daños. ¡Excelente servicio!',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Tarragona ciudad',
      service:  'Recogida de muebles',
      quote:    'Me ofrecieron un precio muy competitivo para la recogida de algunos muebles viejos en mi casa en Tarragona. Fueron puntuales y eficientes. ¡Muy contenta con el servicio!',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Constantí',
      service:  'Vaciado de piso completo',
      quote:    'He utilizado los servicios de JC Tarragona varias veces para vaciar propiedades. Siempre son profesionales, rápidos y respetuosos.  ¡Los recomendaré a mis amigos!',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Vaciado básico (hasta 5m³)',
      precio:    'desde 180 €',
      highlight: false,
      features:  ['Desmontaje de muebles pequeños', 'Retirada de enseres básicos', 'Transporte a vertedero autorizado'],
    },
    {
      tipo:      'Vaciado estándar (5-15m³)',
      precio:    'desde 350 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Desmontaje completo de mobiliario', 'Recogida de electrodomésticos y enseres voluminosos', 'Transporte a gestor autorizado', 'Limpieza básica del espacio'],
    },
    {
      tipo:      'Vaciado integral (más de 15m³)',
      precio:    'Presupuesto personalizado',
      highlight: false,
      badge:     'Más solicitado',
      features:  ['Desmontaje complejo y especializado', 'Recogida de objetos de valor o difícil manipulación', 'Transporte a gestor autorizado', 'Limpieza profunda del espacio', 'Gestión de residuos especiales'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta vaciar un piso en {{city}}?',
      respuesta: 'El precio varía según el tamaño del piso, la cantidad de muebles y objetos a retirar, y las condiciones de acceso. Un piso pequeño puede costar desde 180€, mientras que uno más grande podría superar los 1200€.  Solicite un presupuesto sin compromiso para obtener una tasación precisa.',
    },
    {
      pregunta:  '¿Cuánto tarda el vaciado de un local en {{city}}?',
      respuesta: 'El tiempo necesario depende del volumen de trabajo. Un local pequeño puede tardar entre 2 y 4 horas, mientras que uno más grande podría requerir un día completo. Trabajamos con la máxima rapidez para minimizar las interrupciones.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de recogida de muebles en {{city}}?',
      respuesta: 'Incluye el desmontaje (si es necesario), la carga de los muebles, el transporte hasta un punto de reciclaje o vertedero autorizado y la limpieza del espacio vacío.  No incluimos la retirada de residuos peligrosos como amianto.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca de {{city}}?',
      respuesta: 'Sí, cubrimos toda la provincia de Tarragona: {{city}}, Reus, Amposta, Valls, Salou, Cambrils, Tortosa y muchos otros municipios.  Consulte nuestra área de cobertura para confirmar si su localidad está incluida.',
    },
    {
      pregunta:  '¿Qué necesito preparar antes del vaciado?',
      respuesta: 'Es recomendable retirar objetos personales de valor y asegurar que el acceso al local o piso sea fácil para nuestro equipo. Si hay muebles pesados, informe con antelación para poder planificar adecuadamente el trabajo.',
    },
    {
      pregunta:  '¿Tenéis seguro de responsabilidad civil?',
      respuesta: 'Sí, contamos con un seguro de responsabilidad civil que cubre cualquier daño accidental a personas o propiedades durante la ejecución del servicio.  Esto garantiza su tranquilidad y seguridad.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y presupuesto gratuito',
      descripcion: 'Llámenos o envíenos un mensaje para solicitar un presupuesto sin compromiso. Nuestro equipo le atenderá rápidamente y responderá a todas sus preguntas sobre el servicio en {{city}}.',
    },
    {
      titulo:      '2. Evaluación del trabajo',
      descripcion: 'Uno de nuestros técnicos visitará su propiedad (si es necesario) para evaluar el volumen de trabajo, las condiciones de acceso y los objetos a retirar.  Esto nos permite ofrecerle un presupuesto preciso y personalizado.',
    },
    {
      titulo:      '3. Planificación y ejecución del vaciado',
      descripcion: 'En base al presupuesto aprobado, programamos la fecha y hora del vaciado en coordinación con usted. Nuestro equipo se encargará de desmontar, cargar y transportar los objetos a un gestor autorizado.',
    },
    {
      titulo:      '4. Limpieza final y documentación',
      descripcion: 'Una vez completado el vaciado, realizaremos una limpieza básica del espacio vacío. Le proporcionaremos la documentación que acredite la correcta gestión de los residuos.',
    }
  ],

} as const;

export type Content = typeof content;
