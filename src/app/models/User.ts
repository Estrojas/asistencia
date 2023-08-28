export class User{
    constructor(
        public id: number,
        public rut: string,
        public email: string,
        public name: string,
        public last_name: string,
        public user_type: string,
        public user_enabled: boolean,
        public phone: string,
        public address: string
    ){
    }
}