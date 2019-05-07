# Aircraft Scheduling App by Niyazi Niyazi

[Demo](http://www.quality-sites.com/sites/aircraft/)

The app shows a list of all our aircrafts to choose from.
The app shows a list of all the flights the airline plan to operate that day, their origin, destination, departure time and arrival time.
The purpose of the app is to allow the user to view and edit the daily rotation for each aircraft:
The rotation is the list of flights, in order, an individual aircraft will operate during that day.
Flights must be chosen by the user from our list of flights (right sidebar on the wireframe).

The app lets the user edit the rotation freely but enforces the following rules:

All aircrafts must be on the ground at midnight.
The turnaround time (minimum time between the end of a flight and the beginning of the next one) is always 40min for our airline.
Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much!
We operate one type of aircraft.
As per aviation practice, all times are UTC (GMT), the app makes no use of local time. Airports are displayed using their four letter code.
Utilisation: The app must display for each aircraft its utilisation in percent, i.e. the time the aircraft is on scheduled service per 24 hours (as opposed to sitting idle on the apron costing us money).
Aircraft timeline: for the selected aircraft, a vertical bar shows a period of 24 hours, scheduled service in green, turnaround time in purple, idle time in grey.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Future Improvements
 Will be adding unit testing to all components and added more integration tests also. Proper timeline and flights calculations will be integrated into app. Responsive views will also be improved.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
