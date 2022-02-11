# **Project Name & Pitch**

## Stopwatch

An application with which you can manage your daily tasks built with React, Javascript, Sass, Firebase.

## **Installation and Setup Instructions**

Clone down this repository. You will need node and npm installed globally on your machine.

### Installation

Installation: 
`npm install`

To Run Test Suite:
`npm test`

To Start Server:
`npm start`

To Visit App:
`localhost:3000`

### **Reflection**

This app was a 1 week long test project for a company.

My task was to create an app with which you can manage your daily tasks.

I started this process by using the `create-react-app` framework, then adding `react-router-6.2` and connected with `firebase`.

In the app after signup and login, there are different pages, one of the **home page**, where you can see your focising question, one of the **create new timer page**, one of the **dashboard** page, from where you can go to the **timer/id page**. Last page you can custumize your timer's details. 

The timer has three modes.
> *work*,
*break*,
> *long break*

Each mode has its own color on the progressbar

> *work mode*
> * in progress **green**
> * paused **yellow**

> *break mode*
> * **red**

> *long break*
> * **purple**

After each round there is a voice effect, what informs the user, that time is up.

The main challange I ran into was to create the timer's different modes, with the different timer header text, and that timer stop when long break is gone.

### **Technologies**

The technologies what are implemented in this project are React, React-Router 6, Javascript ES6 Firebase/Firestore, Sass/SCSS, React-Slider, React-Circular-Progressbar.

The application is fully responsive in all sizes.
I recommend to use Iphone SE or Samsung Galaxy S8+ view.


### **How To Use The App**

First of all you need to create an account if you don't registered yet, then login.

After login you'll be on the `home page`. At there you will see your focusing question, what you can update anytime.

On the left side there is a `sidebar` from where you can switch between the pages.

On the top of the page there is a `navigation bar` with different buttons. If you aren't logged in yet you can see the `signup and the login button` and the logo. If you are logged in you can see just the logo and one `button with the text logout`.

Just under the `navbar` there is an `theme selector icon` which you click and change the application mode to dark or light.

If you click on `New Timer` on the `sidebar` you can create a new timer easily.

If you have at least one timer click on the `Dashboard` on the `sidebar` and you will see a list of your timer(s). You can click one of them and go to the `timer page` or delete them.

On the `timer page` you'll see the timer in original state. Click on the settings image and customize your timer. After that you can start the timer and pause if neccessary. If time is gone the timer will warn you with a voice effect, that you need to take a break.