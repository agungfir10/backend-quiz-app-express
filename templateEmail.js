module.exports = function templateEmail(auth_token, fullname) {
  return `
      <!DOCTYPE html>
  
  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
      <title></title>
      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          th.column {
              padding: 0
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          @media (max-width:660px) {
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .image_block img.big {
                  width: auto !important;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
          }
      </style>
  </head>
  
  <body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;" width="100%">
          <tbody>
              <tr>
                  <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                          role="presentation"
                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="20" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="padding-bottom:12px;padding-top:60px;">
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="image_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="padding-top:50px;">
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p
                                                                              style="margin: 0; font-size: 16px; text-align: center; margin-bottom: 20px;">
                                                                              <span
                                                                                  style="font-size:30px;color:#2b303a;"><strong>Welcome,
                                                                                      ${fullname}</strong>
                                                                              </span>
                                                                          </p>
                                                                          <p
                                                                              style="margin: 0; font-size: 16px; text-align: center;">
                                                                              <span
                                                                                  style="font-size:30px;color:#2b303a;"><strong>Verifikasi
                                                                                      bahwa ini adalah email yang kamu
                                                                                      daftarkan di Quiz App.</strong>
                                                                              </span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; line-height: 1.5;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
                                                                              <span
                                                                                  style="color:#808389;font-size:15px;">Jika
                                                                                  kamu memang mendaftarkan diri di
                                                                                  aplikasi Quiz App, untuk verifikasi klik
                                                                                  link dibawah.</span>
  
                                                                          </p>
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
                                                                              <span
                                                                                  style="color:#808389;font-size:15px;">Kamu
                                                                                  boleh mengabaikan jika tidak merasa
                                                                                  mendaftarkan diri ke aplikasi Quiz
                                                                                  App.</span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3fafa;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;"
                                                      width="100%">
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="button_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
                                                                  <div align="center">
                                                                      <div
                                                                          style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#1aa19c;border-radius:60px;width:auto;border-top:1px solid #1aa19c;border-right:1px solid #1aa19c;border-bottom:1px solid #1aa19c;border-left:1px solid #1aa19c;padding-top:15px;padding-bottom:15px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;">
                                                                          <span
                                                                              style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                  style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong><a href="https://localhost:3000/verify?auth_token=${auth_token}" style="text-decoration:none;color:white;">Verify Account</a></strong>
                                                                                      </span>
                                                                                      </span></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="padding-bottom:12px;padding-top:60px;">
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="20" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #2b303a;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <th class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
  
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; line-height: 1.5;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;">
                                                                              <span
                                                                                  style="color:#95979c;font-size:12px;">Segala
                                                                                  keamanan dan privacy Anda kami
                                                                                  jamin.</span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="divider_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                                                  <div align="center">
                                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                                          role="presentation"
                                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                          width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner"
                                                                                  style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;">
                                                                                  <span></span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; line-height: 1.2;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: left;">
                                                                              <span
                                                                                  style="color:#95979c;font-size:12px;">Quiz
                                                                                  App
                                                                                  Copyright © 2020</span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  
  </html>
      `;
};
