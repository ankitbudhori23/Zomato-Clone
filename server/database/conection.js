import mongoose from "mongoose";

export default async () => {
    return mongoose.connect("mongodb+srv://ankit:ankit@atlascluster.gxvhhpj.mongodb.net/Zomato?retryWrites=true&w=majority")
}