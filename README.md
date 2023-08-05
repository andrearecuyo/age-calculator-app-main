# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.  

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

![](https://lh3.googleusercontent.com/fife/AKsag4OhqEdWW61x4IQie-1qk-ktwFki85t2_CREHSSYDXQ0KA53H1hv2ZkyDBqRMuY4a2UFdw9Vxh-viIVrCqvrBowaoZWhhv9RyIJYjl5KfrFMnxVQQYHD4VoKdSy9yoltKpBb98KWdWgg1Su0X9Duuu2YEn2ylwkQ7j2B01vEIHw9NZOYz_u-QBY-nB8AVNgsGdJWlL7MFlt-aE6ydgaycX-dS1gKjpxdT1aVM_0KK5h8G3bv9Ubv0PGRFNeHDFNsUAwRcQFnr-NcVU9EQqveIx5ryzUiU5LCIJljqfdLmp2n_mrFRrVYjSNrv8pQ4bDMcWE7pr761aJhqoo81LjN0tZBIAVcN50ttw1m7nJc5SKnDIeNBmvjvwlGUiN_4ygVU5VUneOU4uZ6YYy_od3dNBsRF_GhAd9ysGRME-6amGrcD3EMc_J3DhwCj8O-s3cu6lDOZepMYfUN_WGqAnioz72wGM8ArrVuVdzNekRc0dhw6MBn7kuNW7ZydrniGUe_VbI8Yd3jSj46IpAbQtby_rHb8bUnFaMP3kr0PllJXfaQyo_ilDSfhxnikG2kfRtAZxfP05fNCZ939GcbqfKCSNWw_IFyR3rttSZJdcZX6EOg6TYBUH1zAv28vIM-12FVlFmNem07KAP82BTE7xXVJcVoCszHrdW8CFSGkhQPZqTXUdIgxdPozkJGl3w-N2I7WVisZFqYMD34cIqUiTzoyU4snzEdEBdbSY8bg14CC6tsDxacDQdRcL7FE3dy8Pm1Wu0tk4NJXJHg0RLyIjtqSyzmm68EzP2YJ7lMUgLPXRLlcGoADHX6mK9U1b8chyZFLInNF2s29Mu25YDdoIyz0jFX6EdpWX9G7YrUO_Rdts5POgA0Hq8lWop1r5bOx5q6SkXbI2FFidhjia2FbIBkw5XfeAx-LhYXcgXd8HS-i2ndYbRgh0q_6uZ1MwUG9LKcF-ExKCU7A3HtkNzR7Zg_qINKpttscaQAtc5k0in5aCI0J7ML-21gDiuAnmFwEulEmjFXfBsMG1juJASp8Bpvh5E9YYKhwc02bv5UXjwC7qtFe8hxWDSWGzg3uxA4vCvO8Q8_lL3-27TDAJGm_cq5fyAia1oB_pLyNfLMXiDniLEglk4GTK0u_Vv6aUAOx-_LEXfJkl_-nlPS7Ka-c_QHXHpbWifa5_igOzQ3yKYvCMm3omg-EWv-Q81miFWgzHZK9n1Z5Dg_JUo2D7LpN6JAzgpIW6cd3Idq1Bez15RcrxH83vkFwhs5efBNhh8RqXVDrtjPRD-sPLh-PGY0y8duNC95TlvjYJM_slg3MkL0DWpWh8huRn1j9l6f4nnGwyrclp68_C5wDwJvEgxRIvy2wqIo367gS3bASEhSyQ-UaAY-GbhMHGUxnuWgxyWZKhoHpASrV57kl0wXNMvnDjbEbhSWdBhVOewssP-kTSgDhBVSYPlSLSRtot60jBdjSUDGITXU9EEPINeMg7TOchDxjAQrrWudzK7fKFkb2AoF7pZcJie7EOYIagch17IVP83CdUptKg=w1920-h929)

### Links

- Solution URL: [Source Code](https://github.com/andrearecuyo/age-calculator-app-main)
- Live Site URL: [Demo](https://andrearecuyo.github.io/age-calculator-app-main/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- [jQuery](https://jquery.com/)
- [LESS](https://lesscss.org/)

### What I learned

- Form Validation: I've gained an understanding of how to validate form inputs effectively. I now know how to ensure that the user provides valid data by setting rules and error messages.

- Age Calculation: I've discovered how to calculate a person's age based on their birthdate and the current date using the Date object. This skill is particularly useful for creating age-related features on my website.

- Event Handling: I now have the skills to handle different events triggered by users, such as form submissions and button clicks. This means I can make my website react dynamically to user actions.

- DOM Control: I've learned how to manipulate the elements on my web page using jQuery. This is super useful for updating content and styles without having to reload the entire page.

- Dealing with Errors: I've learned how to handle errors gracefully. When users provide incorrect input, I can display error messages and highlight the problematic areas in a visually appealing manner.

- Display Logic: I've mastered the art of conditionally showing content. I now know how to display the calculated age only when the user's input is valid, avoiding any confusion caused by showing incorrect information.

Calculation of age in years, months, and days

 ```javascript
const today = new Date();
const startDate = new Date(ageYears, ageMonths - 1, ageDays);
const ageInMilliseconds = today - startDate;
const ageDate = new Date(ageInMilliseconds);
let years = ageDate.getUTCFullYear() - 1970;
let months = ageDate.getUTCMonth();
let days = ageDate.getUTCDate() - 1;

```
### Useful resources

- [jQuery](https://jquery.com/)
- [JavaScript](https://www.w3schools.com/js/)

## Author

- Website - [Andrea Recuyo](https://andrearecuyo.github.io/andrearecuyoportfolio/)
- Frontend Mentor - [@andrearecuyo](https://www.frontendmentor.io/profile/andrearecuyo)

## Acknowledgments

Thank you to Frontend Mentor for providing frontend challenges.