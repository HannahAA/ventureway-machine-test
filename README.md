# Set up

Download the source code from https://github.com/HannahAA/ventureway-machine-test.

To run the code locally:

1. Run 'npm install'
2. Then run 'npm run dev'.

The deployed site is currently not working. It is at https://github.com/HannahAA/ventureway-machine-test

## About the app

This is a React JS project created with Vite and Tailwind CSS.
It was done as machine test for an interview at Ventureways by Hannah Anne Abraham (https://github.com/HannahAA, https://linkedin.com/in/hannah-abraham-2a053213a).
The design was provided as well as a json file for a Lottie animation.

Most of the requirements have been met - except for a couple of UI issues as detailed at the bottom of this file.

From the bonus section, the following were done.

a. Add a simple animation for the “typing…” indicator.
b. Persist chat history in localStorage. => COMPLETED
c. Add smooth scroll-to-latest-message behavior.
d. Star chats to save them. => COMPLETED

Link to GitHub: https://github.com/HannahAA/ventureway-machine-test
Link to Design: https://www.figma.com/design/8I1Xd83pXuCsYTKv1GTvTP/Landing-page---Mock-Chat?node-id=4269-163&t=Z1vp053ExQdigKlc-0

It site has consists of a single landing page.

The landing page has 4 main sections.
1. Hero section.
2. How It Works section.
3. Chatbox.
4. Footer.

## Hero section

This section has a title, some subtitles, and 2 buttons.
Each button is actually an anchor tag that navigates the user to the corresponding parts of the page.

## How It Works section

This section has a more complex UI. It has some texts and a Lottie animation.
Due to responsive issues, I've kept the Lottie animation and some UI curvature present only for screens >= 1440px.
Smaller screens will only have the text.
There is no clickable area in this section.

## Chatbox

The Chatbox is the most user-interactive section on our page.
All chats are saved to Local storage. The chats can also be starred and starred messages are separately stored to LS as well. Hence the messages persist in chat even if page is refreshed.

All user generated texts appear on the right side of the chatbox, and AI generated texts appear on the left.
Each message has an avatar circle (empty), the text itself, and a star.
Messages can be submitted by hitting enter on clicking on the submit button.

Whenever the user submits a message, a 'typing...' message appears for the AI for 3 seconds - after which the 'typing...' message is cleared and a proper message is sent.

These 'typing...' messages are never svaed to LS.
The chats sent by the AI are from a set of hardcoded messages. Each time, a randomizer is used to select one of the messages to send.

## Footer

This is a simple UI section. To populate the full width of the site, it is not wrapped by the Container.

## Known issues

I have used Tailwind v14 using tailwind/vite SDK here. While this works, the provision for custom tailwind css (traditionally through tailwind.config.js file) is not working. Installing Tailwind v4 otherwise on the other hand caused tailwind to not work at all.
As a result, commonly used css are not extracted to a single source, but are instead used as required.
Also there was a need for some custom css, namely
1. To use the Heebo font, and
2. To get a breakpoint for 1440px.

To achieve these, the css has been written in index.css file.

Due to responsive issues, I've kept the Lottie animation and some UI curvature present only for screens >= 1440px.
Smaller screens will only have the text.

While placing the 'Call 1' and 'Call 2' texts, there was some overlap happening with the main section. I was not able to resolev this issue within the time given, so chose to remove it to keep the UI clean.
