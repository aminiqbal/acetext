# AceText
A text-editor powered by *Ace Editor* built on *Electron*.

![AceText](https://github.com/aminiqbal/acetext/blob/main/ACETEXT/ace/acetextscreen.png)

# Thanks
* Chromium (https://github.com/chromium/chromium)
* Electron (https://github.com/electron/electron)
* Ace Editor (https://github.com/ajaxorg/ace)

# Why?
* Multiple cursor editing!
* Ace editor features like syntax highlighting, auto complete, etc.
* Easily extendible & customizable.

# Usage
* Download the most recent version of ```acetext.zip``` from the [Releases](https://github.com/aminiqbal/acetext/releases) page. I built that one specifically for Windows x64. Other OS, simply build from code.
* Extract contents of zip file and place then in desired location.
* Run the executable.
* Controls:
	* ```CTRL + O```: Open file.
	* ```CTRL + S```: Save file.
	* ```CTRL + 9```: Save file as a new file.
	* ```CTRL + 1```: Change to dark theme (Dracula).
	* ```CTRL + 2```: Change back to light theme (Github).
	* ```CTRL + F```: Find (You can press the ```+``` button to enable _find & replace_).
	* ```CTRL + SCROLL-UP```: Zoom-in.
	* ```CTRL + SCROLL-DOWN```: Zoom-out.
	* ```CTRL + 0```: Reset zoom.
	* ```CTRL + Z```: Undo.
	* ```CTRL + Y```: Redo.
	* ```CTRL + HOME```: Go to beginning of document.
	* ```CTRL + END```: Go to end of document.
	* ```CTRL + TAB```: Indent/ indent selection.
	* ```SHIFT + TAB```: Un-indent/ un-indent selection.
	* ```ALT + F4```: Close program.
	* Hold down ```CTRL``` and click places to place more cursors there - sort of like block-selection on steroids. Hold down ```ALT``` for classic block-selection.
	* Controls implemented by Ace Editor I don't know of.
* Sometimes I want to scroll faster than normal. But I don't want to scroll that fast all the time. Solution? Hold down ```ALT``` to scroll fast. Let ```ALT``` go and we're back to the normal scroll rate.

# Code
* ```ace``` directory should contain all files pertaining to ace. In my case, I simply copy pasted all files from ```src-noconflict``` from the Ace Editor build distribution.
* ```package.json``` defines the program as an Electron program and defines its features.
* ```acetext.js``` is the program entry point for Electron.
* ```acetext.htm``` is the actual editor instance/ UI. I put all scripts here as well instead of using another JavaScript file.
* ```icon.ico``` is the program icon.
* ```yarn start``` or ```npm start``` to run app through Electron.
* ```yarn dist``` for actually building the executable. __Electron Builder__ must be installed (```yarn add electron-builder --dev```).
