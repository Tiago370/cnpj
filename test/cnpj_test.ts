import { Test } from '../test-lib/test';
import { Cnpj } from '../src/cnpj';

const test = new Test('Cnpj');

const cnpj = new Cnpj('18.025.940/0001-09');
test.equal(cnpj.isValid(), true, '18.025.940/0001-09 é um cnpj válido.');
test.equal(cnpj.clean(), '18025940000109', 'A saída clean de 18.025.940/0001-09 é 18025940000109.');
test.equal(cnpj.mask(), '18.025.940/0001-09', 'A saída mask de 18.025.940/0001-09 é 18.025.940/0001-09.');

const cnpj2 = new Cnpj('18025940000109');
test.equal(cnpj2.isValid(), true, '18025940000109 é um cnpj válido.');
test.equal(cnpj2.clean(), '18025940000109', 'A saída clean de 18025940000109 é 18025940000109.');
test.equal(cnpj2.mask(), '18.025.940/0001-09', 'A saída mask de 18025940000109 é 18.025.940/0001-09.');

const cnpj3 = new Cnpj('18.025.940/1001-09');
test.equal(cnpj3.isValid(), false, '18.025.940/1001-09 não é um cnpj válido.');
test.equal(cnpj3.clean(), 'não existe', "A saída clean de 18.025.940/1001-09 é 'não existe'.");
test.equal(cnpj3.mask(), 'não existe', "A saída mask de 18.025.940/1001-09 é 'não existe'.");

const cnpj4 = new Cnpj('18025940100109');
test.equal(cnpj3.isValid(), false, '18025940100109 não é um cnpj válido.');
test.equal(cnpj3.clean(), 'não existe', "A saída clean de 18025940100109 é 'não existe'.");
test.equal(cnpj3.mask(), 'não existe', "A saída mask de 18025940100109 é 'não existe'.");
test.end();
