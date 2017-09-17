import { BrowserModule } from '@angular/platform-browser';import { NgModule } from '@angular/core';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { MdToolbarModule } from '@angular/material';import { MdSidenavModule } from '@angular/material';import { MdButtonModule } from '@angular/material';import { MdTabsModule } from '@angular/material';import { MdMenuModule } from '@angular/material';import { MdIconModule } from '@angular/material';import { MdInputModule } from '@angular/material';import { MdSelectModule } from '@angular/material';import { MdDatepickerModule } from '@angular/material';import { MdNativeDateModule } from '@angular/material';import { MdTableModule } from '@angular/material';import { MdDialogModule } from '@angular/material';import { MdCheckboxModule } from '@angular/material';import { MdCardModule } from '@angular/material';import { CdkTableModule } from '@angular/cdk';import { HttpModule } from '@angular/http';import { FormsModule } from '@angular/forms';import { RouterModule, Routes } from '@angular/router';import { AppComponent } from './app.component';import { dialogBox, dialogContent } from '../app/ContactsTabAssets/dialog.compnent';import { tripSelector } from '../app/PersonalTabAssets/tripSelector';import { dialogBox2, dialogContent2 } from '../app/ContactsTabAssets/dialog2.component';import { teamPicker } from '../app/TravelTabAssets/teamPicker';import { PersonalTab } from '../app/PersonalTabAssets/PersonalTab';import { ContactsTab } from '../app/ContactsTabAssets/ContactsTab';import { HealthTab } from '../app/HealthTabAssets/HealthTab';import { TravelTab } from '../app/TravelTabAssets/TravelTab';import { ConsentTab } from '../app/ConsentTabAssets/ConsentTab';import { contactsTable} from '../app/ContactsTabAssets/ContactsTable';import { TableFilteringExample2 } from '../app/PaymentsTabAssets/PaymentsTable';import { PaymentMethod } from '../app/PaymentsTabAssets/PaymentMethodDropdown';import { PaymentsTab } from '../app/PaymentsTabAssets/PaymentsTab';import { DocsTab } from '../app/DocsTabAssets/DocsTab';import { FileUploaderComponent } from '../app/DocsTabAssets/FileUpload';import { LoginPage } from '../app/LoginPage/LoginComponent'const pageRoutes: Routes =[		{path: 'HomePage', component: AppComponent},	{path: 'Login', component: LoginPage},	{path: '', redirectTo: '/Login', pathMatch: 'full'}]@NgModule({  declarations: [  	LoginPage,  	FileUploaderComponent,  	DocsTab,  	PaymentsTab,  	PaymentMethod,  	TableFilteringExample2,    contactsTable,  	ConsentTab,  	TravelTab,  	HealthTab,  	ContactsTab,  	PersonalTab,    AppComponent,    teamPicker,    dialogBox,    dialogContent,    tripSelector,    dialogBox2,    dialogContent2],    entryComponents:  [	dialogBox	  ],    imports: [  	FormsModule,  	CdkTableModule,  	HttpModule,  	MdCardModule,  	MdCheckboxModule,  	MdDialogModule,  	MdTableModule,  	MdNativeDateModule,  	MdDatepickerModule,  	MdSelectModule,  	MdInputModule,  	MdIconModule,  	MdMenuModule,    BrowserModule,    BrowserAnimationsModule,    MdToolbarModule,    MdSidenavModule,    MdButtonModule,    MdTabsModule,    RouterModule.forRoot    (		pageRoutes,		{enableTracing: true}	)	  ],  providers: [],  bootstrap: [AppComponent, dialogBox, dialogContent, tripSelector, dialogBox2, dialogContent2, teamPicker, PersonalTab, ContactsTab, HealthTab, TravelTab, ConsentTab, contactsTable, TableFilteringExample2, PaymentMethod, PaymentsTab, DocsTab, FileUploaderComponent, LoginPage]})export class AppModule {}