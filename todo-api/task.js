const Storage = require('node-storage');

const postfix = process.env.NODE_ENV === 'test' ? '-test' : '';
const store = new Storage(`./data/tasks${postfix}.json`);

const getTasks = () => {
    return store.get('tasks') || [];
};

const addTask = title => {
    const tasks = getTasks();
    const id = generateId();
    tasks.push({id, title, checked: false});
    store.put('tasks', tasks);
};

const clearTasks = () => {
    store.put('tasks', []);
};

const generateId = () => {
    return process.hrtime.bigint().toString();
};

module.exports = {
    getTasks,
    addTask,
    clearTasks,
    generateId,
};
