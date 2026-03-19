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
    eyebrow:     'Expertos en desahucios y vaciados en {{city}}',
    h1main:      'Vaciado de Pisos y Locales',
    h1accent:    'en {{city}} y toda la provincia de Tarragona',
    description: 'En JC Tarragona, nos encargamos del desalojo integral de pisos, locales comerciales y propiedades en toda la provincia de Tarragona. Ofrecemos un servicio ágil, profesional y discreto, adaptado a sus necesidades en el Baix Ebre, Priorat o Terra Alta.',
    badge1:      'Presupuesto rápido en 30 minutos',
    badge2:      'Más de 15 años de experiencia',
    badge3:      'Gestión responsable y ecológica de residuos',
    badge4:      'Cobertura total de la provincia de Tarragona',
    cardStat:    '+2000',
    cardLabel:   'vaciados completados en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desalojos integrales y legales',
      description: 'Gestionamos la desocupación de viviendas, cumpliendo con todas las normativas legales vigentes. Nos encargamos de todos los trámites necesarios para un proceso sin complicaciones en {{city}} y sus alrededores.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y eficiencia a su servicio',
      description: 'Recogemos muebles, electrodomésticos y otros objetos en 24-48 horas. Nuestro equipo trabaja de forma ágil para minimizar las molestias y optimizar los plazos de entrega en la zona del Camp de Tarragona.',
    },
    {
      icon: 'check',
      title:       'Compromiso con el medio ambiente',
      description: 'Separamos y reciclamos los materiales según su tipo, contribuyendo a un futuro sostenible. Colaboramos con gestores autorizados para una correcta eliminación de residuos en {{city}} y municipios cercanos.',
    },
    {
      icon: 'box',
      title:       'Solución integral llave en mano',
      description: 'Nos encargamos de todo el proceso, desde el desmontaje hasta la limpieza final. Ofrecemos un servicio completo que le libera de preocupaciones en {{city}}, Reus, Amposta y otras localidades del Tarragonés.',
    },
    {
      icon: 'heart',
      title:       'Atención personalizada y cercana a usted',
      description: 'Nos adaptamos a sus horarios y necesidades específicas. Nuestro equipo se compromete a ofrecer un trato amable y profesional, escuchando atentamente sus requerimientos en {{city}} y comarca.',
    },
    {
      icon: 'users',
      title:       'Profesionales cualificados y experimentados',
      description: 'Contamos con un equipo de profesionales altamente capacitados con amplia experiencia en el sector del vaciado.  Garantizamos un servicio impecable y eficiente en toda la provincia, desde Sant Carles de la Ràpita hasta Valls.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'vaciado-pisos',
      nombre:      'Vaciado de pisos',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-locales',
      nombre:      'Vaciado de locales',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'recogida-muebles',
      nombre:      'Recog