import { Injectable } from '@angular/core';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  async sendMail() {
    const SES_CONFIG = {
      accessKeyId: "ACCESS_KEY",
      secretAccessKey: "SECRET_KEY",
      region: "REGION",
    };

    const client = new SESClient(SES_CONFIG);

    const input = {
      Source: "guanconicolasfm@gmail.com",
      Destination: {
        ToAddresses: ["nicolaswanko95@gmail.com"]
      },
      Message: {
        Subject: {
          Data: "ASUNTO",
          Charset: "UTF-8"
        },
        Body: {
          Text: {
            Data: "Data del TEXT",
            Charset: "UTF-8"
          },
          Html: {
            Data: "<p> Data del HTML</p>",
            Charset: "UTF-8"
          }
        }
      },
      ReplyToAddresses: ["guanconicolas@hotmail.com"]
    };

    try {
      const command = new SendEmailCommand(input);
      const response = await client.send(command);
      console.log("Correo electrónico enviado con éxito:", response);
      return response;
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
      throw error; // Propaga el error para que pueda ser manejado en otro lugar si es necesario
    }
  }
}
