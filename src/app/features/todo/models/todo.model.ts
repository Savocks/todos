export interface Todo {
  title: string;
  description: string;
  status: TodoStatusEnum;
}

export enum TodoStatusEnum {
  TODO = 'DA_FARE',
  DOING = 'IN_CORSO',
  DONE = 'FATTO'
}
