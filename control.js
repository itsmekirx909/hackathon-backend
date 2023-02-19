const ambulanceModel = require('../models/schema/ambulance')
const fireModel = require('../models/schema/fire')
const policeModel = require('../models/schema/police')

// all cart related apis (all post api)
const checkoutControllers = {

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

    },

    ambulanceGet: (req, res) => {

        ambulanceModel.find({}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Ambulance data get',
                status: true,
                data: success
            })
        })

    },

    fireGet: (req, res) => {

        fireModel.find({}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Fire data get',
                status: true,
                data: success
            })
        })

    },

    policeGet: (req, res) => {

        ambulanceModel.find({}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Police data get',
                status: true,
                data: success
            })
        })

    },

    ambulanceStatus: (req, res) => {
        const {userId, emergency} = req.body
        const status = 'Completed'

        ambulanceModel.findOneAndUpdate({user_id: userId, emergency: emergency}, {status: status}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Status updated',
                status: true,
                data: success
            })
        })

    },

    fireStatus: (req, res) => {
        const {userId, emergency} = req.body
        const status = 'Completed'

        fireModel.findOneAndUpdate({user_id: userId, emergency: emergency}, {status: status}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Status updated',
                status: true,
                data: success
            })
        })

    },

    policeStatus: (req, res) => {
        const {userId, emergency} = req.body
        const status = 'Completed'

        policeModel.findOneAndUpdate({user_id: userId, emergency: emergency}, {status: status}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Status updated',
                status: true,
                data: success
            })
        })

    },

    ambulanceDelete: (req, res) => {
        const {userId, emergency} = req.body

        ambulanceModel.findOneAndDelete({user_id: userId, emergency: emergency}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency Deleted',
                status: true,
                data: success
            })
        })

    },

    fireDelete: (req, res) => {
        const {userId, emergency} = req.body

        fireModel.findOneAndDelete({user_id: userId, emergency: emergency}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency Deleted',
                status: true,
                data: success
            })
        })

    },

    policeDelete: (req, res) => {
        const {userId, emergency} = req.body

        policeModel.findOneAndDelete({user_id: userId, emergency: emergency}, (error, success) => {
            if (error) {
                res.json({
                    message: 'Error from database',
                    status: false
                })
                return;
            }

            res.json({
                message: 'Emergency Deleted',
                status: true,
                data: success
            })
        })

    },

}

module.exports = checkoutControllers