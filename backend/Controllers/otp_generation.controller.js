const express = require('express');
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const Otp_gen = async (req, res) => {
    const { mobile } = req.body;

    // Ensure the mobile number is in E.164 format
    const e164Mobile = mobile.startsWith('+') ? mobile : `+${mobile}`;

    console.log(`Sending OTP to ${e164Mobile} from ${twilioPhoneNumber}`);

    try {
        const otp = Math.floor(100000 + Math.random() * 900000);

        const message = await twilioClient.messages.create({
            body: `Your 6 digit OTP - ${otp}`,
            to: e164Mobile,
            from: twilioPhoneNumber,
        });

        console.log('Message SID:', message.sid);

        res.json({ success: true, message: 'OTP sent successfully.' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, message: 'Failed to send OTP.' });
    }
};

module.exports = Otp_gen;
