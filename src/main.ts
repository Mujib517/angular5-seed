import './styles.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);


