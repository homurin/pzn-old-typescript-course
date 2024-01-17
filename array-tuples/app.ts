// Array (dinamic size)

let magiaQuartet: string[] = ["Madoka", "Sayaka", "Mami", "Homura", "Sakura"];
let nums: Array<Number> = [1, 2, 3, 4, 5];
nums.push(100);
delete nums[0];
console.info(magiaQuartet);
console.info(nums);
nums[0] = 0;
console.info(nums[0]);

// Tupple (static size)

let student: [string, string, number] = ["Fajrin", "Content Based Filtering", 21];
console.info(student);
console.info(student[0]);
