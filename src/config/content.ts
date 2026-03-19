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
    eyebrow:     'Expertos en vaciados integrales en {{city}}',
    h1main:      'Servicio de Vaciado de Pisos y Locales',
    h1accent:    'en {{city}} y toda la provincia de Tarragona',
    description: 'En JC Tarragona, nos especializamos en el vaciado integral de pisos, locales comerciales y propiedades en toda la provincia de Tarragona. Ofrecemos un servicio ágil, profesional y discreto, adaptado a sus necesidades en el Baix Ebre, Priorat o Terra Alta.',
    badge1:      'Presupuesto rápido en 30 minutos',
    badge2:      'Más de 15 años de experiencia avalándonos',
    badge3:      'Gestión responsable y ecológica de residuos',
    badge4:      'Cobertura total de la provincia Tarragona',
    cardStat:    '+2000',
    cardLabel:   'vaciados completados en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desocupación integral y conforme a la ley',
      description: 'Gestionamos la desocupación de viviendas, cumpliendo rigurosamente con todas las normativas legales. Nos encargamos de todos los trámites necesarios para un proceso transparente y sin complicaciones en {{city}} y sus alrededores.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y eficiencia a su servicio',
      description: 'Recogemos muebles, electrodomésticos y otros objetos en un plazo de 24-48 horas. Nuestro equipo trabaja de forma organizada para minimizar las molestias y optimizar los tiempos de entrega en la zona del Camp de Tarragona.',
    },
    {
      icon: 'check',
      title:       'Compromiso con el medio ambiente',
      description: 'Separamos y reciclamos los materiales según su tipo, contribuyendo a un futuro sostenible. Colaboramos con gestores autorizados para asegurar una correcta eliminación de residuos en {{city}} y municipios cercanos.',
    },
    {
      icon: 'box',
      title:       'Solución integral llave en mano',
      description: 'Nos encargamos de cada detalle: desmontaje, carga, transporte y limpieza final. Ofrecemos un servicio completo que le libera de cualquier preocupación en {{city}}, Reus, Amposta y otras localidades del Tarragonés.',
    },
    {
      icon: 'heart',
      title:       'Atención personalizada y cercana a usted',
      description: 'Nos adaptamos a sus horarios y necesidades específicas. Nuestro equipo se compromete a ofrecer un trato amable y profesional, escuchando atentamente sus requerimientos en {{city}} y comarca.',
    },
    {
      icon: 'users',
      title:       'Profesionales cualificados y con experiencia',
      description: 'Contamos con un equipo de profesionales altamente capacitados con amplia trayectoria en el sector del vaciado. Garantizamos un servicio impecable y eficiente en toda la provincia, desde Sant Carles de la Ràpita hasta Valls.',
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