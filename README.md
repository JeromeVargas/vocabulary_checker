![banner](assets/images/banner.png)

<br/>
<br/>

![GitHub top language](https://img.shields.io/github/languages/top/JeromeVargas/vocabulary_checker)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/JeromeVargas/vocabulary_checker)
![GitHub last commit](https://img.shields.io/github/last-commit/JeromeVargas/vocabulary_checker)

> ## What it does

This is an app that allows the user to do pronunciation shadowing on vocabulary organized by topic. The user can listen to the work or words and have context by looking at the associated image and repeat the pronunciation of the word. The word pronunciation is produced by the Chromium speech utterance API.

> ## Life demo:

### [English vocabulary reviewer](https://vocabulary-checker.onrender.com/)

### [French vocabulary reviewer](https://french-vocabulary-checker.netlify.app/)

### [Japanese vocabulary reviewer](https://japanese-vocabulary-checker.netlify.app/)

> ## User journey:

### **Home page**:

The user can choose the topic in the home page to move the interface area

![home_page](assets/images/sections/home_page.png)

### **Interface**:

#### Text section:

This is the word or words to study, you can click on question mark to show the text:

![interface_text_area_1](assets/images/sections/interface_text_section_1.png)
![interface_text_area_2](assets/images/sections/interface_text_section_2.png)

#### Image section:

It shows what the graphic representation of the word or words is:

![interface_image_area](assets/images/sections/interface_image_section.png)

#### Button section:

It contains the calls to action:

#### Actions area

The speaker button is a speech handler, it triggers the speech and allows the user to change the state from **_Listen_** to **_Next_**:

![interface_button_section_1](assets/images/sections/interface_button_section_1.png)
![interface_button_section_2](assets/images/sections/interface_button_section_2.png)

#### Reset / Exit area

Once the user go through all the words for the topic the user can choose between either reset the same topic by clicking on **_Try Again_** or to try other topic by clicking on **_New Exercise_**:

![interface_button_section_3](assets/images/sections/interface_button_section_3.png)

### **Dark mode**:

The user can access dark mode by clicking on the right hand side top corner theme icon:

![dark_mode](assets/images/sections/dark_mode.png)

<br/>

> ## Configurations

### **Initial set up**

To get the project started setting up the language please follow this steps

> 1. create a JSON file - meta data object, this is going to be the data source:

- main object keys = topics from origin language, these must be in kebab-case, e.g. **base-instructions**, **basic-greetings** ...

- nested objects keys:

  - translation: topic in target language
  - meta-data: topic meta-data
  - wordsToHighlight: words with special highlighting styles, it is a array index, taking each word as an array element

![meta-data-json](assets/images/source_files/meta-data-json.png)

> 2. create an images folder:

The sub-folders must also be in kebab-case, e.g. **base-instructions**, **basic-greetings** since they are referenced in the meta-data json object keys, the images files are referenced in the meta-data objects file name field,

![meta-data-json](assets/images/source_files/images_folder.png)

> 3. set the configuration constants file in the config folder:

- First section sets the language
- Second section sets strings for headings and calls to action buttons and links
- Third section sets values for testing, these must be added manually based on the meta-data JSON

![constants_config_file](assets/images/source_files/constants_config_file.png)

### **npm scripts**

- **Vite**:

![vite_scripts](assets/images/scripts/vite_scripts.png)

- **Playwright**:

![playwright_scripts](assets/images/scripts/playwright_scripts.png)

- **Storybook**

![storybook_scripts](assets/images/scripts/storybook_scripts.png)

<br/>

> ## Instructions

### **File management**, please organize imports this way:

- library / lib
- components
- hooks
- services / utils
- types

### **Build**

- after each test run **_npm clean_** to remove build files

![clean_scripts](assets/images/scripts/clean_scripts.png)

<br/>

> ## Known issues

![Firefox](assets/images/icons//firefox.png)

- **_speech does not work on Firefox_** because it is based on the Chromium speech utterance api

### **Playwright**

- sometimes there is an inconsistently failing test in webkit, then webkit was removed from the testing

![sometimes_not_passing_test](assets/images/testing/sometimes_not_passing_test.png)

- run on vite preview to get the build code tested

![storybook_scripts](assets/images/scripts/preview_scripts.png)

### **Storybook**

types had to be adapted in the dark mode add-on migration

#### preview.ts

![storybook_adapted_types](assets/images/storybook/storybook_adapted_types_1.png)

#### index.d.ts

![storybook_adapted_types](assets/images/storybook/storybook_adapted_types_2.png)
