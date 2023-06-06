export interface ITodo {
  id: number;
  title: string;
  description: string;
  complete: boolean;
  edit: boolean;
  completionDates: string;
  filter: string
}