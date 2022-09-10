"use strict";
exports.__esModule = true;
var cnpj_1 = require("./cnpj");
//const cnpj = new Cnpj('76535764000143');
var cnpj = new cnpj_1["default"]('76.535.764/0001-43');
console.log(cnpj.isValid());
console.log(cnpj.mask());
console.log(cnpj.clean());
