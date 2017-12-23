# Housing Preference Form

## About
This is an online form built using MERN stack (MongoDB, Express, React, NodeJS) to help my group of friends find housing that meets everyone's preferences.

## How it works
The form consists of a name input and a list of the pre-determined criteria for housing. Using [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd), users can rearrange each option based on personal importance before submitting. React ensures that with each keystroke and change, the current state of the form component is updated. When the user clicks 'submit,' the information is passed to the backend. The code is currently hosted on Heroku to process the API posts to the backend, which stores a score for each category.
