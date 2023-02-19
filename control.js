const ambulanceModel = require('../models/schema/ambulance')
const fireModel = require('../models/schema/fire')
const policeModel = require('../models/schema/police')

// all cart related apis (all post api)
const checkoutControllers = {
    //     addToCart: async (req, res)=>{
    //         const {cartProductName, cartProductDescription, cartProductImage, cartProductPrice, userId} = req.body

    // if(!cartProductName || !cartProductDescription || !cartProductImage || !cartProductPrice || !userId){
    //     res.json({
    //         message: 'Could not get product data',
    //         status: false
    //     })
    //     return;
    // }

    // const updatedData = {
    //     cart_product_name: cartProductName,
    //     cart_product_description: cartProductDescription,
    //     cart_product_image: cartProductImage,
    //     cart_product_price: cartProductPrice,
    // }

    // let oldData;

    // SignUpModel.findById({_id: userId}, (error, data)=>{
    //     if(error){
    //         res.json({
    //             message: 'Database error',
    //             status: false
    //         })
    //         return;
    //     }else{
    //         if(!data){
    //             res.json({
    //                 message: 'No user logged in',
    //                 status: false
    //             })
    //         }else{
    //             oldData = data.cart
    //             oldData.push(updatedData)


    //             SignUpModel.findOneAndUpdate({_id: userId}, {cart: oldData}, (error, data)=>{
    //                 if(error){
    //                     res.json({
    //                         message: 'No user logged in',
    //                         status: false
    //                     })
    //                     return;
    //                 }else{
    //                         res.json({
    //                             message: 'Added to cart',
    //                             status: true,
    //                         })
    //                 }

    //                 })
    //     }
    // }
    // })

    //     },

    ambulanceController: (req, res) => {
        const { userId, emergency, location, type, status } = req.body

        if (!userId || !emergency || !location || !type || !status) {
            res.json({
                message: 'Could not get data from the frontend',
                status: false
            })
            return;
        }

        const dataSend = {
            user_id: userId,
            emergency,
            location,
            type,
            status
        }

        ambulanceModel.create(dataSend, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency added',
                status: true,
                data: success
            })
        })

    },

    fireController: (req, res) => {
        const { userId, emergency, location, type, status } = req.body

        if (!userId || !emergency || !location || !type || !status) {
            res.json({
                message: 'Could not get data from the frontend',
                status: false
            })
            return;
        }

        const dataSend = {
            user_id: userId,
            emergency,
            location,
            type,
            status
        }

        fireModel.create(dataSend, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency added',
                status: true,
                data: success
            })
        })

    },

    policeController: (req, res) => {
        const { userId, emergency, location, type, status } = req.body

        if (!userId || !emergency || !location || !type || !status) {
            res.json({
                message: 'Could not get data from the frontend',
                status: false
            })
            return;
        }

        const dataSend = {
            user_id: userId,
            emergency,
            location,
            type,
            status
        }

        policeModel.create(dataSend, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency added',
                status: true,
                data: success
            })
        })

    }
}

module.exports = checkoutControllers