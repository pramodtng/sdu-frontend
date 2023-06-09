import nodemailer from "nodemailer";


async function sendMail(req, res) {
    try {
        var transporter = nodemailer.createTransport({
            host: "smtp1.tashicell.com",
            port: 587,
            auth: {
                user: "ticl-alerts@tashicell.com",
                pass: "77889977",
            },
        });

        var options = {
            from: "ticl-alerts@tashicell.com",
            to: "sw_engineer12.sdu@tashicell.com",
            subject: "Test",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div className="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div className="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from : ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.details}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
        };
        transporter.sendMail(options, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

export default sendMail;