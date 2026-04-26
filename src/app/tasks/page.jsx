import TaskCard from '@/components/TaskCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TaskPage = async () => {

    const tasks = await getTasks();

    return (
        <div className='container mx-auto mt-6'>
            <h2>Task: {tasks.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;