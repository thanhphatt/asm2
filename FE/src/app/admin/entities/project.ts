export interface IProject {
    _id?: { $oid: string };
    name: string;
    description: string;
    leader_id: string;
    team: string;
    start_date: string;
    end_date: string;
    budget: string;
    status: string;
    created_at: string;
    updated_at: string;
  }
  
  
  