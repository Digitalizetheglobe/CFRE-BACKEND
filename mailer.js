const nodemailer = require('nodemailer');
const config = require('./config/config.json'); // Load configuration

// Determine environment
const env = process.env.NODE_ENV || 'development';
const { gmailUser, gmailPass } = config[env];

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

// Function to send email
const sendContactFormEmail = async (contactForm) => {
  const mailOptions = {
    from: gmailUser,
    to: gmailUser, // Send email to yourself or the recipient you configure
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p>You have received a new contact form submission with the following details:</p>
      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <th style="text-align: left; border-bottom: 1px solid #ddd; padding: 8px;">Field</th>
          <th style="text-align: left; border-bottom: 1px solid #ddd; padding: 8px;">Details</th>
        </tr>
        <tr>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">Name</td>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">${contactForm.name}</td>
        </tr>
        <tr>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">Email</td>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">${contactForm.email}</td>
        </tr>
        <tr>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">Mobile Number</td>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">${contactForm.mobileNumber}</td>
        </tr>
        <tr>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">Message</td>
          <td style="border-bottom: 1px solid #ddd; padding: 8px;">${contactForm.message}</td>
        </tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendContactFormEmail };
