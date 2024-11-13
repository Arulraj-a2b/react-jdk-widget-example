Chatbot Widget Integration Guide
This guide explains how to integrate the Chatbot Widget into any HTML-based project by including a script tag. The widget can be hosted via a CDN and loaded directly into any web page.

Overview
The Chatbot Widget is a React-based component that can be easily embedded in any web page by including the provided my-widget.js script. Once included, the widget will automatically render a chatbot interface inside a specified container on the page.

Features
Easy integration using a <script> tag.
Customizable widget options like title and theme color.
Hosted via CDN for seamless use across different projects.
Prerequisites
A web page where you can add a <script> tag and specify a container to display the chatbot.
Internet access to load React, ReactDOM, and the widget script from the CDN.
Steps to Integrate the Chatbot Widget

1. Add React and ReactDOM to Your HTML
   Before including the widget script, you need to load React and ReactDOM from a CDN. Add the following lines to your HTML file inside the <head> section:

html
Copy code

<!-- Load React 18 -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- Load ReactDOM 18 -->
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

2. Add the Widget Container
   In the body of your HTML, add an empty div where you want the chatbot widget to appear. You can customize the id to match your project’s needs.

html
Copy code

<!-- Container for the chatbot widget -->
<div id="chatbot-container"></div>
3. Include the Widget Script
After adding the container, include the widget script hosted on your CDN. This script will automatically render the chatbot into the container when the page loads.

html
Copy code

<!-- Load the Chatbot Widget Script -->
<script src="https://transcendent-blini-4621da.netlify.app/my-widget.js"></script>

Make sure this script tag is included after the React and ReactDOM scripts.

Full Example HTML:
Here is an example HTML file that integrates the Chatbot Widget:

html
Copy code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Web page with embedded chatbot" />
    <title>Chatbot Widget Integration</title>

    <!-- Load React 18 -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <!-- Load ReactDOM 18 -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  </head>

  <body>
    <h1>Welcome to Our Website!</h1>

    <!-- Container for the chatbot -->
    <div id="chatbot-container"></div>

    <!-- Load the chatbot widget script -->
    <script src="https://transcendent-blini-4621da.netlify.app/my-widget.js"></script>

  </body>
</html>
4. Customize the Widget (Optional)
You can customize the widget by passing options when initializing it. Currently, the widget supports two customization options:

title: Set the title of the chatbot.
themeColor: Set the theme color of the chatbot widget.
For example, if you want to customize the chatbot's title and theme color, modify the my-widget.js script like this:

js
Copy code
// Modify the script to customize the widget
window.addEventListener('load', () => {
const container = document.getElementById('chatbot-container');
if (container && ReactDOM.createRoot) {
const root = ReactDOM.createRoot(container);
root.render(
<ChatbotWidget title="Support Bot" themeColor="#ff5722" />
);
} else {
console.error("ReactDOM is not available or the container doesn't exist.");
}
}); 5. Troubleshooting
Error: ReactDOM is not defined

Ensure that the React and ReactDOM script tags are loaded before the widget script.
Error: MyWidget is not defined

Check that the widget script URL is correct and accessible.
Widget doesn't render

Verify that the container element (#chatbot-container) exists on the page.
Check if there are any JavaScript errors in the browser console.
