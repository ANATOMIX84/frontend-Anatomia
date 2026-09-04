export interface Question {
  question: string;
  options: string[];
  correctOption: number;
}

export const questionsPorSistema: Record<string, Question[]> = {
  // ==========================================
  // SISTEMA ÓSEO - 15 PREGUNTAS
  // ==========================================
  oseo: [
    {
      question: "¿Cuál es el hueso más largo del cuerpo humano?",
      options: ["Fémur", "Húmero", "Radio", "Tibia"],
      correctOption: 0,
    },
    {
      question: "¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?",
      options: ["106", "206", "306", "406"],
      correctOption: 1,
    },
    {
      question: "¿Cuál es la función principal del sistema óseo?",
      options: [
        "Bombear sangre",
        "Producir hormonas",
        "Dar soporte y proteger órganos",
        "Controlar los sentidos",
      ],
      correctOption: 2,
    },
    {
      question: "¿Cuál es el hueso que protege principalmente al cerebro?",
      options: ["Esternón", "Cráneo", "Fémur", "Pelvis"],
      correctOption: 1,
    },
    {
      question: "¿Qué huesos forman principalmente la columna vertebral?",
      options: ["Costillas", "Vértebras", "Escápulas", "Clavículas"],
      correctOption: 1,
    },
    {
      question: "¿Cuál es el hueso más pequeño del cuerpo humano?",
      options: ["Estribo", "Radio", "Peroné", "Martillo"],
      correctOption: 0,
    },
    {
      question: "¿Dónde se encuentra el fémur?",
      options: [
        "En el brazo",
        "En la pierna",
        "En el antebrazo",
        "En el cráneo",
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué estructura conecta dos huesos entre sí?",
      options: ["Tendón", "Ligamento", "Músculo", "Nervio"],
      correctOption: 1,
    },
    {
      question: "¿Cuántas costillas tiene normalmente una persona?",
      options: ["12", "18", "24", "30"],
      correctOption: 2,
    },
    {
      question: "¿Qué huesos forman la caja torácica junto con el esternón?",
      options: ["Costillas", "Fémures", "Tibias", "Mandíbulas"],
      correctOption: 0,
    },
    {
      question: "¿Cuál es la función de la médula ósea?",
      options: [
        "Producir células sanguíneas",
        "Controlar los músculos",
        "Bombear sangre",
        "Digestionar alimentos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál de estos huesos pertenece al brazo?",
      options: ["Húmero", "Fémur", "Tibia", "Peroné"],
      correctOption: 0,
    },
    {
      question: "¿Qué hueso se encuentra en la parte frontal del tórax?",
      options: ["Esternón", "Occipital", "Fémur", "Radio"],
      correctOption: 0,
    },
    {
      question: "¿Qué tipo de tejido forma principalmente los huesos?",
      options: [
        "Tejido muscular",
        "Tejido nervioso",
        "Tejido óseo",
        "Tejido epitelial",
      ],
      correctOption: 2,
    },
    {
      question: "¿Cuál de estos huesos pertenece a la pierna?",
      options: ["Húmero", "Tibia", "Radio", "Clavícula"],
      correctOption: 1,
    },
  ],

  // ==========================================
  // SISTEMA MUSCULAR - 15 PREGUNTAS
  // ==========================================
  muscular: [
    {
      question: "¿Cuál es la principal función del sistema muscular?",
      options: [
        "Producir sangre",
        "Permitir el movimiento del cuerpo",
        "Proteger el cerebro",
        "Transportar oxígeno",
      ],
      correctOption: 1,
    },
    {
      question: "¿Cuál es el músculo más grande del cuerpo humano?",
      options: [
        "Glúteo mayor",
        "Bíceps",
        "Trapecio",
        "Pectoral mayor",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué músculo participa principalmente en la flexión del codo?",
      options: [
        "Bíceps braquial",
        "Cuádriceps",
        "Glúteo mayor",
        "Diafragma",
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál es el músculo principal utilizado para respirar?",
      options: ["Bíceps", "Diafragma", "Tríceps", "Cuádriceps"],
      correctOption: 1,
    },
    {
      question: "¿Dónde se encuentra principalmente el músculo cuádriceps?",
      options: ["Brazo", "Abdomen", "Muslo", "Espalda"],
      correctOption: 2,
    },
    {
      question: "¿Qué músculo se encuentra en la parte posterior del brazo?",
      options: ["Bíceps", "Tríceps", "Deltoides", "Pectoral"],
      correctOption: 1,
    },
    {
      question: "¿Qué tipo de músculo podemos controlar voluntariamente?",
      options: [
        "Músculo esquelético",
        "Músculo cardíaco",
        "Músculo liso",
        "Todos los músculos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué músculo forma gran parte de la pared del corazón?",
      options: [
        "Músculo esquelético",
        "Músculo cardíaco",
        "Músculo liso",
        "Tendón",
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué estructura conecta un músculo con un hueso?",
      options: ["Ligamento", "Tendón", "Cartílago", "Nervio"],
      correctOption: 1,
    },
    {
      question: "¿Cuál de estos músculos se encuentra en el pecho?",
      options: ["Pectoral mayor", "Gemelo", "Bíceps femoral", "Sóleo"],
      correctOption: 0,
    },
    {
      question: "¿Cuál es la función principal de los músculos abdominales?",
      options: [
        "Bombear sangre",
        "Ayudar a estabilizar y mover el tronco",
        "Producir glóbulos rojos",
        "Controlar la visión",
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué músculo permite principalmente extender el codo?",
      options: ["Bíceps", "Tríceps", "Pectoral", "Deltoides"],
      correctOption: 1,
    },
    {
      question: "¿Dónde se encuentra el músculo deltoides?",
      options: ["Hombro", "Rodilla", "Abdomen", "Pie"],
      correctOption: 0,
    },
    {
      question: "¿Qué ocurre con un músculo cuando se contrae?",
      options: [
        "Produce fuerza y puede generar movimiento",
        "Deja de funcionar",
        "Se convierte en hueso",
        "Deja de recibir sangre",
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál de estos músculos está relacionado con la flexión de la rodilla?",
      options: [
        "Bíceps femoral",
        "Bíceps braquial",
        "Pectoral mayor",
        "Deltoides",
      ],
      correctOption: 0,
    },
  ],

  // ==========================================
  // SISTEMA NERVIOSO - 15 PREGUNTAS
  // ==========================================
  nervioso: [
    {
      question: "¿Cuál es la función principal del sistema nervioso?",
      options: [
        "Transportar sangre",
        "Controlar y coordinar el cuerpo",
        "Producir movimiento",
        "Digestionar alimentos",
      ],
      correctOption: 1,
    },
    {
      question: "¿Cuál es el órgano principal del sistema nervioso central?",
      options: ["Corazón", "Pulmón", "Cerebro", "Hígado"],
      correctOption: 2,
    },
    {
      question: "¿Qué células transmiten principalmente los impulsos nerviosos?",
      options: [
        "Neuronas",
        "Glóbulos rojos",
        "Plaquetas",
        "Osteocitos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué órganos forman principalmente el sistema nervioso central?",
      options: [
        "Cerebro y médula espinal",
        "Corazón y pulmones",
        "Riñones y vejiga",
        "Hígado y estómago",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué estructura conecta el cerebro con gran parte del cuerpo mediante nervios?",
      options: [
        "Médula espinal",
        "Esternón",
        "Fémur",
        "Diafragma",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué parte del cerebro está relacionada principalmente con el equilibrio y la coordinación?",
      options: ["Cerebelo", "Hipotálamo", "Bulbo raquídeo", "Hipófisis"],
      correctOption: 0,
    },
    {
      question: "¿Qué sistema nervioso controla principalmente funciones involuntarias?",
      options: [
        "Sistema nervioso autónomo",
        "Sistema muscular",
        "Sistema óseo",
        "Sistema digestivo",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué órgano permite principalmente la percepción visual?",
      options: ["Oído", "Ojo", "Nariz", "Piel"],
      correctOption: 1,
    },
    {
      question: "¿Qué sentido está relacionado con los oídos?",
      options: ["Vista", "Audición", "Gusto", "Olfato"],
      correctOption: 1,
    },
    {
      question: "¿Qué estructura protege al cerebro?",
      options: ["Pelvis", "Cráneo", "Esternón", "Columna lumbar"],
      correctOption: 1,
    },
    {
      question: "¿Cómo se comunican las neuronas entre sí?",
      options: [
        "Mediante señales eléctricas y químicas",
        "Mediante huesos",
        "Mediante músculos",
        "Mediante glóbulos rojos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué parte del sistema nervioso está formada por los nervios fuera del cerebro y la médula espinal?",
      options: [
        "Sistema nervioso periférico",
        "Sistema nervioso central",
        "Sistema óseo",
        "Sistema endocrino",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué estructura permite transmitir información entre neuronas?",
      options: ["Sinapsis", "Articulación", "Tendón", "Ligamento"],
      correctOption: 0,
    },
    {
      question: "¿Cuál de estos sentidos permite detectar olores?",
      options: ["Vista", "Olfato", "Audición", "Tacto"],
      correctOption: 1,
    },
    {
      question: "¿Qué parte del sistema nervioso ayuda a interpretar la información que recibimos del entorno?",
      options: ["Cerebro", "Fémur", "Corazón", "Estómago"],
      correctOption: 0,
    },
  ],

  // ==========================================
  // SISTEMA CIRCULATORIO - 15 PREGUNTAS
  // ==========================================
  circulatorio: [
    {
      question: "¿Qué órgano bombea la sangre por el cuerpo?",
      options: ["Pulmón", "Cerebro", "Corazón", "Riñón"],
      correctOption: 2,
    },
    {
      question: "¿Cuál es la función principal de los glóbulos rojos?",
      options: [
        "Transportar oxígeno",
        "Defender el organismo",
        "Coagular la sangre",
        "Producir hormonas",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué vasos sanguíneos llevan la sangre desde el corazón hacia los tejidos?",
      options: ["Venas", "Arterias", "Capilares", "Alvéolos"],
      correctOption: 1,
    },
    {
      question: "¿Qué vasos sanguíneos llevan generalmente la sangre hacia el corazón?",
      options: ["Arterias", "Venas", "Capilares", "Bronquios"],
      correctOption: 1,
    },
    {
      question: "¿Cuál es la función principal del sistema circulatorio?",
      options: [
        "Transportar sustancias por el organismo",
        "Producir movimiento",
        "Controlar los pensamientos",
        "Formar huesos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué componente de la sangre ayuda principalmente a combatir infecciones?",
      options: ["Glóbulos blancos", "Glóbulos rojos", "Plaquetas", "Plasma"],
      correctOption: 0,
    },
    {
      question: "¿Qué componente de la sangre participa en la coagulación?",
      options: ["Plaquetas", "Glóbulos rojos", "Neuronas", "Linfocitos"],
      correctOption: 0,
    },
    {
      question: "¿Qué líquido circula por los vasos sanguíneos?",
      options: ["Bilis", "Sangre", "Orina", "Saliva"],
      correctOption: 1,
    },
    {
      question: "¿Cuántas cavidades principales tiene el corazón humano?",
      options: ["2", "3", "4", "5"],
      correctOption: 2,
    },
    {
      question: "¿Qué cavidad del corazón recibe sangre del cuerpo?",
      options: [
        "Aurícula derecha",
        "Aurícula izquierda",
        "Ventrículo derecho",
        "Ventrículo izquierdo",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué cavidad del corazón bombea sangre hacia el resto del cuerpo?",
      options: [
        "Aurícula derecha",
        "Aurícula izquierda",
        "Ventrículo derecho",
        "Ventrículo izquierdo",
      ],
      correctOption: 3,
    },
    {
      question: "¿Cuál es la función de los capilares sanguíneos?",
      options: [
        "Realizar intercambio de sustancias con los tejidos",
        "Bombear sangre",
        "Producir hormonas",
        "Controlar los músculos",
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué proteína de los glóbulos rojos transporta oxígeno?",
      options: ["Insulina", "Hemoglobina", "Colágeno", "Queratina"],
      correctOption: 1,
    },
    {
      question: "¿Qué órgano ayuda a oxigenar la sangre?",
      options: ["Pulmones", "Riñones", "Estómago", "Hígado"],
      correctOption: 0,
    },
    {
      question: "¿Qué parte de la sangre representa la porción líquida?",
      options: ["Plasma", "Plaquetas", "Glóbulos rojos", "Glóbulos blancos"],
      correctOption: 0,
    },
  ],
};