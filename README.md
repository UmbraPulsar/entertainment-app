# Entertainment React Application

## Tech Stack

### React

### Tailwinds css

### JSON

## Notes

### Regex
I ran into a problem where the JSON data all had paths to images for each listing card. The problem was the way that React handles image src.
I could have just manually imported each image but that was too much work. So I utilized RegEx to dynamically set the image url which was great!

### Icons
Another issue I had was Icons. Instead of having 10 or so special icon components I instead grouped Icons in one Icons file.
NavIcons had their image changed based on Type and Active props. So instead of having 4 individual icons, there is 1. 

### Grid
The biggest problem I had, was the listings component. The Listing component is grid based. However the design required the header and navigation to be represented as a sidebar on large screens. So I wrapped both components in a div and applied a flex property to them. This caused the entire thing to break.

I learned that it's called "Grid-Blowout" while googling but after trying everything I could. I had to drop the flex idea and instead make the wrapper a Grid of 2 cols. This worked. Though the elusive answer as to why it did what it did still bothers me lol.

