import * as nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODE_MAILER_USER, // generated ethereal user
    pass: process.env.NODE_MAILER_PASS, // generated ethereal password
  },
});
