# real-estate

## Project setup
```
npm install
```

### Compiles for development
```
npm run serve
```

## Major Components
- RealEstate
    * Main component of this project
    * Call api to get data
    * Implement media query for responsive
    * Update number of cards after resizing
    * Updata the array to be rendered after resizing or arrow clicked
- Main
    * Containing Header, CardBox, and Footer
- CardBox
    * Loop through array to render Cards

## Minor Components
- Header, Footer
- Card, Info
    * Display the information passed in from the component CardBox
- Arrow
    * Determine showing LeftSVG or RightSVG
    * Pass in a prop for the blocking of LeftSVG and RightSVG
- LeftSVG, RightSVG
    * To handle the style of svg while hovering and clicking