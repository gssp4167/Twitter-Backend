import mongoose from "mongoose";


export const connect = async () => {

    await mongoose.connect("mongodb+srv://gssp4167:gssp4167@cluster0.l5smldy.mongodb.net/?retryWrites=true&w=majority")
}

