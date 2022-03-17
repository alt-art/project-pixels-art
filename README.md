# Project pixels art

In this project, I implemented a pixel art editor.

## Project requirements:

### 1 - Add the title "Color palette" to the page

- The title must be within an "h1" tag with the "id" named "title"

- The title text should be "Color palette"

### 2 - Add to the page a palette containing four distinct colors

- The color palette must be an element with "id" called "color-palette", whereas each color contained in the color palette must have the "class" "color"

- The background color of each element of the palette should be the color that the element represents. **The only color not allowed in the palette is the white color.**

- Each element of the color palette should have a black, solid border and be 1 pixel wide

- The color palette should list all colors available for side-by-side use, and should be positioned below the title "Color palette"

- The color palette should not contain repeated colors

### 3 - Add the color **black** as the first color of the color palette

### 4 - Add a 25-pixel frame to the page

- The frame of "pixels" must be five elements wide and five elements long

- The frame of "pixels" must have the "id" called "pixel-board", whereas each individual "pixel" within the frame must have the "class" named "pixel"

- The initial color of the "pixels" within the frame, when opening the page, must be white

- The frame of "pixels" should appear below the color palette

### 5 - Have each element of the pixel frame 40 pixels wide, 40 pixels high, and delimited by a black border of 1 pixel

### 6 - Set the black color to the initial color. When loading the page, the black color should already be selected to paint the pixels

- The black element must initially have the "class" "selected"

- Note that the element that should receive the "selected" class must be one of the elements that have the "color" class, as specified in **requirement 2**

### 7 - Clicking on one of the colors in the palette causes it to be selected and used to fill the pixels in the frame

- The "selected" class must be added to the selected color in the palette while being removed from the previously selected color

- Only one of the colors in the palette should have the "class" "selected" at a time

- Note that the elements that should receive the "selected" class must be the same elements that have the "color" class, as specified in **requirement 2**

### 8 - Clicking a pixel within the frame after selecting a color in the palette causes the pixel to be filled with the selected color

### 9 - Create a button that, when clicked, clears the frame by filling the color of all its pixels with white

### 10 - Make the pixel frame have its size set by the user

- Create an input and button that allows you to define a pixel frame with a size between 5 and 50. When clicking the button, a frame of **N** pixels wide and **N** pixels in height, where **N** is the number entered in the input

- That is, if the value passed to the input is 7, by clicking the button, a frame of 49 pixels (7 pixels wide x 7 pixels high) will be generated

- The input must have the "id" named "board-size" and the button must have the "id" named "generate-board"

- The input should only accept numbers greater than zero. This restriction **must** be done using the attributes of the input element

- The button must contain the text "Create Board"

- The input must be positioned between the color palette and the pixel frame

- The button must be positioned next to the input

- If no value is placed in the input by clicking the button, show an "alert" with the text: "Board invalid!"

- The new frame should have all pixels filled with white color

### 11 - Limit the minimum and maximum board size

- If the value entered in the input "board-size" escapes from the range of 5 to 50, make:

- Value less than 5, consider 5 as standard

- Value greater than 50, consider 50 as standard

### 12 - Have the colors in the palette randomly generated when loading the page

- The black color still needs to be present and should be the first in your color palette
