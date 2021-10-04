const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const firebase = require("firebase");

admin.initializeApp();

// email configureations
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: "465",
    secure: true,
    auth: {
        user: "contact@paulsid.com",
        pass: "sapna777"
    }
});


