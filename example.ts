import { Cnpj } from "./cnpj/cnpj";

let cnpj: Cnpj = new Cnpj('76.535.764/0001-43');
console.log(cnpj.isValid());
console.log(cnpj.mask());
console.log(cnpj.clean());
console.log();

let cnpj2: Cnpj = new Cnpj('76535764000143');
console.log(cnpj2.isValid());
console.log(cnpj2.mask());
console.log(cnpj2.clean());
console.log();

let cnpj3: Cnpj = new Cnpj('75.535.764/0001-43');
console.log(cnpj3.isValid());
console.log(cnpj3.mask());
console.log(cnpj3.clean());
console.log();

let cnpj4: Cnpj = new Cnpj('75535764000143');
console.log(cnpj4.isValid());
console.log(cnpj4.mask());
console.log(cnpj4.clean());
console.log();