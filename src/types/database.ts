export type Task = {
    id: number
    title: string
    status: 'pending' | 'in-progress' | 'completed'
    due_date: string
    created_at: string
    user_id: string | null
  }