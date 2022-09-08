class Cnpj {
    private text: string;
    private clean_text: string;
    private cnpj_valid: boolean;
    private valid_digits: boolean;
    private only_fourteen_numbers: boolean;
    private digits: number[];

    constructor(cnpj: string) {
        this.text = cnpj;
        this.validateDigits();
        if(!this.only_fourteen_numbers){
            this.cleanText();
        }else{
            this.clean_text = this.text;
            this.applyMask();
        }
        this.cnpj_valid = this.validateCnpj();
    }

    public mask(): string{
        return this.text;
    }
    public clean(){
        return this.clean_text;
    }
    public getValidDigits(): boolean {
        return this.valid_digits;
    }

    public isValid(): boolean {
        return this.cnpj_valid;
    }

    private validateDigits(): void {
        const regexp1 = new RegExp('^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[\/][0-9]{4}[-][0-9]{2}$');
        const regexp2 = new RegExp('^[0-9]{14}$');
        if(regexp1.test(this.text)){
            this.valid_digits = true;
        }else if(regexp2.test(this.text)){
            this.valid_digits = true;
            this.only_fourteen_numbers = true;
        }else{
            this.valid_digits = false;
            this.only_fourteen_numbers = false;
        }
    }

    private validateCnpj(): boolean{
        let digits_for_validation_one: number[] = [5,4,3,2,9,8,7,6,5,4,3,2];
        let digits_for_validation_two: number[] = [6,5,4,3,2,9,8,7,6,5,4,3,2];
        this.extractDigits();
        let sum: number = 0;
        for(let i = 0; i < 12; i++){
            sum += digits_for_validation_one[i] * this.digits[i];
        }
        let rest_of_division: number = sum % 11;
        let check_digit_one: number;
        if(rest_of_division < 2){
            check_digit_one = 0;
        }else{
            check_digit_one = 11 - rest_of_division;
        }
        if(this.digits[12] != check_digit_one) return false;
        let check_digit_two: number;
        sum = 0;
        for(let i = 0; i < 13; i++){
            sum += digits_for_validation_two[i] * this.digits[i];
        }
        rest_of_division = sum % 11;
        if(rest_of_division < 2){
            check_digit_two = 0;
        }else{
            check_digit_two = 11 - rest_of_division;
        }
        if(this.digits[13] != check_digit_two) return false;
        return true;
    }

    private extractDigits(): void {
        this.digits = new Array();
        let digits: string[] = this.clean_text.split('');
        for(let i = 0; i < digits.length; i++){
            this.digits.push(Number(digits[i]));
        }
    }
    private cleanText(): void {
        this.clean_text = this.text.replace(/[^0-9]/g, '');
    }
    private applyMask(){
        this.text = this.clean_text
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
}
//const cnpj = new Cnpj('76535764000143');
let cnpj: Cnpj = new Cnpj('76.535.764/0001-43');

console.log(cnpj.isValid());
console.log(cnpj.mask());
console.log(cnpj.clean());