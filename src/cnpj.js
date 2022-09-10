"use strict";
exports.__esModule = true;
var Cnpj = /** @class */ (function () {
    function Cnpj(cnpj) {
        this.text = cnpj;
        this.validateDigits();
        if (!this.only_fourteen_numbers) {
            this.cleanText();
        }
        else {
            this.clean_text = this.text;
            this.applyMask();
        }
        if (this.validateCnpj()) {
            this.cnpj_valid = true;
        }
        else {
            this.cnpj_valid = false;
            this.text = 'não existe';
            this.clean_text = 'não existe';
        }
    }
    Cnpj.prototype.mask = function () {
        return this.text;
    };
    Cnpj.prototype.clean = function () {
        return this.clean_text;
    };
    Cnpj.prototype.getValidDigits = function () {
        return this.valid_digits;
    };
    Cnpj.prototype.isValid = function () {
        return this.cnpj_valid;
    };
    Cnpj.prototype.validateDigits = function () {
        var regexp1 = new RegExp('^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[\/][0-9]{4}[-][0-9]{2}$');
        var regexp2 = new RegExp('^[0-9]{14}$');
        if (regexp1.test(this.text)) {
            this.valid_digits = true;
        }
        else if (regexp2.test(this.text)) {
            this.valid_digits = true;
            this.only_fourteen_numbers = true;
        }
        else {
            this.valid_digits = false;
            this.only_fourteen_numbers = false;
        }
    };
    Cnpj.prototype.validateCnpj = function () {
        var digits_for_validation_one = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var digits_for_validation_two = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        this.extractDigits();
        var sum = 0;
        for (var i = 0; i < 12; i++) {
            sum += digits_for_validation_one[i] * this.digits[i];
        }
        var rest_of_division = sum % 11;
        var check_digit_one;
        if (rest_of_division < 2) {
            check_digit_one = 0;
        }
        else {
            check_digit_one = 11 - rest_of_division;
        }
        if (this.digits[12] != check_digit_one)
            return false;
        var check_digit_two;
        sum = 0;
        for (var i = 0; i < 13; i++) {
            sum += digits_for_validation_two[i] * this.digits[i];
        }
        rest_of_division = sum % 11;
        if (rest_of_division < 2) {
            check_digit_two = 0;
        }
        else {
            check_digit_two = 11 - rest_of_division;
        }
        if (this.digits[13] != check_digit_two)
            return false;
        return true;
    };
    Cnpj.prototype.extractDigits = function () {
        this.digits = new Array();
        var digits = this.clean_text.split('');
        for (var i = 0; i < digits.length; i++) {
            this.digits.push(Number(digits[i]));
        }
    };
    Cnpj.prototype.cleanText = function () {
        this.clean_text = this.text.replace(/[^0-9]/g, '');
    };
    Cnpj.prototype.applyMask = function () {
        this.text = this.clean_text
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    };
    return Cnpj;
}());
exports.Cnpj = Cnpj;
