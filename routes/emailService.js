// emailService.js
const nodemailer = require('nodemailer');

// Function to send email
async function sendContactFormEmail(formData) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cfrerealty@gmail.com',
        pass: 'eagm eali fezd dfzp' // Your app-specific password
      }
    });

    const mailOptions = {
      from: formData.email,
     //  to: 'cfrerealty@gmail.com',
    to:  ['cfrerealty@gmail.com', 'leads.dtg@gmail.com'],
      subject: 'New Contact Form Submission from cfrerealty',
      text: `You have received a new contact form submission:\n
             Name: ${formData.name}\n
             Mobile Number: ${formData.mobileNumber}\n
             Email: ${formData.email}\n
             Message: ${formData.message}\n`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendContactFormEmail };
