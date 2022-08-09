import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  const config = new DocumentBuilder()
    .setTitle('FounderConnessi')
    .setDescription('Documentazione delle API del sistema di BanConnesso.')
    .addServer('https://api.founderconnessi.it')
    .setVersion(process.env.npm_package_version)
    .build();
  const options = {
    customSiteTitle: "FounderConnessi | API",
    customfavIcon: 'https://i.imgur.com/EayOzNt.png',
    swaggerOptions: { 
      defaultModelsExpandDepth: -1,
      supportedSubmitMethods: []
    },
    customCss: `
        .topbar-wrapper img { 
          content: url(\'https://i.imgur.com/EayOzNt.png\'); 
          width:50px; 
          height:auto;
        }
        .swagger-ui .topbar { 
          background-color: #484848; 
        }`
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document, options);
  await app.listen(3000);
}
bootstrap();
