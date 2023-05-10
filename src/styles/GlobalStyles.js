import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Dark Mode */
        --DarkBlue: hsl(209, 23%, 22%);
        --VeryDarkBlue: hsl(207, 26%, 17%);
        /* LightMode */
        --VeryDarkBlueLM: hsl(200, 15%, 8%);
        --DarkGray: hsl(0, 0%, 52%);
        --VeryDarkGray: hsl(0, 0%, 98%);
        --White: hsl(0, 0%, 100%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Nunito Sans', sans-serif;
    }

`