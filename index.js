const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require('cors');
var ejs = require('ejs');
var path = require('path')

//view engine
app.set("view engine", "ejs");

//static follder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
app.use(cors()) // Use this after the variable declaration


app.get("/", (req, res) => {
    // res.json({ message: "Hello from server!" });
    res.render('nodemailer')
})

app.post("/email", async (req,res) => {
  console.log(req.body.email);
  var email = req.body.email;
  var transporter = nodemailer.createTransport({
    host: 'mail.blitzfly.com',
    port: 587,
    secure: false,
    auth:{
        user: 'test@blitzfly.com',
        pass: '12345Abc'
    },
    tls:{
        rejectUnauthorized:false,
    }
});
  var mailoption = {
    from:'"MyArtNation" <test@blitzfly.com>',
    to: 'lalit18151@gmail.com',
    subject:'THANKS!!!!',
    text:`he just subscribed to Myartnation ${email}`,
    // template: 'tamplate',
}
transporter.sendMail(mailoption, function(err,data){
    if(err){
        console.log(str(err));
    }else{
        console.log('mail sent!!!!');
         res.sendD(err)
    }
})
    const output = `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 61% !important; } #u_content_image_1 .v-text-align { text-align: center !important; } #u_content_text_2 .v-container-padding-padding { padding: 30px 15px 15px !important; } #u_content_button_1 .v-container-padding-padding { padding: 20px 10px 30px !important; } #u_content_button_1 .v-padding { padding: 10px 35px !important; } #u_content_heading_2 .v-text-align { text-align: center !important; } #u_content_text_1 .v-container-padding-padding { padding: 10px 15px 15px !important; } #u_content_text_1 .v-text-align { text-align: center !important; } #u_content_text_3 .v-text-align { text-align: center !important; } #u_content_heading_3 .v-text-align { text-align: center !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px 15px 15px !important; } #u_content_text_4 .v-text-align { text-align: center !important; } #u_content_text_5 .v-text-align { text-align: center !important; } }
@media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-50 {
    width: 300px !important;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: calc(100% - 40px) !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}


</style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f0f0f0;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f0f0f0;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr style="display: flex>
    <td style="display: flex; justify-content: center; align-item: center; padding-right: 0px;padding-left: 0px" align="center">
      
      <img align="center" border="0" src="cid:image6@man.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 28%;max-width: 156.8px;" width="156.8" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="cid:image8@man.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px;" width="600" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table id="u_content_text_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 20px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-text-align" style="color: black; line-height: 150%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 150%;"><span style="font-family: Cabin, sans-serif; font-size: 16px; line-height: 24px;">Thank you for showing interest in MyArttNation. You will get early access to our website as soon as it  goes live. We are really happy to have you onboard. </span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>


<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div align="center">
  <div style="display: table; max-width:187px;">
  <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;  width:187px;"><tr><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="200" style="width:200px; padding-right: 0px;"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="120" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: center;margin-right: 0px">
      <tbody><tr style="vertical-align: center">
      <td style="border-collapse: collapse !important;font-size: 12px; vertical-align: middle"><b>Follow us</b></td>
      <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: center">
        <a href="https://www.instagram.com/myartnation/" title="Instagram" target="_blank">
          <img src="cid:image4@man.com" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td>
      </tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <h1 class="v-text-align" style="margin: 0px; color: #333333; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Cabin',sans-serif; font-size: 18px;">
    MyArtNation
  </h1>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-text-align" style="color: #333333; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">services@blitzfly.com</p>
    </div>
      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 2px solid #f0f0f0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 15px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-text-align" style="color: #7e8c8d; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 19.6px;">&copy; MyArtNation &nbsp;- &nbsp;All Rights Reserved</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: white">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: white;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

    `
    var transporter = nodemailer.createTransport({
      host: 'mail.blitzfly.com',
      port: 587,
      secure: false,
      auth:{
          user: 'test@blitzfly.com',
          pass: '12345Abc'
      },
      tls:{
          rejectUnauthorized:false,
      }
  });
      // send mail with defined transport object
    var mailoption = {
        from:'"Thankyou" <test@blitzfly.com>',
        to: req.body.email,
        subject:'nodemailer',
        html: output,
        //text:`thanks ${name}, we have reciever your query and our agent will contact you any time between  ${time}`,
        // template: 'tamplate',
        attachments: [{
            filename: 'image-6new.png',
            path: './public/images/image-6new.png',
            cid: 'image6@man.com' //same cid value as in the html img src
        },
        {
            filename: 'image-8neww.gif',
            path: './public/images/image-8neww.gif',
            cid: 'image8@man.com' //same cid value as in the html img src
        },
        // {
        //     filename: 'image-7.jpeg',
        //     path: './public/images/image-7.jpeg',
        //     cid: 'image7@man.com' //same cid value as in the html img src
        // },
        // {
        //     filename: 'image-5new.jpg',
        //     path: './public/images/image-5new.jpg',
        //     cid: 'image5@man.com' //same cid value as in the html img src
        // },
        {
            filename: 'image-4.png',
            path: './public/images/image-4.png',
            cid: 'image4@man.com' //same cid value as in the html img src
        },
        // {
        //     filename: 'image-3.png',
        //     path: './public/images/image-3.png',
        //     cid: 'image3@man.com' //same cid value as in the html img src
        // },
        // {
        //     filename: 'image-1.png',
        //     path: './public/images/image-1.png',
        //     cid: 'image1@man.com' //same cid value as in the html img src
        // },
        // {
        //     filename: 'image-2.png',
        //     path: './public/images/image-2.png',
        //     cid: 'image2@man.com' //same cid value as in the html img src
        // },
        // {
        //     filename: 'image-9new.jpg',
        //     path: './public/images/image-9new.jpg',
        //     cid: 'image9@man.com' //same cid value as in the html img src
        // },
        
    ]
    }
    transporter.sendMail(mailoption, function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log('mail sent!!!!');
        }
    })
})
app.listen(3001, () => {console.log("app started at http://localhost:3001")})


//<table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
        
// <div class="v-text-align" align="center">
//   <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; ont-family:arial,helvetica,sans-serif;"><tr><td class="v-text-align" style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:39px; v-text-anchor:middle; width:228px;" arcsize="51.5%" stroke="f" fillcolor="#ffa403"><w:anchorlock/><center style="color:#000000;font-family:arial,helvetica,sans-serif;"><![endif]-->
//     <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: white; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; ">
//       <span class="v-padding" style="display:block;padding:10px 35px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px; font-family: Lato, sans-serif;">Complete Registration</span></span>
//     </a>
//   <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
// </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 20px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 2px solid #907d64;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//     <tbody>
//       <tr style="vertical-align: top">
//         <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//           <span>&#160;</span>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <h1 class="v-text-align" style="margin: 0px; color: #ffa400; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: tahoma,arial,helvetica,sans-serif; font-size: 28px;">
//     Upcoming Events
//   </h1>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="14%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 3px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//     <tbody>
//       <tr style="vertical-align: top">
//         <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//           <span>&#160;</span>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: white">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #4c5171;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #4c5171;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
// <table width="100%" cellpadding="0" cellspacing="0" border="0">
//   <tr>
//     <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
//       <img align="center" border="0" src="cid:image7@man.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 280px;" width="280" class="v-src-width v-src-max-width"/>
      
//     </td>
//   </tr>
// </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
// <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <h1 class="v-text-align" style="margin: 0px; color: #06cdee; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: tahoma,arial,helvetica,sans-serif; font-size: 22px;">
//     <span style="text-decoration: underline;">Lake View At Night</span>
//   </h1>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #e7e8ee; line-height: 150%; text-align: left; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 150%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 21px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #f1c40f; line-height: 140%; text-align: left; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">March 21,&nbsp; 7 PM</span></strong></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: transparent">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #4c5171;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #4c5171;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #907d64;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//     <tbody>
//       <tr style="vertical-align: top">
//         <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//           <span>&#160;</span>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: transparent">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #4c5171;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #4c5171;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
// <table width="100%" cellpadding="0" cellspacing="0" border="0">
//   <tr>
//     <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
//       <img align="center" border="0" src="cid:image5@man.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 280px;" width="280" class="v-src-width v-src-max-width"/>
      
//     </td>
//   </tr>
// </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
// <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table id="u_content_heading_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <h1 class="v-text-align" style="margin: 0px; color: #06cdee; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: tahoma,arial,helvetica,sans-serif; font-size: 22px;">
//     <span style="text-decoration: underline;">Sea Beach View</span>
//   </h1>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table id="u_content_text_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #e7e8ee; line-height: 150%; text-align: left; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 150%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 21px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table id="u_content_text_5" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #f1c40f; line-height: 140%; text-align: left; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">March 31,&nbsp; 6 PM</span></strong></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: transparent">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #4c5171;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #4c5171;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//     <tbody>
//       <tr style="vertical-align: top">
//         <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//           <span>&#160;</span>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: transparent">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #06465f;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #06465f;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <h1 class="v-text-align" style="margin: 0px; color: #ffa403; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: tahoma,arial,helvetica,sans-serif; font-size: 28px;">
//     Featured Photograph
//   </h1>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="14%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 3px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//     <tbody>
//       <tr style="vertical-align: top">
//         <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
//           <span>&#160;</span>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
// <table width="100%" cellpadding="0" cellspacing="0" border="0">
//   <tr>
//     <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
//       <img align="center" border="0" src="cid:image9@man.com" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;" width="580" class="v-src-width v-src-max-width"/>
      
//     </td>
//   </tr>
// </table>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 140%;"><em>Noah Emma, <span style="color: #f1c40f; font-size: 14px; line-height: 19.6px;">April 12, 20XX</span></em></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>



// <div class="u-row-container" style="padding: 0px;background-color: transparent">
//   <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffc94c;">
//     <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
//       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffc94c;"><![endif]-->
      
// <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
// <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
//   <div style="width: 100% !important;">
//   <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <h1 class="v-text-align" style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Cabin',sans-serif; font-size: 22px;">
//     Want to be featured Next?
//   </h1>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
//   <div class="v-text-align" style="color: #333333; line-height: 140%; text-align: center; word-wrap: break-word;">
//     <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span></p>
// <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"> tempor incididunt ut labore et dolore magna aliqua. </span></p>
//   </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

// <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
//   <tbody>
//     <tr>
//       <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
        
// <div class="v-text-align" align="center">
//   <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; ont-family:arial,helvetica,sans-serif;"><tr><td class="v-text-align" style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:43px; v-text-anchor:middle; width:198px;" arcsize="46.5%" stroke="f" fillcolor="#06465f"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
//     <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #06465f; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; ">
//       <span class="v-padding" style="display:block;padding:12px 30px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px; font-family: Lato, sans-serif;">Submit Your Photos</span></span>
//     </a>
//   <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
// </div>

//       </td>
//     </tr>
//   </tbody>
// </table>

//   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
//   </div>
// </div>
// <!--[if (mso)|(IE)]></td><![endif]-->
//       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
//     </div>
//   </div>
// </div>
// <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
// <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 15px">
//   <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
//     <a href="https://facebook.com/" title="Facebook" target="_blank">
//       <img src="cid:image2@man.com" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
//     </a>
//   </td></tr>
// </tbody></table>
// <!--[if (mso)|(IE)]></td><![endif]-->

// <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
// <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 15px">
//   <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
//     <a href="https://twitter.com/" title="Twitter" target="_blank">
//       <img src="cid:image1@man.com" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
//     </a>
//   </td></tr>
// </tbody></table>
// <!--[if (mso)|(IE)]></td><![endif]-->

// <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
// <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;margin-right: 15px">
//   <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
//     <a href="https://linkedin.com/" title="LinkedIn" target="_blank">
//       <img src="cid:image3@man.com" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
//     </a>
//   </td></tr>
// </tbody></table>
// <!--[if (mso)|(IE)]></td><![endif]-->
//<p style="font-size: 14px; line-height: 140%;">Contact Us &nbsp;/ &nbsp;Privacy Policy &nbsp;/ &nbsp;<span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;">Unsubscribe</span> &nbsp;/ &nbsp;Terms</p>
  