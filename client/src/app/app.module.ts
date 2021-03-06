import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { FormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';

import { EntryComponent } from './_Components/entry/entry.component';
import { AddEntryComponent } from './_Components/add-entry/add-entry.component';

import { HeaderComponent } from './_Layouts/_Shared/header/header.component';
import { AuthorizationComponent } from './_Layouts/authorization/authorization.component';
import { ProfileComponent } from './_Layouts/profile/profile.component';
import { TimelineComponent } from './_Layouts/timeline/timeline.component';
import { ExplorerComponent } from './_Layouts/explorer/explorer.component';
import { HomeComponent } from './_Layouts/home/home.component';

import { EntriesService } from './_Services/entries.service';
import { LoginComponent } from './_Components/Authorization/login/login.component';
import { SignupComponent } from './_Components/Authorization/signup/signup.component';
import { ForgotComponent } from './_Components/Authorization/forgot/forgot.component';
import { EmojiComponent } from './_Components/Emojis/emoji/emoji.component';

import { MessageService } from './_Services/message.service';
import { AuthenticationService } from './_Services/authentication.service';
import { AuthGuardService } from './_Services/auth-guard.service';
import { MessageComponent } from './_Layouts/_Shared/message/message.component';
import { EmojiService } from './_Services/emoji.service';
import { FollowersComponent } from './_Components/followers/followers.component';
import { FileUploaderComponent } from './_Components/file-uploader/file-uploader.component';
import { UploaderDirective } from './_Directives/uploader.directive';
import { UploaderService } from './_Services/uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    AuthorizationComponent,
    ProfileComponent,
    TimelineComponent,
    ExplorerComponent,
    HomeComponent,
    HeaderComponent,
    MessageComponent,
    EmojiComponent,
    FollowersComponent,
    FileUploaderComponent,
    UploaderDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [
    EntriesService,
    AuthenticationService,
    MessageService,
    AuthGuardService,
    EmojiService,
    UploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
