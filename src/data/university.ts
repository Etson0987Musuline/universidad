export interface Institucion {
  nombre: string;
  sigla: string;
  descripcion: string;
  historia: string;
  mision: string;
  vision: string;
  valores: string[];
  objetivos: string[];
  direccion: string;
  telefono: string;
  correo: string;
  sitio_web: string;
}

export interface Autoridad {
  id: number;
  nombre: string;
  cargo: string;
  biografia: string;
  foto_url: string;
  fecha_inicio: string;
  orden: number;
}

export interface Facultad {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  decano: string;
  activa: boolean;
  orden: number;
  carreras: number[];
}

export interface Carrera {
  id: number;
  facultad_id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  perfil_profesional: string;
  campo_laboral: string;
  duracion_semestres: number;
  activa: boolean;
  competencias: string[];
}

export interface Noticia {
  id: number;
  titulo: string;
  slug: string;
  resumen: string;
  contenido: string;
  imagen_url: string;
  autor: string;
  estado: 'publicada' | 'borrador' | 'retirada';
  destacada: boolean;
  fecha_publicacion: string;
  categorias: string[];
}

export interface Convocatoria {
  id: number;
  titulo: string;
  slug: string;
  descripcion: string;
  modalidad: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: 'publicada' | 'finalizada' | 'borrador';
  requisitos: string[];
}

export interface Documento {
  id: number;
  categoria: string;
  titulo: string;
  descripcion: string;
  archivo_url: string;
  nombre_archivo: string;
  fecha_documento: string;
  publicado: boolean;
}

export const institucion: Institucion = {
  nombre: "Universidad Nacional del Centro",
  sigla: "UNC",
  descripcion: "Institución de educación superior comprometida con la formación integral de profesionales, la investigación científica y la extensión cultural al servicio de la sociedad.",
  historia: `La Universidad Nacional del Centro fue fundada el 15 de marzo de 1962, en respuesta a la creciente demanda de educación superior en la región. Sus fundadores, un grupo de intelectuales y líderes comunitarios, envisionaron una institución que formara profesionales capaces de impulsar el desarrollo local y nacional.

En sus primeros años, la universidad inició sus actividades con tres facultades: Ciencias, Letras y Derecho. La primera promoción de egresados se graduó en 1967, marcando un hito en la educación superior de la región.

Durante las décadas de 1970 y 1980, la universidad experimentó un crecimiento significativo, incorporando nuevas facultades y programas de posgrado. Se construyeron los primeros laboratorios de investigación y se establecieron convenios con universidades internacionales.

En la década de 1990, la institución modernizó su infraestructura tecnológica y amplió su oferta académica con carreras en ingeniería, ciencias de la salud y ciencias sociales. Se creó el sistema de bibliotecas digitales y se implementaron los primeros programas de educación a distancia.

En el siglo XXI, la universidad se ha consolidado como un referente académico y de investigación. Ha obtenido acreditaciones internacionales, incrementado su producción científica y fortalecido su vinculación con la sociedad a través de proyectos de extensión y responsabilidad social universitaria.

Hoy, la Universidad Nacional del Centro cuenta con más de 25,000 estudiantes, 1,200 docentes y una comunidad de más de 80,000 egresados que contribuyen al desarrollo del país en diversos campos del conocimiento.`,
  mision: "Formar profesionales competentes, éticos y comprometidos con el desarrollo sostenible de la sociedad, mediante la excelencia académica, la investigación innovadora y la extensión universitaria, promoviendo valores humanísticos y respeto por la diversidad cultural.",
  vision: "Ser reconocida al 2030 como una universidad líder en la formación integral de profesionales, la generación de conocimiento científico y tecnológico, y la transformación social, con estándares de calidad internacional y un firme compromiso con el desarrollo sostenible de la región y el país.",
  valores: [
    "Excelencia académica",
    "Ética y transparencia",
    "Responsabilidad social",
    "Innovación y creatividad",
    "Inclusión y diversidad",
    "Compromiso con el desarrollo sostenible",
    "Libertad de pensamiento",
    "Solidaridad"
  ],
  objetivos: [
    "Garantizar una formación académica de calidad que responda a las necesidades del entorno.",
    "Promover la investigación científica, tecnológica y humanística.",
    "Fomentar la extensión universitaria y la vinculación con la sociedad.",
    "Fortalecer la internacionalización de la institución.",
    "Desarrollar infraestructura y recursos tecnológicos de vanguardia.",
    "Promover la igualdad de oportunidades y la inclusión social.",
    "Contribuir al desarrollo sostenible de la región y el país."
  ],
  direccion: "Av. Universitaria 1234, Ciudad Universitaria",
  telefono: "+51 (066) 123-456",
  correo: "informes@unc.edu.pe",
  sitio_web: "www.unc.edu.pe"
};

export const autoridades: Autoridad[] = [
  {
    id: 1,
    nombre: "Dr. Carlos Mendoza Ríos",
    cargo: "Rector",
    biografia: "Doctor en Ciencias por la Universidad Nacional Mayor de San Marcos. Más de 30 años de experiencia en gestión académica universitaria. Autor de más de 40 publicaciones científicas en revistas indexadas.",
    foto_url: "",
    fecha_inicio: "2023-01-01",
    orden: 1
  },
  {
    id: 2,
    nombre: "Dra. María Elena Quispe Huamán",
    cargo: "Vicerrectora Académica",
    biografia: "Doctora en Educación con especialidad en Gestión Universitaria. Investigadora principal reconocida por CONCYTEC. Experiencia de 25 años en docencia universitaria.",
    foto_url: "",
    fecha_inicio: "2023-01-15",
    orden: 2
  },
  {
    id: 3,
    nombre: "Dr. Roberto Sánchez Palomino",
    cargo: "Vicerrector de Investigación",
    biografia: "Doctor en Ingeniería de Sistemas. Director de más de 15 proyectos de investigación financiados. Miembro del comité editorial de tres revistas científicas internacionales.",
    foto_url: "",
    fecha_inicio: "2023-01-15",
    orden: 3
  },
  {
    id: 4,
    nombre: "Mg. Ana Lucía Torres Vega",
    cargo: "Secretaria General",
    biografia: "Magíster en Administración Pública. Especialista en gestión institucional y normativa universitaria. 20 años de trayectoria en administración pública.",
    foto_url: "",
    fecha_inicio: "2023-02-01",
    orden: 4
  }
];

export const facultades: Facultad[] = [
  {
    id: 1, nombre: "Facultad de Ingeniería de Sistemas e Informática", slug: "ingenieria-sistemas",
    descripcion: "Forma profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras para las organizaciones y la sociedad.",
    decano: "Dr. Jorge Ramírez López", activa: true, orden: 1, carreras: [1, 2]
  },
  {
    id: 2, nombre: "Facultad de Ciencias de la Salud", slug: "ciencias-salud",
    descripcion: "Dedicada a la formación de profesionales en el área de la salud, con enfoque en la prevención, diagnóstico y tratamiento de enfermedades.",
    decano: "Dra. Patricia Flores Medina", activa: true, orden: 2, carreras: [3, 4]
  },
  {
    id: 3, nombre: "Facultad de Ciencias Empresariales", slug: "ciencias-empresariales",
    descripcion: "Prepara líderes empresariales con visión estratégica, capaces de gestionar organizaciones en entornos competitivos y globalizados.",
    decano: "Dr. Luis García Paredes", activa: true, orden: 3, carreras: [5, 6]
  },
  {
    id: 4, nombre: "Facultad de Ciencias Sociales", slug: "ciencias-sociales",
    descripcion: "Forma profesionales comprometidos con el análisis y la transformación de la realidad social, promoviendo el desarrollo humano y la justicia social.",
    decano: "Dra. Carmen Rojas Espinoza", activa: true, orden: 4, carreras: [7, 8]
  },
  {
    id: 5, nombre: "Facultad de Ingeniería Civil", slug: "ingenieria-civil",
    descripcion: "Forma ingenieros civiles con competencias para planificar, diseñar, construir y gestionar infraestructuras sostenibles.",
    decano: "Dr. Miguel Ángel Torres Díaz", activa: true, orden: 5, carreras: [9]
  },
  {
    id: 6, nombre: "Facultad de Educación", slug: "educacion",
    descripcion: "Dedicada a la formación de educadores innovadores capaces de transformar la enseñanza y promover el aprendizaje significativo.",
    decano: "Dra. Rosa María Chávez Soto", activa: true, orden: 6, carreras: [10]
  }
];

export const carreras: Carrera[] = [
  {
    id: 1, facultad_id: 1, nombre: "Ingeniería de Sistemas", slug: "ingenieria-de-sistemas",
    descripcion: "Forma ingenieros capaces de diseñar, desarrollar e implementar sistemas de información y soluciones tecnológicas para resolver problemas complejos de las organizaciones.",
    perfil_profesional: "El egresado de Ingeniería de Sistemas es un profesional con sólida formación en ciencias de la computación, desarrollo de software, gestión de proyectos tecnológicos y arquitectura de sistemas. Posee capacidad para liderar equipos multidisciplinarios y proponer soluciones innovadoras.",
    campo_laboral: "Empresas de tecnología, consultoras de software, instituciones financieras, sector público, startups tecnológicas, docencia e investigación universitaria.",
    duracion_semestres: 10, activa: true,
    competencias: ["Desarrollo de software", "Gestión de bases de datos", "Inteligencia artificial", "Ciberseguridad", "Gestión de proyectos TI", "Arquitectura de software", "Cloud computing"]
  },
  {
    id: 2, facultad_id: 1, nombre: "Ingeniería de Software", slug: "ingenieria-de-software",
    descripcion: "Especializada en el diseño, construcción, mantenimiento y gestión de sistemas de software de alta calidad para diversos sectores productivos.",
    perfil_profesional: "Profesional con dominio de metodologías ágiles, patrones de diseño, pruebas de software y aseguramiento de calidad. Capaz de gestionar el ciclo de vida completo del software.",
    campo_laboral: "Fábricas de software, empresas de desarrollo, consultoras tecnológicas, áreas de TI de organizaciones públicas y privadas.",
    duracion_semestres: 10, activa: true,
    competencias: ["Metodologías ágiles", "Patrones de diseño", "Pruebas de software", "DevOps", "UX/UI", "Arquitectura de microservicios", "Gestión de calidad"]
  },
  {
    id: 3, facultad_id: 2, nombre: "Medicina Humana", slug: "medicina-humana",
    descripcion: "Forma médicos cirujanos con competencias clínicas, científicas y humanísticas para atender las necesidades de salud de la población.",
    perfil_profesional: "Médico cirujano con formación integral en ciencias biomédicas y clínicas, capaz de diagnosticar, tratar y prevenir enfermedades con enfoque humanístico y ético.",
    campo_laboral: "Hospitales, clínicas, centros de salud, investigación biomédica, docencia universitaria, salud pública.",
    duracion_semestres: 14, activa: true,
    competencias: ["Diagnóstico clínico", "Cirugía general", "Medicina preventiva", "Investigación biomédica", "Ética médica", "Salud pública", "Gestión hospitalaria"]
  },
  {
    id: 4, facultad_id: 2, nombre: "Enfermería", slug: "enfermeria",
    descripcion: "Forma profesionales de enfermería con competencias para el cuidado integral de la salud individual, familiar y comunitaria.",
    perfil_profesional: "Profesional de enfermería con formación científica y humanística, capaz de brindar cuidados de calidad en todos los niveles de atención en salud.",
    campo_laboral: "Hospitales, centros de salud, clínicas, instituciones educativas, organizaciones no gubernamentales, atención domiciliaria.",
    duracion_semestres: 10, activa: true,
    competencias: ["Cuidado integral", "Educación en salud", "Investigación en enfermería", "Gestión de servicios de salud", "Atención comunitaria", "Práctica basada en evidencia"]
  },
  {
    id: 5, facultad_id: 3, nombre: "Administración", slug: "administracion",
    descripcion: "Forma administradores con visión estratégica capaces de gestionar organizaciones eficientemente en contextos nacionales e internacionales.",
    perfil_profesional: "Administrador con sólidos conocimientos en gestión empresarial, finanzas, marketing, recursos humanos y operaciones, con capacidad de liderazgo y toma de decisiones.",
    campo_laboral: "Empresas privadas, instituciones públicas, consultoras, emprendimiento propio, organismos internacionales.",
    duracion_semestres: 10, activa: true,
    competencias: ["Gestión estratégica", "Finanzas corporativas", "Marketing digital", "Gestión del talento", "Emprendimiento", "Análisis financiero", "Logística y operaciones"]
  },
  {
    id: 6, facultad_id: 3, nombre: "Contabilidad", slug: "contabilidad",
    descripcion: "Forma contadores públicos con dominio técnico, ético y normativo para la gestión financiera y tributaria de las organizaciones.",
    perfil_profesional: "Contador público con dominio de normas contables y tributarias, auditoría, gestión financiera y tecnología aplicada a la contabilidad.",
    campo_laboral: "Empresas de auditoría, departamentos financieros, consultoría tributaria, sector público, ejercicio independiente.",
    duracion_semestres: 10, activa: true,
    competencias: ["Normas contables", "Auditoría", "Tributación", "Gestión financiera", "NIIF", "Tecnología contable", "Control interno"]
  },
  {
    id: 7, facultad_id: 4, nombre: "Comunicación Social", slug: "comunicacion-social",
    descripcion: "Forma comunicadores sociales capaces de producir contenidos informativos y de opinión para diversos medios y plataformas digitales.",
    perfil_profesional: "Comunicador social con dominio de técnicas periodísticas, producción audiovisual, comunicación digital y gestión de medios.",
    campo_laboral: "Medios de comunicación, agencias de publicidad, gabinetes de comunicación, producción audiovisual, medios digitales.",
    duracion_semestres: 10, activa: true,
    competencias: ["Periodismo", "Producción audiovisual", "Comunicación digital", "Redacción creativa", "Gestión de redes sociales", "Fotografía", "Relaciones públicas"]
  },
  {
    id: 8, facultad_id: 4, nombre: "Trabajo Social", slug: "trabajo-social",
    descripcion: "Forma trabajadores sociales comprometidos con la promoción del bienestar social y la transformación de realidades vulnerables.",
    perfil_profesional: "Profesional con capacidad de intervención social, diseño de programas sociales, investigación aplicada y gestión de políticas públicas.",
    campo_laboral: "Instituciones públicas, ONG, programas sociales, empresas (responsabilidad social), centros de salud, sistema de justicia.",
    duracion_semestres: 10, activa: true,
    competencias: ["Intervención social", "Políticas públicas", "Gestión de proyectos sociales", "Investigación social", "Mediación", "Desarrollo comunitario"]
  },
  {
    id: 9, facultad_id: 5, nombre: "Ingeniería Civil", slug: "ingenieria-civil",
    descripcion: "Forma ingenieros civiles con competencias para planificar, diseñar, construir y mantener infraestructuras sostenibles.",
    perfil_profesional: "Ingeniero civil con formación en estructuras, geotecnia, hidráulica, transporte y gestión de proyectos de construcción.",
    campo_laboral: "Empresas constructoras, consultoras de ingeniería, sector público (transportes, vivienda), supervisión de obras, docencia.",
    duracion_semestres: 12, activa: true,
    competencias: ["Estructuras", "Geotecnia", "Hidráulica", "Transporte", "Gestión de proyectos", "BIM", "Construcción sostenible"]
  },
  {
    id: 10, facultad_id: 6, nombre: "Ciencias de la Educación", slug: "ciencias-educacion",
    descripcion: "Forma educadores innovadores con competencias pedagógicas para transformar la enseñanza en todos los niveles del sistema educativo.",
    perfil_profesional: "Educador con dominio de teorías pedagógicas, diseño curricular, evaluación del aprendizaje, tecnología educativa e investigación educativa.",
    campo_laboral: "Instituciones educativas, ministerio de educación, editoriales, organizaciones educativas, investigación pedagógica.",
    duracion_semestres: 10, activa: true,
    competencias: ["Pedagogía", "Diseño curricular", "Tecnología educativa", "Evaluación", "Investigación educativa", "Gestión educativa", "Inclusión educativa"]
  }
];

export const noticias: Noticia[] = [
  {
    id: 1, titulo: "Inicio del proceso de admisión 2026-I", slug: "admision-2026-i",
    resumen: "La Universidad Nacional del Centro abre sus puertas para nuevos estudiantes en el periodo académico 2026-I.",
    contenido: "La Oficina de Admisión informa a todos los postulantes que se encuentra abierto el proceso de admisión para el periodo académico 2026-I. Las inscripciones estarán disponibles del 15 de febrero al 15 de marzo de 2026. Se ofrecen más de 2,500 vacantes en las diferentes carreras profesionales.\n\nLos interesados pueden consultar los requisitos, modalidades y cronograma en la sección de Admisión de nuestro portal institucional.",
    imagen_url: "", autor: "Oficina de Admisión", estado: "publicada", destacada: true,
    fecha_publicacion: "2026-01-15", categorias: ["Admisión", "Comunicado"]
  },
  {
    id: 2, titulo: "Convenio de cooperación con la Universidad de Salamanca", slug: "convenio-salamanca",
    resumen: "Se firmó un importante convenio de cooperación interinstitucional para intercambio académico y proyectos de investigación conjunta.",
    contenido: "En un acto protocolar realizado en el auditorio principal, el Rector de nuestra universidad y el representante de la Universidad de Salamanca firmaron un convenio marco de cooperación interinstitucional. Este acuerdo permitirá el intercambio de docentes y estudiantes, la realización de proyectos de investigación conjuntos y la movilidad académica entre ambas instituciones.",
    imagen_url: "", autor: "Oficina de Relaciones Internacionales", estado: "publicada", destacada: true,
    fecha_publicacion: "2026-01-10", categorias: ["Internacional", "Investigación"]
  },
  {
    id: 3, titulo: "Inauguración del nuevo laboratorio de Inteligencia Artificial", slug: "laboratorio-ia",
    resumen: "La Facultad de Ingeniería de Sistemas inauguró un laboratorio equipado con tecnología de punta para investigación en IA.",
    contenido: "Con la presencia de autoridades universitarias e invitados especiales, se inauguró el Laboratorio de Inteligencia Artificial y Ciencia de Datos de la Facultad de Ingeniería de Sistemas. Este espacio cuenta con equipos de cómputo de alto rendimiento, GPUs para entrenamiento de modelos y software especializado.",
    imagen_url: "", autor: "Facultad de Ingeniería de Sistemas", estado: "publicada", destacada: true,
    fecha_publicacion: "2026-01-08", categorias: ["Investigación", "Tecnología"]
  },
  {
    id: 4, titulo: "Resultados del ranking universitario 2025", slug: "ranking-2025",
    resumen: "Nuestra universidad mejora su posición en el ranking nacional gracias a la producción científica y la calidad académica.",
    contenido: "Según el último ranking publicado por la SUNEDU, nuestra universidad ha mejorado su posición nacional, destacando en los indicadores de investigación, infraestructura y empleabilidad de egresados. Este logro es resultado del esfuerzo conjunto de toda la comunidad universitaria.",
    imagen_url: "", autor: "Oficina de Imagen Institucional", estado: "publicada", destacada: false,
    fecha_publicacion: "2026-01-05", categorias: ["Institucional"]
  },
  {
    id: 5, titulo: "Programa de becas para estudiantes destacados", slug: "becas-destacados",
    resumen: "Se anuncia un nuevo programa de becas que beneficiará a los estudiantes con mejor rendimiento académico del periodo.",
    contenido: "El Consejo Universitario aprobó la creación del Programa de Becas para Estudiantes Destacados, que otorgará beneficios económicos y académicos a los estudiantes que mantengan un rendimiento superior al tercio superior de su promoción. Las bases del concurso están disponibles en la página de Bienestar Universitario.",
    imagen_url: "", autor: "Vicerrectorado Académico", estado: "publicada", destacada: false,
    fecha_publicacion: "2025-12-20", categorias: ["Bienestar", "Comunicado"]
  },
  {
    id: 6, titulo: "Congreso Internacional de Ciencias de la Salud", slug: "congreso-salud",
    resumen: "La Facultad de Ciencias de la Salud organiza el III Congreso Internacional con ponentes de reconocido prestigio.",
    contenido: "Del 10 al 12 de abril se realizará el III Congreso Internacional de Ciencias de la Salud, con la participación de ponentes nacionales e internacionales. Los ejes temáticos incluyen salud pública, innovación en atención clínica y determinantes sociales de la salud.",
    imagen_url: "", autor: "Facultad de Ciencias de la Salud", estado: "publicada", destacada: false,
    fecha_publicacion: "2025-12-15", categorias: ["Eventos", "Investigación"]
  }
];

export const convocatorias: Convocatoria[] = [
  {
    id: 1, titulo: "Admisión Ordinaria 2026-I", slug: "admision-ordinaria-2026-1",
    descripcion: "Proceso de admisión ordinaria para el periodo académico 2026-I. Se ofrecen vacantes en todas las carreras profesionales.",
    modalidad: "Examen Ordinario",
    fecha_inicio: "2026-02-15", fecha_fin: "2026-03-15", estado: "publicada",
    requisitos: [
      "Partida de nacimiento original",
      "DNI vigente (copia)",
      "Foto tamaño carnet (4 unidades)",
      "Certificado de estudios de educación secundaria",
      "Recibo de pago por derecho de inscripción",
      "Declaración jurada de datos personales"
    ]
  },
  {
    id: 2, titulo: "Admisión por CEPRE 2026-I", slug: "admision-cepre-2026-1",
    descripcion: "Ingreso directo para egresados del Centro Preuniversitario que hayan aprobado el ciclo correspondiente.",
    modalidad: "CEPRE",
    fecha_inicio: "2026-02-01", fecha_fin: "2026-02-28", estado: "publicada",
    requisitos: [
      "Constancia de egresado del CEPRE",
      "DNI vigente (copia)",
      "Foto tamaño carnet (4 unidades)",
      "Certificado de estudios de educación secundaria",
      "Recibo de pago por derecho de inscripción"
    ]
  },
  {
    id: 3, titulo: "Admisión por Traslato Externo 2026-I", slug: "traslato-externo-2026-1",
    descripcion: "Proceso para estudiantes de otras universidades que desean continuar sus estudios en nuestra institución.",
    modalidad: "Traslato Externo",
    fecha_inicio: "2026-03-01", fecha_fin: "2026-03-31", estado: "publicada",
    requisitos: [
      "Certificado de estudios universitarios legalizado",
      "Sílabos de los cursos aprobados",
      "Constancia de matrícula vigente",
      "DNI vigente (copia)",
      "Recibo de pago por derecho de inscripción",
      "Carta de exposición de motivos"
    ]
  }
];

export const documentos: Documento[] = [
  {
    id: 1, categoria: "Admisión", titulo: "Prospecto de Admisión 2026-I",
    descripcion: "Documento oficial con toda la información del proceso de admisión ordinario.",
    archivo_url: "#", nombre_archivo: "prospecto-admision-2026-I.pdf",
    fecha_documento: "2026-01-10", publicado: true
  },
  {
    id: 2, categoria: "Reglamentos", titulo: "Reglamento de Grados y Títulos",
    descripcion: "Normativa vigente para la obtención de grados académicos y títulos profesionales.",
    archivo_url: "#", nombre_archivo: "reglamento-grados-titulos-2025.pdf",
    fecha_documento: "2025-06-15", publicado: true
  },
  {
    id: 3, categoria: "Reglamentos", titulo: "Reglamento de Estudios",
    descripcion: "Normas que regulan la vida académica de los estudiantes universitarios.",
    archivo_url: "#", nombre_archivo: "reglamento-estudios-2024.pdf",
    fecha_documento: "2024-03-01", publicado: true
  },
  {
    id: 4, categoria: "Admisión", titulo: "Cronograma de Admisión 2026-I",
    descripcion: "Fechas importantes del proceso de admisión para el periodo 2026-I.",
    archivo_url: "#", nombre_archivo: "cronograma-admision-2026-I.pdf",
    fecha_documento: "2026-01-05", publicado: true
  },
  {
    id: 5, categoria: "Institucional", titulo: "Plan Estratégico Institucional 2024-2028",
    descripcion: "Documento de planificación estratégica de la universidad.",
    archivo_url: "#", nombre_archivo: "plan-estrategico-2024-2028.pdf",
    fecha_documento: "2024-01-20", publicado: true
  },
  {
    id: 6, categoria: "Institucional", titulo: "Memoria Institucional 2025",
    descripcion: "Resumen de las actividades y logros de la universidad durante el año 2025.",
    archivo_url: "#", nombre_archivo: "memoria-institucional-2025.pdf",
    fecha_documento: "2026-01-02", publicado: true
  },
  {
    id: 7, categoria: "Trámites", titulo: "Guía de Trámites Académicos",
    descripcion: "Manual con los procedimientos y requisitos para realizar trámites académicos.",
    archivo_url: "#", nombre_archivo: "guia-tramites-academicos.pdf",
    fecha_documento: "2025-09-01", publicado: true
  }
];

export const categorias_noticias = ["Todas", "Admisión", "Institucional", "Investigación", "Eventos", "Internacional", "Tecnología", "Bienestar", "Comunicado"];

export const categorias_documentos = ["Todas", "Admisión", "Reglamentos", "Institucional", "Trámites"];
