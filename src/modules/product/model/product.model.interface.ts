export interface IProduct extends Document {
   _id?: any;
   name: string;
   value: number;
   quantity: number;
   description: string;
   photo: string;
}
