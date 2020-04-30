import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { stringify } from '@angular/core/src/render3/util';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  let fixture;
  let app: AppComponent;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should generate a password with the correct length', () => {
    const testLength = 3;

    app.lengthControl = testLength;
    app.getNewPassword();

    expect(app.output.length).toEqual(testLength);
  });

  it('should use lower case letters when lower case is enabled', () => {
    let result: string;
    app.lowerToggleControl = true;
    app.getNewPassword();
    result = app.output;
    expect(result).toMatch(/^[a-z]{5}$/);
    app.lowerToggleControl = false;
  });

  it('should use upper case letters when upper case is enabled', () => {
    app.lowerToggleControl = false;
    app.upperToggleControl = true;
    app.getNewPassword();
    const result = app.output;
    expect(result).toMatch(/^[A-Z]{5}$/);
    app.upperToggleControl = false;
  });

  it('should use numbers when numbers are enabled', () => {
    app.lowerToggleControl = false;
    app.numberToggleControl = true;
    app.getNewPassword();
    const result = app.output;
    expect(result).toMatch(/^[0-9]{5}$/);
    app.numberToggleControl = false;
  });

  it('should use the provided special characters when the special toggle is enabled', () => {
    app.lowerToggleControl = false;
    app.specialToggleControl = true;
    app.specialCharactersControl = '!-_';
    app.getNewPassword();
    const result = app.output;
    expect(result).toMatch(/^[!-_]{5}$/);
  });

});
