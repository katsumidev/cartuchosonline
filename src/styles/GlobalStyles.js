import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Inter';
        background: var(--background);
        font-size: 14px;
        color: #383838;
        -webkit-font-smoothing: antialiased !important;
        overflow-x: hidden;
    }

    ul {
        list-style: none;
    }

    :root {
        --background: #F8F8F8;
        --text-color: #383838;
        --accent-color: #6D83F2;
        --accent-gradient: linear-gradient(134deg, #6A98F0 0%, #4961DC 99%);
    }
`;
