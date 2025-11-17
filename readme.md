<a id="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Toggle Youtube</h3>

  <p align="center">
    Quickly toggle between youtube video and short or music.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#uninstallation">Uninstallation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

While listening to some music videos on youtube I often found myself manually editting url to open them in youtubeMusic. The same goes for shorts, when watching I had to manually edit the url to open it as a video with more comfortable UI.

That's why I've created a small extension to do this by using keyboard shortcuts instead. It also allows to go back via the same shortcut. Now, I don't have to edit the url manually every time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Here is a simple guide on how to get the extension running.

### Prerequisites

You need to have Chrome browser, Brave browser or something alike with Chromium Engine. Unfortunately, the extension does not work on Mozilla, Edge, etc. I'd tested the extension exclusively on pc browsers, but maybe it could be installed on other devices as well if the browser allows installing unpacked extensions.

### Installation

_Follow the steps below to install the extension:_

<ol>
  <li>
    Download the project files on your device:
    <ul>
      <li>Click "Code" button.</li>
      <li>Click "Download ZIP" button.</li>
    </ul>
  </li>
  <li>Unzip downloaded file into any folder on your device, remember the location.</li>
  <li>
  Open your browser's extensions or go to the following url in your browser:

   ```
   chrome://extensions/
   ```
   </li>
   <li>Turn on the "Developer mode" toggle button. Button "Load unpacked" should now be visible.</li>
   <li>Click on the "Load unpacked" button.</li>
   <li>In the opened dialog window choose the location of the folder from step 2 </label> which contains all of the extension files.</li>
   <li>Press the "Select folder" button.</li>
</ol>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Uninstallation

_Follow the steps below to remove the extension:_

<ol>
  <li>Open your browser's extensions or go to the following url in your browser:
   
   ```
   chrome://extensions/
   ```
   </li>
  <li>Click "Remove" button on the extension's card.</li>
  <li>Click "Remove" button on opened dialog window.</li>
</ol>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

The extension requires you to turn the "Developer mode" on in the browser's <a href="chrome://extensions">extensions tab</a>.

By default the extension uses the following shortcuts: `Ctrl + Q` or `Command + Q` to toggle music and `Ctrl + Shift + Q` or `Command + Shift + Q` to toggle shorts. You can modify the shortcuts by going to the url: <a href="chrome://extensions/shortcuts">chrome://extensions/shortcuts<a>.

Also, if you don't want the extension to work in Incognito mode, you should go to the extensions, click on the extension's "Details" button and turn off "Allow in Incognito". You can also turn off "Allow access to file URLs" and "Collect errors".

Sometimes, the extension does not respond immediately after opening a short or a music video. If that's the case then please be patient and try again after a small delay.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>