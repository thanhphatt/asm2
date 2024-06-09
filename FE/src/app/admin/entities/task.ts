export interface ITask {
    _id: string;
    project_id: string;
    name: string;
    description: string;
    assignee_id: string;
    status: string;
    priority: string;
    due_date: Date;
    created_at: Date;
    updated_at: Date;
  }
  