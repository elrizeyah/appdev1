// 16_modules_import.js

import greet from './15_modules_export.js';
import { info } from './15_modules_export.js';

console.log(greet()); // Hello from the module!
console.log(`Name: ${info.name}, Age: ${info.age}`);
