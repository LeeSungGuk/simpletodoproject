const {getTasks, addTask, clearTasks, generateId} = require('./task');

beforeEach(() => {
    clearTasks();
});

test('addTask', () => {
    [1, 2, 3].forEach(i =>
        addTask(`Test #${i}`)
    );

    const tasks = getTasks();

    expect(tasks.length).toBe(3);
    expect(tasks[0].id).toBeDefined();
    expect(tasks[0].title).toBe('Test #1');
});

test('generateId', () => {
   const id1 = generateId();
   const id2 = generateId();

   expect(id1).not.toEqual(id2);
});
