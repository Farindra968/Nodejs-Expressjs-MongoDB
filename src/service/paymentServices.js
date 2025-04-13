import Payment from "../modules/payment.js"

const createPayment = async(data)=> {
    return await Payment.create(data)
}

const deletePayment = async (id, data) => {
    return await Payment.findByIdAndDelete(id, data)
}
export default {createPayment, deletePayment} 