export interface Service {
  title: string;
  description: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    score: number;
  }[];
}

export interface AssessmentResult {
  score: number;
  level: string;
  recommendations: string[];
}
