# WHAT IS THIS 
* this program powers up eleventy to elaborate docx document. It works like eleventy, I just added some pipeline to make it work with docx documents. Exciting!
* It can be used as a basic authoring tool if you need to elaborate and change multiple documents on the go

# INSTALLATION
1. run setup for your OS
if you use linux you are not disabled and can figure it out
basically is just that you have to install libreoffice in some way because it's the only way to decently preserve docx formatting (curse of Ra on Microsoft).

 # HOW DOES IT WORK
* Put the docx modules you want to use in the input folder, possibly in a messy way
* in src, create an md file with the module disposition you want. It's the same syntax as eleventy so check their documentation.
* with the terminal in the project folder, run
``` npm run pdf ```
* the generated files will be in the dist folder.
* The folder placements and names may change and I may forget to update this readme 
