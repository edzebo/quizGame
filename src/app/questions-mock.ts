import { Question } from './question';

// List of mock questions. Later connection to database will be made
export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Koliko je 0^12?',
    answers: ['12', '0', '1', 'Ne znam'],
    correctAnswer: '1'
  },
  {
    id: 2,
    question: 'Koji je glavni grad Ugande?',
    answers: ['Kampala', 'Masaka', 'Uganda', 'Ne znam'],
    correctAnswer: 'Kampala'
  },
  {
    id: 3,
    question: 'Sta je osnovna mjera za vrijeme?',
    answers: ['Sekunda', 'Minuta', 'Sat', 'Dan'],
    correctAnswer: 'Sekunda'
  },
  {
    id: 4,
    question: 'Ko je osnovao kompaniju General Motors?',
    answers: [
      'Henry Ford',
      'Abraham Lincoln',
      'Luke Jr. Walton',
      'William C. Durant'
    ],
    correctAnswer: 'William C. Durant'
  },
  {
    id: 5,
    question: 'Jebemga ne znam sta da pitam. Tacan odgovor je Odgovor.',
    answers: ['Nije odgovor', 'Nije odgovor', 'Nije odgovor', 'Odgovor'],
    correctAnswer: 'Odgovor'
  }
];
