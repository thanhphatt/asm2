// ITask interface
export interface ITask {
  _id: string;
  id: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  start_date: Date;
  due_date: Date;
  project_id: string; // Thêm thuộc tính project_id vào interface
  assignee_id: string; // Thêm thuộc tính assignee_id vào interface
}
