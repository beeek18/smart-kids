export type QuestionType = {
  id: number;
  title: string;
  answer: string;
  categoryId: number;
  img: string;
  Options: [
    {
      id: number;
      title: string;
    },
  ];
};
