# Flex Registration Helper

## Description

This Chrome extension automatically monitors the FlexStudent portal for course registration. It reloads the page periodically and alerts the user when registration opens.

## Features

* Periodically reloads the registration page.
* Waits 3 seconds after each reload and checks if registration is open.
* Sends a post request to a webhook setup by Make or any other automation platform which will then forward a notification to your mobile device

## Installation

1. Open Chrome and go to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the extension folder.

## Usage

1. Go to make.com or any other automation platform, create a webhook and copy its link. Link the webhook node to a notification service (I used pushbullet for this purpose).
2. Paste the webhook link in config.js
3. Start your automation 
4. Open the FlexStudent portal: `https://flexstudent.nu.edu.pk/`.
5. Go to registration page
6. Click the extension icon and press **Start Monitoring**.
7. The extension will automatically reload the page and check for registration.
8. Once registration opens, a post reqeuest to your webhook will be sent.
9. To stop monitoring, click the extension icon and press **Stop Monitoring**.

## Notes

* This extension only works as long as the session token is valid (There is an upper limit for the time this will save you and then you will have to manually log in again and start the extension. Usually the token lasts for hours) *
* You can skip the make.com part and use pushbullet api directly in your code to send a notification to your device. However makes things easier and allows you to take multiple actions (send mail, whatsapp message, etc.) *
* This extension relies on a keyword or string present in registration page that allows it to detect if registration has opened. If website is updated and UI changes, you can modify the keyword/string in content.js *
* The extension only runs on `https://flexstudent.nu.edu.pk/*`. 

