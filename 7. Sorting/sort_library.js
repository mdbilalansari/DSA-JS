'use strict';

let array = [10, 9, 23, 7, 24, 51, 4, 35, 2, 1];

// Sort the array in ascending order
array.sort((a, b) => a - b);
console.log('Array after sorting in ascending order:', array);

// Sort the array in descending order
array.sort((a, b) => b - a);
console.log('Array after sorting in descending order:', array);

// Priority Sort
function prioritySort(arr, priorityArr, getPriority) {
	const priorityMap = new Map(priorityArr.map((priority, index) => [priority, index]));
	const priorityFunc = (item) => priorityMap.get(getPriority(item)) ?? Infinity;

	return arr.toSorted((a, b) => priorityFunc(a) - priorityFunc(b));
}

const tasks = [
	{ name: 'Task A', status: 'Low' },
	{ name: 'Task B', status: 'Critical' },
	{ name: 'Task C', status: 'Unknown' },
	{ name: 'Task D', status: 'High' },
	{ name: 'Task E', status: 'Medium' },
	{ name: 'Task F', status: 'Unknown' },
];

const priorities = ['Critical', 'High', 'Medium', 'Low'];
const sortedTasks = prioritySort(tasks, priorities, (task) => task.status);

console.log('Tasks after priority sorting:', sortedTasks);
