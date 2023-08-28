export class Product{
    constructor(
        public id: number,
        public sku: number, 
        public name: string,
        public brand: string,
        public product_enabled: boolean
    ){

    }
}