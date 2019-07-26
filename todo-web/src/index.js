const axios = require('axios');

const loadTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    const {tasks} = response.data;
    return {
        tasks,
    }
};

const addTask = async (title) => {
    await axios.post('http://localhost:3000/tasks', {
        title
    });
    update();
};

const render = state => {
    const {tasks} = state;
    const el = document.getElementById('app');
    el.innerHTML = `
        <h1>To Do</h1>
        <ul>
            ${tasks.map(task => `
                <li>
                    <input type="checkbox" ${task.checked ? 'checked' : ''}>
                    ${task.title}
                </li>
            `).join('')}
        </ul>
        <input type="text" class="input-title">
        <button>Add</button>
    `;
    el.querySelector('button').addEventListener('click', () => {
        const title = el.querySelector('.input-title').value;
        addTask(title);
    })
};

const update = async () => {
    const state = await loadTasks();
    render(state);
};

update();
