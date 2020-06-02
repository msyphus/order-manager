# Production Order Manager

### Demo

A demo of this app is available [here.](https://glacial-badlands-50720.herokuapp.com/)

### General

This is a conceptual dashboard for managing production orders in a toy manufacturing facility.  When a customer places an order, the user can post it to the dashboard using the Add An Order field by simply entering the item description in the form field and clicking the Add Order button.

The order will be posted to the bottom of the Placed Orders column on the left side of the page along with a Close Order button.  When an order has been completed or cancelled, the user simply clicks the Close Order button and the order moves to the Completed Orders column on the right side of the screen.  Completed orders have a Reopen Order button to provide an option for reopening an order if circumstances require it (ex. rework, repeat order, user accidentally closing the order, etc.).

![Dashboard screenshot](/public/assets/images/screenshot.jpg)

All orders, placed and completed, are stored in a database.  This allows orders to remain on the dashboard across devices and browser sessions.

### Technical Information

This app was made using the following technologies:
* HTML
* CSS
* JavaScript
* jQuery
* Node.js
* Express.js
* Express Handlebars
* MySQL
* Heroku
* JawsDB