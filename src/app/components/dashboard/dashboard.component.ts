import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string; // Nueva propiedad
  goal: number;
  collected: number;
  category: string;
  deadline: Date;
  location: string; // Nueva propiedad
  creator: { // Nueva propiedad
    name: string;
    email: string;
    bio: string;
    avatar: string;
  };
  risksAndChallenges: string; // Nueva propiedad
  rewards: { // Nueva propiedad
    title: string;
    description: string;
    minimumAmount: number;
  }[];
  updates: { // Nueva propiedad
    date: Date;
    title: string;
    content: string;
  }[];
  supporters: { // Nueva propiedad
    name: string;
    amount: number;
    date: Date;
  }[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Reforestación Urbana Sostenible',
      description: 'Plantación de 10,000 árboles nativos en áreas urbanas',
      longDescription: 'Este proyecto busca combatir el cambio climático y mejorar la calidad del aire mediante la plantación estratégica de 10,000 árboles nativos en parques, avenidas y zonas marginales de la ciudad. Cada árbol será geolocalizado y monitoreado durante 3 años para asegurar su crecimiento.',
      goal: 25000,
      collected: 18450,
      category: 'Medio Ambiente',
      deadline: new Date('2025-11-30'),
      location: 'Medellín, Colombia',
      creator: {
        name: 'EcoUrban S.A.S.',
        email: 'contacto@ecourban.com',
        bio: 'Organización sin ánimo de lucro especializada en proyectos de sostenibilidad urbana con 8 años de experiencia.',
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
      },
      risksAndChallenges: 'Los principales desafíos incluyen: 1) Obtención de permisos municipales, 2) Participación comunitaria sostenida, 3) Mantenimiento a largo plazo. Hemos establecido alianzas con las autoridades locales y diseñado un programa de adopción de árboles por la comunidad.',
      rewards: [
        {
          title: 'Certificado digital',
          description: 'Certificado de participación en el proyecto con tu nombre',
          minimumAmount: 20
        },
        {
          title: 'Kit de jardinería urbana',
          description: 'Kit con herramientas básicas y guía de cuidado de plantas',
          minimumAmount: 50
        },
        {
          title: 'Taller de sostenibilidad',
          description: 'Acceso a taller exclusivo sobre jardinería urbana y compostaje',
          minimumAmount: 100
        },
        {
          title: 'Árbol con placa',
          description: 'Podrás poner tu nombre o mensaje en un árbol plantado',
          minimumAmount: 200
        }
      ],
      updates: [
        {
          date: new Date('2025-01-15'),
          title: '¡Campaña lanzada!',
          content: 'Hemos iniciado oficialmente nuestra recaudación. Primer objetivo: $5,000 para la fase de planeación.'
        },
        {
          date: new Date('2025-03-20'),
          title: 'Primera meta alcanzada',
          content: '¡Hemos superado los $15,000! Esto nos permitirá comenzar con las gestiones municipales y compra de los primeros 3,000 árboles.'
        }
      ],
      supporters: [
        {
          name: 'Carlos Andrés Gómez',
          amount: 500,
          date: new Date('2025-02-10')
        },
        {
          name: 'VerdeVivo Fundación',
          amount: 2500,
          date: new Date('2025-03-05')
        },
        {
          name: 'Ana María Rodríguez',
          amount: 200,
          date: new Date('2025-01-20')
        },
        {
          name: 'Empresas Públicas de Medellín',
          amount: 10000,
          date: new Date('2025-04-15')
        }
      ]
    },
    {
      id: 2,
      title: 'App Educativa para Niños Rurales',
      description: 'Plataforma de aprendizaje interactivo sin necesidad de internet',
      longDescription: 'Desarrollo de una aplicación educativa offline con contenidos interactivos de matemáticas, ciencias y lectura para niños en zonas rurales sin acceso estable a internet. La app funcionará en dispositivos básicos y contendrá material alineado con el currículo escolar oficial.',
      goal: 18000,
      collected: 12400,
      category: 'Tecnología',
      deadline: new Date('2025-09-15'),
      location: 'Zonas rurales de Latinoamérica',
      creator: {
        name: 'TecnoEduca',
        email: 'proyectos@tecnoseduca.org',
        bio: 'Startup social con 5 años desarrollando soluciones tecnológicas para la educación en contextos vulnerables.',
        avatar: 'https://randomuser.me/api/portraits/lego/2.jpg'
      },
      risksAndChallenges: 'Desafíos técnicos: 1) Optimización para dispositivos de gama baja, 2) Contenido adaptable a diferentes currículos regionales, 3) Distribución física en zonas remotas. Contamos con un equipo multidisciplinario y alianzas con ministerios de educación.',
      rewards: [
        {
          title: 'Agradecimiento en redes',
          description: 'Mención especial en nuestras redes sociales',
          minimumAmount: 15
        },
        {
          title: 'Acceso beta',
          description: 'Acceso anticipado a la versión beta de la aplicación',
          minimumAmount: 30
        },
        {
          title: 'Taller virtual',
          description: 'Participación en taller sobre tecnología educativa',
          minimumAmount: 75
        },
        {
          title: 'Visita a comunidad beneficiada',
          description: 'Invitación a conocer una escuela donde se implemente la solución',
          minimumAmount: 300
        }
      ],
      updates: [
        {
          date: new Date('2025-02-01'),
          title: 'Diseño inicial completado',
          content: 'Hemos finalizado el diseño de interfaz y la arquitectura técnica de la aplicación.'
        },
        {
          date: new Date('2025-04-10'),
          title: 'Primera prueba piloto',
          content: 'Realizamos prueba exitosa en 3 escuelas rurales de Colombia. Los niños respondieron muy bien a la interfaz.'
        }
      ],
      supporters: [
        {
          name: 'Fundación Educar',
          amount: 5000,
          date: new Date('2025-03-15')
        },
        {
          name: 'Laura Martínez',
          amount: 200,
          date: new Date('2025-02-28')
        },
        {
          name: 'TechForGood Inc.',
          amount: 4000,
          date: new Date('2025-04-01')
        }
      ]
    },
    {
      id: 3,
      title: 'Centro Comunitario Integral',
      description: 'Espacio multifuncional para talleres y actividades barriales',
      longDescription: 'Construcción de un centro comunitario de 300m² que incluirá: sala multiusos, biblioteca, cocina comunitaria y espacio exterior para actividades. El centro será autosostenible mediante paneles solares y sistema de captación de agua lluvia. Ofrecerá talleres de capacitación, apoyo escolar y actividades culturales.',
      goal: 45000,
      collected: 28700,
      category: 'Social',
      deadline: new Date('2026-03-01'),
      location: 'Barrio Las Flores, Bogotá',
      creator: {
        name: 'Comunidad Activa',
        email: 'comunidad.activa@example.com',
        bio: 'Colectivo vecinal con 12 años de trabajo comunitario en el barrio Las Flores.',
        avatar: 'https://randomuser.me/api/portraits/lego/3.jpg'
      },
      risksAndChallenges: 'Principales retos: 1) Obtención de licencias de construcción, 2) Participación sostenida de la comunidad, 3) Mantenimiento a largo plazo. Hemos establecido un comité gestor y acuerdos con la alcaldía local.',
      rewards: [
        {
          title: 'Agenda cultural',
          description: 'Agenda artesanal con fotos del proceso de construcción',
          minimumAmount: 25
        },
        {
          title: 'Taller gratuito',
          description: 'Participación en un taller a elección en el nuevo centro',
          minimumAmount: 50
        },
        {
          title: 'Placa conmemorativa',
          description: 'Tu nombre en la placa de inauguración del centro',
          minimumAmount: 150
        },
        {
          title: 'Sala con tu nombre',
          description: 'Una de las salas llevará tu nombre o el que elijas',
          minimumAmount: 5000
        }
      ],
      updates: [
        {
          date: new Date('2025-01-10'),
          title: 'Terreno asignado',
          content: 'La alcaldía nos ha asignado el terreno para la construcción. ¡Gran paso adelante!'
        },
        {
          date: new Date('2025-05-15'),
          title: 'Diseños arquitectónicos',
          content: 'Los planos arquitectónicos han sido aprobados por la comunidad y las autoridades.'
        }
      ],
      supporters: [
        {
          name: 'Constructora Solidaria',
          amount: 10000,
          date: new Date('2025-04-20')
        },
        {
          name: 'Vecinos Unidos',
          amount: 5700,
          date: new Date('2025-03-01')
        },
        {
          name: 'Banco Comunitario',
          amount: 8000,
          date: new Date('2025-05-10')
        }
      ]
    },
    {
      id: 4,
      title: 'Robot Asistencial para Ancianos',
      description: 'Desarrollo de asistente robótico para apoyo a adultos mayores',
      longDescription: 'Creación de un robot asistencial de bajo costo que ayude a adultos mayores con: recordatorio de medicamentos, detección de caídas, videollamadas con familiares y monitoreo básico de salud. El diseño prioriza interfaz intuitiva y será probado en residencias de ancianos antes de producción masiva.',
      goal: 35000,
      collected: 21500,
      category: 'Tecnología',
      deadline: new Date('2025-12-15'),
      location: 'Todo el país',
      creator: {
        name: 'TecnoCare Solutions',
        email: 'info@tecnocare.com',
        bio: 'Equipo de ingenieros y gerontólogos dedicados a mejorar la calidad de vida de los adultos mayores mediante tecnología.',
        avatar: 'https://randomuser.me/api/portraits/lego/4.jpg'
      },
      risksAndChallenges: 'Desafíos técnicos: 1) Precisión en detección de caídas, 2) Simplificación de interfaz para usuarios mayores, 3) Reducción de costos de producción. Hemos realizado prototipos preliminares con buenos resultados en pruebas de usabilidad.',
      rewards: [
        {
          title: 'Newsletter exclusivo',
          description: 'Acceso a actualizaciones detalladas del desarrollo',
          minimumAmount: 20
        },
        {
          title: 'Visita al laboratorio',
          description: 'Tour virtual por nuestras instalaciones de desarrollo',
          minimumAmount: 40
        },
        {
          title: 'Nombre en créditos',
          description: 'Tu nombre aparecerá en los créditos de la documentación',
          minimumAmount: 100
        },
        {
          title: 'Robot con descuento',
          description: 'Descuento del 30% en la primera versión comercial',
          minimumAmount: 500
        }
      ],
      updates: [
        {
          date: new Date('2025-02-20'),
          title: 'Prototipo funcional',
          content: 'Primer prototipo funcional completado con las capacidades básicas.'
        },
        {
          date: new Date('2025-06-10'),
          title: 'Pruebas en residencias',
          content: 'Iniciamos fase de pruebas en 3 residencias de ancianos con resultados prometedores.'
        }
      ],
      supporters: [
        {
          name: 'SilverTech Ventures',
          amount: 8000,
          date: new Date('2025-05-15')
        },
        {
          name: 'Asociación Gerontológica',
          amount: 5000,
          date: new Date('2025-04-01')
        },
        {
          name: 'Hackers por la Sociedad',
          amount: 3000,
          date: new Date('2025-03-10')
        }
      ]
    },
    {
      id: 5,
      title: 'Biblioteca Móvil para Zonas Rurales',
      description: 'Unidad móvil con libros y acceso digital para comunidades alejadas',
      longDescription: 'Conversión de un bus en biblioteca móvil equipada con: 1) Colección física de 2,000 libros, 2) Estaciones de computo con contenido educativo offline, 3) Espacio para talleres de lectura. La unidad visitará 15 comunidades rurales en rutas mensuales establecidas, atendiendo a aproximadamente 3,000 niños y jóvenes.',
      goal: 28000,
      collected: 18200,
      category: 'Educación',
      deadline: new Date('2025-10-20'),
      location: 'Departamento del Chocó, Colombia',
      creator: {
        name: 'Lectura Viajera',
        email: 'contacto@lecturaviajera.org',
        bio: 'Organización sin ánimo de lucro con 6 años promoviendo la lectura en zonas de difícil acceso.',
        avatar: 'https://randomuser.me/api/portraits/lego/5.jpg'
      },
      risksAndChallenges: 'Retos principales: 1) Mantenimiento del vehículo en caminos rurales, 2) Capacitación de promotores locales, 3) Sostenibilidad a largo plazo. Hemos establecido alianzas con líderes comunitarios y diseñado un programa de voluntariado rotativo.',
      rewards: [
        {
          title: 'Postal ilustrada',
          description: 'Postal con ilustración exclusiva del proyecto',
          minimumAmount: 15
        },
        {
          title: 'Libro dedicado',
          description: 'Libro de la biblioteca con dedicatoria especial',
          minimumAmount: 30
        },
        {
          title: 'Visita a la biblioteca',
          description: 'Acompañar una ruta de la biblioteca móvil',
          minimumAmount: 100
        },
        {
          title: 'Estación con tu nombre',
          description: 'Una de las estaciones de lectura llevará tu nombre',
          minimumAmount: 1000
        }
      ],
      updates: [
        {
          date: new Date('2025-03-01'),
          title: 'Bus adquirido',
          content: 'Hemos comprado el vehículo que será transformado en biblioteca móvil.'
        },
        {
          date: new Date('2025-06-15'),
          title: 'Primera donación de libros',
          content: 'Recibimos 500 libros donados por una editorial amiga. ¡Gracias!'
        }
      ],
      supporters: [
        {
          name: 'Fundación Leer es Vivir',
          amount: 5000,
          date: new Date('2025-04-10')
        },
        {
          name: 'Escritores Unidos',
          amount: 3000,
          date: new Date('2025-05-20')
        },
        {
          name: 'Rotary Club Local',
          amount: 4000,
          date: new Date('2025-03-15')
        }
      ]
    },
    {
      id: 6,
      title: 'Talleres de Robótica para Jóvenes',
      description: 'Programa de formación en robótica para estudiantes de escuelas públicas',
      longDescription: 'Implementación de talleres semestrales de robótica educativa en 10 escuelas públicas, beneficiando a 300 estudiantes de bajos recursos. Cada taller incluirá: kits de robótica reutilizables, manuales adaptados al currículo escolar y competencias intercolegiales. El programa busca despertar vocaciones STEM en poblaciones vulnerables.',
      goal: 32000,
      collected: 24500,
      category: 'Educación',
      deadline: new Date('2025-08-30'),
      location: 'Cali, Colombia',
      creator: {
        name: 'Robótica para Todos',
        email: 'info@roboticapertodos.edu',
        bio: 'Colectivo de ingenieros y educadores comprometidos con la democratización de la educación tecnológica.',
        avatar: 'https://randomuser.me/api/portraits/lego/6.jpg'
      },
      risksAndChallenges: 'Desafíos identificados: 1) Adaptación curricular para diferentes edades, 2) Mantenimiento de equipos, 3) Continuidad después del programa. Soluciones: manuales por niveles, capacitación a profesores locales y creación de clubes permanentes.',
      rewards: [
        {
          title: 'Agradecimiento video',
          description: 'Video personalizado de agradecimiento del equipo',
          minimumAmount: 20
        },
        {
          title: 'Kit básico de robótica',
          description: 'Kit sencillo para iniciarse en robótica en casa',
          minimumAmount: 50
        },
        {
          title: 'Clase demostrativa',
          description: 'Participación en una clase demostrativa del programa',
          minimumAmount: 80
        },
        {
          title: 'Escuela con tu nombre',
          description: 'Un taller completo llevará tu nombre o el que elijas',
          minimumAmount: 2000
        }
      ],
      updates: [
        {
          date: new Date('2025-02-15'),
          title: 'Escuelas seleccionadas',
          content: 'Hemos completado el proceso de selección de las 10 escuelas participantes.'
        },
        {
          date: new Date('2025-05-20'),
          title: 'Primeros kits adquiridos',
          content: 'Adquirimos los primeros 100 kits de robótica con fondos iniciales.'
        }
      ],
      supporters: [
        {
          name: 'Asociación de Ingenieros',
          amount: 8000,
          date: new Date('2025-04-05')
        },
        {
          name: 'Universidad Tecnológica',
          amount: 7000,
          date: new Date('2025-03-22')
        },
        {
          name: 'Empresa de Tecnología',
          amount: 5000,
          date: new Date('2025-05-10')
        }
      ]
    }
  ];

  categories = ['Todos', 'Tecnología', 'Social', 'Medio Ambiente', 'Educación'];
  selectedCategory = 'Todos';

  constructor(private router: Router) {}

  filterProjects() {
    return this.selectedCategory === 'Todos' 
      ? this.projects 
      : this.projects.filter(p => p.category === this.selectedCategory);
  }

  // Para calcular días restantes
getDaysRemaining(deadline: Date): number {
  return Math.floor((deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}

// Para apoyar un proyecto
supportProject(projectId: number): void {
  const project = this.projects.find(p => p.id === projectId);
  if (project) {
    //project.supporters++;
    // Aquí podrías añadir lógica para donaciones
  }
}

  viewDetails(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }
}