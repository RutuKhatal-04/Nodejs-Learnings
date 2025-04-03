import express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import sequelize from './postgresDB/pgConfig';
 
 

import { IPgService } from './postgresDB/pgInterface';
import { IClientService } from './interfaces/clientInterface';
import { IOrganisationService } from './interfaces/organisationInterface';
import { ISOWService } from './interfaces/sowInterface';
import { IInvoiceService } from './interfaces/invoiceInterface';
 
 
import { OrganisationController } from './controllers/organisationController';
import { ClientController } from './controllers/clientController';
import { SOWController } from './controllers/sowController';
import { InvoiceController } from './controllers/invoiceController';
 
 
import { ClientRoutes } from './routes/clientRoutes';
import { OrganisationRoutes } from './routes/organisationRoutes';
import { SOWRoutes } from './routes/sowRoutes';
import { InvoiceRoutes } from './routes/invoiceRoutes';
 
 
import { OrganisationService } from './services/organisationService';
import { ClientService } from './services/clientService';
import { SOWService } from './services/sowService';
import { InvoiceService } from './services/invoiceService';
import { PgService } from './postgresDB/pgService';
 
const app: Application = express();
const port: number = 8000;
 
app.use(bodyParser.json());
 
const container = new Container();
 
// Binding service to IService
container.bind<IOrganisationService>("IOrganisationService").to(OrganisationService);
container.bind<IClientService>("IClientService").to(ClientService);
container.bind<ISOWService>("ISOWService").to(SOWService);
container.bind<IPgService>("IPgService").to(PgService);
container.bind<IInvoiceService>("IInvoiceService").to(InvoiceService);
 
// Bind Controllers
container.bind<OrganisationController>(OrganisationController).toSelf();
container.bind<ClientController>(ClientController).toSelf();
container.bind<SOWController>(SOWController).toSelf();
container.bind<InvoiceController>(InvoiceController).toSelf();
 
// Bind Routes
container.bind<OrganisationRoutes>(OrganisationRoutes).toSelf();
container.bind<ClientRoutes>(ClientRoutes).toSelf();
container.bind<SOWRoutes>(SOWRoutes).toSelf();
container.bind<InvoiceRoutes>(InvoiceRoutes).toSelf();
 
 
// Retrieve Routes from the Container
const organisationRoutes = container.get<OrganisationRoutes>(OrganisationRoutes);
const clientRoutes = container.get<ClientRoutes>(ClientRoutes);
const sowRoutes = container.get<SOWRoutes>(SOWRoutes);
const invoiceRoutes = container.get<InvoiceRoutes>(InvoiceRoutes);
 
// Configure Routes
app.use('/organisation', organisationRoutes.getRouter());
app.use('/client', clientRoutes.getRouter());
app.use('/sow', sowRoutes.getRouter());
app.use('/invoice', invoiceRoutes.getRouter());
 
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 