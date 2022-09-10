import Cnpj from "./cnpj";
//const cnpj = new Cnpj('76535764000143');
let cnpj: Cnpj = new Cnpj('76.535.764/0001-43');

console.log(cnpj.isValid());
console.log(cnpj.mask());
console.log(cnpj.clean());