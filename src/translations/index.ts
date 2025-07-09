export interface Translation {
  // Navigation
  nav: {
    about: string;
    projects: string;
    achievements: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    getInTouch: string;
    downloadResume: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    journey: {
      title: string;
      intro: string;
      background: string;
      foundation: string;
      focus: string;
      professional: string;
      drive: string;
      aspiration: string;
    };
    languages: {
      title: string;
      items: string[];
    };
    techStack: {
      title: string;
    };
    specializations: {
      title: string;
      items: string[];
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
  };
  
  // Achievements Section
  achievements: {
    title: string;
    subtitle: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    resources: string;
    contact: string;
    copyright: string;
  };
}

const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects", 
      achievements: "Achievements",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Walid BENBOUTA",
      title: "AI Engineer & Data Scientist",
      description: "Transforming data into intelligent solutions that drive innovation and solve real-world problems.",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume"
    },
    about: {
      title: "About",
      subtitle: "Passionate about creating intelligent solutions that make a difference",
      journey: {
        title: "My Journey",
        intro: "As a final-year student at the National Higher School of Computer Science (ESI Algiers), specializing in Information Systems, I've cultivated a passion for data that goes beyond theory.",
        background: "From my early years, a strong background in mathematics and computer science shaped my analytical mindset — and ESI gave me the perfect playground to turn that curiosity into skill.",
        foundation: "Over the years, I've built a solid foundation in databases, algorithms, and software engineering, reinforced by hands-on experience in data engineering and business intelligence. I've designed automated ETL pipelines, modeled data warehouses, built interactive dashboards with real-time KPIs, and integrated APIs to streamline decision-making across complex systems.",
        focus: "My focus has always been clear: turn raw data into meaningful insight.",
        professional: "Professionally, I contributed to impactful projects such as RNA — a platform enhancing commune management in Algeria — where I tackled large-scale data analysis and full-stack development. I've also led academic projects, including a zero-paper e-commerce solution, a hotel management system, and an e-tourism prototype, often working as a full-stack developer and data analyst.",
        drive: "What drives me is the thrill of solving real-world problems with elegant, data-driven solutions. I don't just write code — I build intelligent systems that empower people to make smarter decisions. Whether it's optimizing queries for massive datasets or transforming scattered business data into clear visual stories, I bring rigor, creativity, and a commitment to excellence.",
        aspiration: "I aspire to bridge the gap between traditional information systems and the transformative power of AI. With a hybrid profile in data engineering, machine learning, and system integration, I'm ready to help shape the next generation of intelligent organizations."
      },
      languages: {
        title: "Languages",
        items: ["Arabic", "French", "English"]
      },
      techStack: {
        title: "Tech Stack"
      },
      specializations: {
        title: "Specializations",
        items: [
          "Deep Learning & Neural Networks",
          "Natural Language Processing", 
          "Generative AI & GANs",
          "Data Science & Visualization"
        ]
      }
    },
    projects: {
      title: "Projects",
      subtitle: "Showcasing innovative solutions and technical expertise"
    },
    achievements: {
      title: "Achievements",
      subtitle: "Recognition and milestones in my journey"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and build something amazing together",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
      }
    },
    footer: {
      description: "AI Engineer & Data Scientist passionate about creating intelligent solutions.",
      quickLinks: "Quick Links",
      resources: "Resources",
      contact: "Contact",
      copyright: "All rights reserved."
    }
  },
  
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      achievements: "Réalisations", 
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Walid BENBOUTA",
      title: "Ingénieur IA & Data Scientist",
      description: "Transformer les données en solutions intelligentes qui stimulent l'innovation et résolvent les problèmes du monde réel.",
      getInTouch: "Contactez-moi",
      downloadResume: "Télécharger CV"
    },
    about: {
      title: "À propos",
      subtitle: "Passionné par la création de solutions intelligentes qui font la différence",
      journey: {
        title: "Mon Parcours",
        intro: "En tant qu'étudiant en dernière année à l'École Nationale Supérieure d'Informatique (ESI Alger), spécialisé en Systèmes d'Information, j'ai cultivé une passion pour les données qui va au-delà de la théorie.",
        background: "Depuis mes premières années, une solide formation en mathématiques et informatique a façonné mon esprit analytique — et ESI m'a donné le terrain de jeu parfait pour transformer cette curiosité en compétence.",
        foundation: "Au fil des années, j'ai construit une base solide en bases de données, algorithmes et génie logiciel, renforcée par une expérience pratique en ingénierie des données et intelligence d'affaires. J'ai conçu des pipelines ETL automatisés, modélisé des entrepôts de données, créé des tableaux de bord interactifs avec des KPI en temps réel, et intégré des API pour rationaliser la prise de décision dans des systèmes complexes.",
        focus: "Mon objectif a toujours été clair : transformer les données brutes en insights significatifs.",
        professional: "Professionnellement, j'ai contribué à des projets impactants comme RNA — une plateforme améliorant la gestion communale en Algérie — où j'ai abordé l'analyse de données à grande échelle et le développement full-stack. J'ai également dirigé des projets académiques, notamment une solution e-commerce zéro papier, un système de gestion hôtelière et un prototype e-tourisme, travaillant souvent comme développeur full-stack et analyste de données.",
        drive: "Ce qui me motive, c'est le frisson de résoudre des problèmes du monde réel avec des solutions élégantes basées sur les données. Je n'écris pas seulement du code — je construis des systèmes intelligents qui permettent aux gens de prendre des décisions plus intelligentes. Qu'il s'agisse d'optimiser des requêtes pour des jeux de données massifs ou de transformer des données d'entreprise dispersées en histoires visuelles claires, j'apporte rigueur, créativité et engagement envers l'excellence.",
        aspiration: "J'aspire à combler le fossé entre les systèmes d'information traditionnels et le pouvoir transformateur de l'IA. Avec un profil hybride en ingénierie des données, apprentissage automatique et intégration de systèmes, je suis prêt à aider à façonner la prochaine génération d'organisations intelligentes."
      },
      languages: {
        title: "Langues",
        items: ["Arabe", "Français", "Anglais"]
      },
      techStack: {
        title: "Stack Technique"
      },
      specializations: {
        title: "Spécialisations",
        items: [
          "Deep Learning & Réseaux de Neurones",
          "Traitement du Langage Naturel",
          "IA Générative & GANs", 
          "Data Science & Visualisation"
        ]
      }
    },
    projects: {
      title: "Projets",
      subtitle: "Présentation de solutions innovantes et d'expertise technique"
    },
    achievements: {
      title: "Réalisations",
      subtitle: "Reconnaissance et jalons de mon parcours"
    },
    contact: {
      title: "Contact",
      subtitle: "Connectons-nous et construisons quelque chose d'incroyable ensemble",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer"
      }
    },
    footer: {
      description: "Ingénieur IA & Data Scientist passionné par la création de solutions intelligentes.",
      quickLinks: "Liens Rapides",
      resources: "Ressources",
      contact: "Contact",
      copyright: "Tous droits réservés."
    }
  },
  
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      achievements: "Erfolge",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Walid BENBOUTA", 
      title: "KI-Ingenieur & Data Scientist",
      description: "Daten in intelligente Lösungen transformieren, die Innovation vorantreiben und reale Probleme lösen.",
      getInTouch: "Kontakt aufnehmen",
      downloadResume: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über mich",
      subtitle: "Leidenschaftlich über die Erschaffung intelligenter Lösungen, die einen Unterschied machen",
      journey: {
        title: "Mein Werdegang",
        intro: "Als Absolvent der Nationalen Höheren Schule für Informatik (ESI Algier) mit Spezialisierung auf Informationssysteme habe ich eine Leidenschaft für Daten entwickelt, die über die Theorie hinausgeht.",
        background: "Von frühen Jahren an prägten eine starke Grundlage in Mathematik und Informatik meine analytische Denkweise — und ESI gab mir den perfekten Spielplatz, um diese Neugier in Fähigkeiten umzuwandeln.",
        foundation: "Über die Jahre habe ich eine solide Grundlage in Datenbanken, Algorithmen und Software-Engineering aufgebaut, verstärkt durch praktische Erfahrung in Data Engineering und Business Intelligence. Ich habe automatisierte ETL-Pipelines entworfen, Data Warehouses modelliert, interaktive Dashboards mit Echtzeit-KPIs erstellt und APIs integriert, um die Entscheidungsfindung in komplexen Systemen zu rationalisieren.",
        focus: "Mein Fokus war immer klar: rohe Daten in bedeutungsvolle Erkenntnisse umwandeln.",
        professional: "Beruflich habe ich zu wirkungsvollen Projekten wie RNA beigetragen — einer Plattform zur Verbesserung der Gemeindeverwaltung in Algerien — wo ich großskalige Datenanalyse und Full-Stack-Entwicklung anging. Ich habe auch akademische Projekte geleitet, einschließlich einer papierlosen E-Commerce-Lösung, eines Hotelmanagementsystems und eines E-Tourismus-Prototyps, oft als Full-Stack-Entwickler und Datenanalyst arbeitend.",
        drive: "Was mich antreibt, ist der Nervenkitzel, reale Probleme mit eleganten, datengetriebenen Lösungen zu lösen. Ich schreibe nicht nur Code — ich baue intelligente Systeme, die Menschen befähigen, intelligentere Entscheidungen zu treffen. Ob es um die Optimierung von Abfragen für massive Datensätze oder die Transformation verstreuter Geschäftsdaten in klare visuelle Geschichten geht, ich bringe Rigorosität, Kreativität und ein Engagement für Exzellenz mit.",
        aspiration: "Ich strebe danach, die Lücke zwischen traditionellen Informationssystemen und der transformativen Kraft der KI zu schließen. Mit einem hybriden Profil in Data Engineering, maschinellem Lernen und Systemintegration bin ich bereit, dabei zu helfen, die nächste Generation intelligenter Organisationen zu formen."
      },
      languages: {
        title: "Sprachen",
        items: ["Arabisch", "Französisch", "Englisch"]
      },
      techStack: {
        title: "Tech Stack"
      },
      specializations: {
        title: "Spezialisierungen",
        items: [
          "Deep Learning & Neuronale Netze",
          "Natürliche Sprachverarbeitung",
          "Generative KI & GANs",
          "Data Science & Visualisierung"
        ]
      }
    },
    projects: {
      title: "Projekte", 
      subtitle: "Innovative Lösungen und technische Expertise präsentieren"
    },
    achievements: {
      title: "Erfolge",
      subtitle: "Anerkennung und Meilensteine meiner Reise"
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns verbinden und gemeinsam etwas Erstaunliches schaffen",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht", 
        send: "Nachricht senden"
      }
    },
    footer: {
      description: "KI-Ingenieur & Data Scientist mit Leidenschaft für intelligente Lösungen.",
      quickLinks: "Quick Links",
      resources: "Ressourcen",
      contact: "Kontakt",
      copyright: "Alle Rechte vorbehalten."
    }
  },
  
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      achievements: "Logros",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Walid BENBOUTA",
      title: "Ingeniero de IA & Científico de Datos",
      description: "Transformando datos en soluciones inteligentes que impulsan la innovación y resuelven problemas del mundo real.",
      getInTouch: "Contactar",
      downloadResume: "Descargar CV"
    },
    about: {
      title: "Acerca de",
      subtitle: "Apasionado por crear soluciones inteligentes que marcan la diferencia",
      journey: {
        title: "Mi Trayectoria",
        intro: "Como estudiante de último año en la Escuela Nacional Superior de Informática (ESI Argel), especializándome en Sistemas de Información, he cultivado una pasión por los datos que va más allá de la teoría.",
        background: "Desde mis primeros años, una sólida formación en matemáticas e informática moldeó mi mentalidad analítica — y ESI me dio el campo de juego perfecto para convertir esa curiosidad en habilidad.",
        foundation: "A lo largo de los años, he construido una base sólida en bases de datos, algoritmos e ingeniería de software, reforzada por experiencia práctica en ingeniería de datos e inteligencia de negocios. He diseñado pipelines ETL automatizados, modelado almacenes de datos, construido dashboards interactivos con KPIs en tiempo real, e integrado APIs para optimizar la toma de decisiones en sistemas complejos.",
        focus: "Mi enfoque siempre ha sido claro: convertir datos en bruto en insights significativos.",
        professional: "Profesionalmente, contribuí a proyectos impactantes como RNA — una plataforma que mejora la gestión comunal en Argelia — donde abordé análisis de datos a gran escala y desarrollo full-stack. También he liderado proyectos académicos, incluyendo una solución de comercio electrónico sin papel, un sistema de gestión hotelera y un prototipo de e-turismo, trabajando a menudo como desarrollador full-stack y analista de datos.",
        drive: "Lo que me impulsa es la emoción de resolver problemas del mundo real con soluciones elegantes basadas en datos. No solo escribo código — construyo sistemas inteligentes que empoderan a las personas para tomar decisiones más inteligentes. Ya sea optimizando consultas para conjuntos de datos masivos o transformando datos empresariales dispersos en historias visuales claras, aporto rigor, creatividad y compromiso con la excelencia.",
        aspiration: "Aspiro a cerrar la brecha entre los sistemas de información tradicionales y el poder transformador de la IA. Con un perfil híbrido en ingeniería de datos, aprendizaje automático e integración de sistemas, estoy listo para ayudar a dar forma a la próxima generación de organizaciones inteligentes."
      },
      languages: {
        title: "Idiomas",
        items: ["Árabe", "Francés", "Inglés"]
      },
      techStack: {
        title: "Stack Técnico"
      },
      specializations: {
        title: "Especializaciones",
        items: [
          "Deep Learning & Redes Neuronales",
          "Procesamiento de Lenguaje Natural",
          "IA Generativa & GANs",
          "Ciencia de Datos & Visualización"
        ]
      }
    },
    projects: {
      title: "Proyectos",
      subtitle: "Mostrando soluciones innovadoras y experiencia técnica"
    },
    achievements: {
      title: "Logros",
      subtitle: "Reconocimiento e hitos en mi trayectoria"
    },
    contact: {
      title: "Contacto",
      subtitle: "Conectemos y construyamos algo increíble juntos",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje"
      }
    },
    footer: {
      description: "Ingeniero de IA & Científico de Datos apasionado por crear soluciones inteligentes.",
      quickLinks: "Enlaces Rápidos",
      resources: "Recursos",
      contact: "Contacto",
      copyright: "Todos los derechos reservados."
    }
  },
  
  ar: {
    nav: {
      about: "نبذة عني",
      projects: "المشاريع",
      achievements: "الإنجازات",
      contact: "التواصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "وليد بن بوطة",
      title: "مهندس ذكاء اصطناعي وعالم بيانات",
      description: "تحويل البيانات إلى حلول ذكية تقود الابتكار وتحل مشاكل العالم الحقيقي.",
      getInTouch: "تواصل معي",
      downloadResume: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة عني",
      subtitle: "شغوف بإنشاء حلول ذكية تحدث فرقاً",
      journey: {
        title: "رحلتي",
        intro: "كطالب في السنة الأخيرة في المدرسة العليا الوطنية للإعلام الآلي (ESI الجزائر)، متخصص في أنظمة المعلومات، طورت شغفاً بالبيانات يتجاوز النظرية.",
        background: "منذ سنواتي الأولى، شكلت خلفية قوية في الرياضيات وعلوم الحاسوب عقليتي التحليلية — و ESI أعطتني الساحة المثالية لتحويل هذا الفضول إلى مهارة.",
        foundation: "على مر السنين، بنيت أساساً قوياً في قواعد البيانات والخوارزميات وهندسة البرمجيات، معززاً بخبرة عملية في هندسة البيانات وذكاء الأعمال. صممت خطوط أنابيب ETL آلية، ونمذجت مستودعات البيانات، وبنيت لوحات تحكم تفاعلية مع مؤشرات الأداء الرئيسية في الوقت الفعلي، ودمجت واجهات برمجة التطبيقات لتبسيط اتخاذ القرارات عبر الأنظمة المعقدة.",
        focus: "تركيزي كان واضحاً دائماً: تحويل البيانات الخام إلى رؤى ذات معنى.",
        professional: "مهنياً، ساهمت في مشاريع مؤثرة مثل RNA — منصة تعزز إدارة البلديات في الجزائر — حيث تعاملت مع تحليل البيانات على نطاق واسع والتطوير الشامل. كما قدت مشاريع أكاديمية، بما في ذلك حل التجارة الإلكترونية بدون ورق، ونظام إدارة الفنادق، ونموذج أولي للسياحة الإلكترونية، غالباً ما أعمل كمطور شامل ومحلل بيانات.",
        drive: "ما يحفزني هو إثارة حل مشاكل العالم الحقيقي بحلول أنيقة مدفوعة بالبيانات. لا أكتب الكود فقط — أبني أنظمة ذكية تمكن الناس من اتخاذ قرارات أذكى. سواء كان الأمر يتعلق بتحسين الاستعلامات لمجموعات البيانات الضخمة أو تحويل بيانات الأعمال المتناثرة إلى قصص بصرية واضحة، أحضر الصرامة والإبداع والالتزام بالتميز.",
        aspiration: "أطمح إلى سد الفجوة بين أنظمة المعلومات التقليدية والقوة التحويلية للذكاء الاصطناعي. مع ملف شخصي مختلط في هندسة البيانات والتعلم الآلي وتكامل الأنظمة، أنا مستعد للمساعدة في تشكيل الجيل القادم من المنظمات الذكية."
      },
      languages: {
        title: "اللغات",
        items: ["العربية", "الفرنسية", "الإنجليزية"]
      },
      techStack: {
        title: "المكدس التقني"
      },
      specializations: {
        title: "التخصصات",
        items: [
          "التعلم العميق والشبكات العصبية",
          "معالجة اللغة الطبيعية",
          "الذكاء الاصطناعي التوليدي و GANs",
          "علم البيانات والتصور"
        ]
      }
    },
    projects: {
      title: "المشاريع",
      subtitle: "عرض الحلول المبتكرة والخبرة التقنية"
    },
    achievements: {
      title: "الإنجازات",
      subtitle: "التقدير والمعالم في رحلتي"
    },
    contact: {
      title: "التواصل",
      subtitle: "لنتواصل ونبني شيئاً مذهلاً معاً",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة"
      }
    },
    footer: {
      description: "مهندس ذكاء اصطناعي وعالم بيانات شغوف بإنشاء حلول ذكية.",
      quickLinks: "روابط سريعة",
      resources: "الموارد",
      contact: "التواصل",
      copyright: "جميع الحقوق محفوظة."
    }
  }
};

export { translations };