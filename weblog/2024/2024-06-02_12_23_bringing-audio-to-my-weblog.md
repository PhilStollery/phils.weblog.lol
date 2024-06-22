---
Date: 2024-06-02 12:23
Tags: 2024, weblog, audio, google drive
Snippet: I've been adding PDF downloads to my writing samples — using Google Drive. I also have been thinking I'd like to add the micro.blog feature of audio posts. A quick search found...
---

# Bringing audio to my weblog

<audio controls>
    <source src="https://github.com/PhilStollery/phils.weblog.lol/raw/master/audio/Bringing%20audio%20to%20my%20weblog.m4a" type="audio/mp3">
    <p>Your browser doesn't support the audio tag. Download the M4A file here:  <a href="https://github.com/PhilStollery/phils.weblog.lol/raw/master/audio/Bringing%20audio%20to%20my%20weblog.m4a">https://github.com/PhilStollery/phils.weblog.lol/raw/master/audio/Bringing%20audio%20to%20my%20weblog.m4a</a></p>
</audio>

I've been adding PDF downloads to my writing samples — using Google Drive. I also have been thinking I'd like to add the [micro.blog](https://micro.blog/) feature of audio posts. A quick search found [Embedding Audio Files from Google Drive into HTML](https://www.simonsays.so/embedding-audio-files-from-google-drive/). But this didn't work. I think it's a combination of CORS and other authentication blocking from Google. There is however a fix. 

### Create a Google Project with access to the Google Drive API

The idea is to create a Google project, grant it access to the Google Drive API, add an API key, then call the GET file API for the MP3. Follow these steps:

1. Navigate to the [Google Cloud console](https://console.cloud.google.com/).
2. Select the **CREATE PROJECT** button in the top right. 
3. Enter a meaningful name to you, I used "weblog google drive access".
4. Select **CREATE**.
5. After the project is created, on the **Enable APIs & Service** tab, select **+ ENABLE APIS AND SERVICES**.
6. Search for Google Drive API, and select it from the results. 

You've now enabled your project to call the Google Drive API. The next step is to grant access to it via an API key.

### Create an API key to access the app

Now add an API key credential to the project.

1. On the left select **Credentials**, select **+ CREATE CREDENTIALS**, then select **API key** from the menu.
2. In the API key created popup, select the copy icon to copy the value of the API key.

### Use the Google Drive API to get the MP3 file

The way to use any media you have stored in Google Drive is to use this link for the source:

```html
https://www.googleapis.com/drive/v3/files/< YOUR FILE ID >?alt=media&key=< YOUR API KEY >
```

For example, the final code I drop into posts for my media player is:

```html
<audio controls>
    <source src="https://www.googleapis.com/drive/v3/files/1KggRUpNYPi1FXpxNs0qvRDzOGTw8F8SX?alt=media&key=AIzaSyCwfa8n8lETUWoU1AgB9KdVRD1su_e9Gg0" type="audio/mp3">
    <p>Your browser doesn't support the audio tag. Download the MP3 file here:  <a href="https://drive.google.com/file/d/1KggRUpNYPi1FXpxNs0qvRDzOGTw8F8SX/view?usp=sharing">https://drive.google.com/file/d/1KggRUpNYPi1FXpxNs0qvRDzOGTw8F8SX/view?usp=sharing</a></p>
</audio>
```

So now you can listen to my ramblings when I think it'll be useful. There appears to be a limit to the number of times you can call the API in a minute, I had lots of screenshots, and they were triggering a usage limit so nothing worked. I guess, use with caution!

P.S. Doesn't appear to be working on mobile — don't know why yet.
