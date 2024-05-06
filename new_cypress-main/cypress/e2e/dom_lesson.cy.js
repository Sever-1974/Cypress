describe('Проверка авторизации', function () {
 
    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт
        
        cy.get('#mail').type('german@dolnikov.ru');// Ввёл верный логин
        cy.get('#pass').type('iLoveqastudio1');// Ввёл верный пароль
        cy.get('#loginButton').click();// Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');// После авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю

     })
 
     it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт
        cy.get('#forgotEmailButton').click();// Нажал кнопку "Забыли пароль"
        
        cy.get('#forgotForm > .header').contains('Восстановите пароль');// После нажатия на Восст пароль вижу текст
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю

        cy.get('#mailForgot').type('german222222@dolnikov.ru');// Ввести адрес почты
        cy.get('#restoreEmailButton').click();// Нажал кнопку Отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// После оправки кода вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю

 
     })

     it('Ввод не верного пароля', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт

        cy.get('#mail').type('german@dolnikov.ru');// Ввёл верный логин
        cy.get('#pass').type('iLoveqa');// Ввёл не верный пароль
        cy.get('#loginButton').click();// Нажал кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// После ввода не верного пароля вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю
        
        
     })

     it('Ввод не верного логина', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт

        cy.get('#mail').type('german123456@dolnikov.ru');// Ввёл не верный логин
        cy.get('#pass').type('iiLoveqastudio1');// Ввёл верный пароль
        cy.get('#loginButton').click();// Нажал кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// После ввода не верного пароля вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю
        
        
     })

     it('Ввод логина без @', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт

        cy.get('#mail').type('germandolnikov.ru');// Ввёл логин без @
        cy.get('#pass').type('iiLoveqastudio1');// Ввёл верный пароль
        cy.get('#loginButton').click();// Нажал кнопку войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// После ввода логина без @ вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю
        
        
     })

     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // Защел на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru');// Ввёл логин  с заглавными буквами в тексте
        cy.get('#pass').type('iLoveqastudio1');// Ввёл верный пароль
        cy.get('#loginButton').click();// Нажал кнопку войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// После авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// В окне есть крестик и он виден пользователю
         
     })

 })
 
 
 // npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome