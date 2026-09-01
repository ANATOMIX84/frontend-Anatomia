export interface Question {
  question: string;
  options: string[];
  correctOption: number;
}

export const questions: Question[] = [
  {
    question: "¿Cuál es el hueso más largo del cuerpo humano?",
    options: ["Fémur", "Húmero", "Radio", "Tibia"],
    correctOption: 0,
  },
  {
    question: "¿Qué órgano bombea la sangre por el cuerpo?",
    options: ["Pulmón", "Cerebro", "Corazón", "Riñón"],
    correctOption: 2,
  },
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
];