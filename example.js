"use strict";
exports.__esModule = true;
var cnpj_1 = require("./cnpj/cnpj");
var cnpj = new cnpj_1.Cnpj('76.535.764/0001-43');
console.log(cnpj.isValid());
console.log(cnpj.mask());
console.log(cnpj.clean());
console.log();
var cnpj2 = new cnpj_1.Cnpj('76535764000143');
console.log(cnpj2.isValid());
console.log(cnpj2.mask());
console.log(cnpj2.clean());
console.log();
var cnpj3 = new cnpj_1.Cnpj('75.535.764/0001-43');
console.log(cnpj3.isValid());
console.log(cnpj3.mask());
console.log(cnpj3.clean());
console.log();
var cnpj4 = new cnpj_1.Cnpj('75535764000143');
console.log(cnpj4.isValid());
console.log(cnpj4.mask());
console.log(cnpj4.clean());
console.log();
