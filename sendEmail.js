const apiKey =
  "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";
const sgMail = require("@sendgrid/mail");

// Set your SendGrid API key
sgMail.setApiKey(apiKey);

async function sendEmail(name, email, subject, text) {
  console.log(`Name: ${name} \n Email: ${email} \n Text: ${text}`);
  try {
    const msg = {
      from: "marketing@advancecnctechnologies.com",
      to: "marketing@advancecnctechnologies.com",

      subject,
      text: `Name: ${name} \n Email: ${email} \n Text: ${text}`,
    };

    const response = await sgMail.send(msg);
    console.log("Email sent successfully:", response);

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

module.exports = sendEmail;
