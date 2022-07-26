
# OnTop

# Components

* action
* button
* input-search
* menu
* table

# Pages

* contracts

# Interfaces

* table-item
  
# Block, Element, Modifier methodology (BEM) 


example sass
```sass
    .contract
        width: 100%
        padding-bottom: 100px
        @media screen and (max-width: 992px)
            padding-bottom: 50px

        &-title
            text-align: center
            margin-top: 62px

        &-filter,&-table
            width: 1079px
            margin-left: auto
            margin-right: auto
            @media screen and (max-width: 1100px)
                width: 900px
            @media screen and (max-width: 992px)
                width: 100%
```
example html
```html
    <div class="contract">
    <div class="contract-menu">
        <app-menu></app-menu>
    </div>

    <div class="contract-title">
        <h1>Contracts for Lucas </h1>
    </div>

    <div class="contract-filter">
        <app-filter></app-filter>
    </div>

    <div class="contract-table">
        <app-table [tableList]="table"></app-table>
    </div>
    <div class="contract-msg scale-up-center" *ngIf="showMsg">
        <img src="assets/svg/msg-icon.svg" alt="">
    </div>
</div>
```
# Unit testing 

 Exemple simple test in app-button
```ts
it('should click button', () => {
    spyOn(component.clicked, 'emit');
    const btn = fixture.nativeElement.querySelector(
      'button'
    );
    btn.click()
    fixture.detectChanges()
    expect(component.clicked.emit).toHaveBeenCalled();
  });
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
