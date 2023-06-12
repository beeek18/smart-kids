export type QuestionType = {
  id: number;
  title: string;
  answer: string;
  categoryId: number;
  Options: [
    {
      id: number;
      title: string;
    },
  ];
};
