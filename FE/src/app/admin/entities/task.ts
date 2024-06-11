export interface ITask {
  id: string;
  name: string;
  description: string;
  assignee_id: string;
  status: string;
  priority: string;
  start_date?: Date; // Thêm thuộc tính này
  due_date?: Date;

}
