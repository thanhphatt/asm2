export interface ITask {
  
  _id: any;
  id: string;
  name: string;
  description: string;
  assignee_id: string;
  status: string;
  priority: string;
  start_date?: Date;
  due_date?: Date;

}
