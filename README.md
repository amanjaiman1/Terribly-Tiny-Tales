# Terribly-tiny-tales Task
> The given task involves building a frontend using Reactjs or Nextjs, which fetches the contents of a text file, calculates the frequency of each word, generates a histogram chart of the 20 most occurring words, and allows the user to export the histogram data as a CSV file.

## The frontend consists of two components: SubmitButtonComponent and Histogram.

### SubmitButtonComponent:
> The component renders a "Submit" button. On clicking the button, the loadHandle function is triggered, which toggles the isLoading state and navigates to the "/submit" route using the navigate function. The component uses the useState and useNavigate hooks from react-router-dom.

### Histogram:
> The component fetches the contents of the text file using the useEffect hook, processes the text data to calculate the frequency of each word, and generates a histogram chart using the Bar component from react-chartjs-2. The component uses the useState, useEffect, and useNavigate hooks.

> The histogram data is stored in the histogramData state variable, and the top 20 words are stored in the words state variable. The component also includes a "Back" button to navigate back to the home page and an "Export" button to download the histogram data as a CSV file.

### The following libraries and plugins are used in the project:

React: A JavaScript library for building user interfaces.
react-router-dom: A library that provides routing capabilities for React applications.
react-chartjs-2: A library for creating charts in React using Chart.js.
chart.js/auto: A plugin that automatically installs the required Chart.js components based on the chart type used.
framer-motion: A animation library for creating fluid animations and gestures in React applications.

## Deployment - 
> https://histotale.netlify.app
