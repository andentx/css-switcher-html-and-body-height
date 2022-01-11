# HTML Boilerplate - Full Featured

-   HTML template with placeholder data, icons, and file structure
-   Ideal for quickly starting a web-based project

<br>

## Purpose

-   To use as a template to quickly get started on a new website
-   To skip the setup steps of a new project
-   To have a published document to refer to and update over time
-   To include anything that might be used in a website
-   To allow for easy addition or removal of features

<br>

## Includes

-   Simple project directory structure
-   HTML file
-   Full set of meta tags with placeholder data
-   Placeholder page description
-   Placeholder Open Graph data
-   Placeholder Open Graph image
-   Placeholder icons / favicons
-   Placeholder theme color
-   Placeholder for loading Google font
-   CSS reset stylesheet
-   CSS font stylesheet
-   CSS print stylesheet
-   Empty CSS and JavaScript files
-   .gitignore file

<br>

## Details

-   Minimal project directory structure

          .
          ├── index.html
          ├── css
          │   ├── font.css
          │   ├── print.css
          │   ├── reset.css
          │   └── style.css
          ├── icons
          │   ├── android-chrome-192x192.png
          │   ├── android-chrome-512x512.png
          │   ├── apple-touch-icon.png
          │   ├── browserconfig.xml
          │   ├── favicon-16x16.png
          │   ├── favicon-32x32.png
          │   ├── favicon.ico
          │   ├── mstile-150x150.png
          │   ├── safari-pinned-tab.svg
          │   └── site.webmanifest
          ├── images
          │   └── og-image.png
          └── js
              └── scripts.js

<br>

-   Complete HTML Page

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <!-- Set character encoding -->
            <meta charset="UTF-8" />

            <!-- Set viewport defaults -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <!-- Set page info -->
            <title>Title of Page</title>
            <meta name="description" content="Description of page" />
            <meta name="author" content="Author Name" />

            <!-- Set page info for Open Graph -->
            <meta property="og:title" content="Title of page" />
            <meta property="og:description" content="Description of page" />
            <meta property="og:image" content="https://example.com/images/og-image.png" />
            <meta property="og:image:alt" content="Description of Open Graph image" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.example.com/page" />

            <!-- Set page info for Twitter Cards -->
            <meta name="twitter:card" content="summary" />

            <!-- Set theme colors -->
            <meta name="theme-color" content="#008877" />
            <meta name="theme-color" content="#007766" media="(prefers-color-scheme: dark)" />
            <meta name="theme-color" content="#008877" media="(prefers-color-scheme: light)" />

            <!-- Set favicons - consider moving to root -->
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />

            <!-- Set icon for Apple Touch -->
            <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />

            <!-- Set icon for Microsoft Application -->
            <meta name="msapplication-TileColor" content="#008877" />
            <meta name="msapplication-config" content="icons/browserconfig.xml" />

            <!-- Set icon for Safari Pinned Tab -->
            <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#008877" />

            <!-- Set icon for web app -->
            <link rel="manifest" href="icons/site.webmanifest" />

            <!-- Add canonical url to combine multiple related urls -->
            <link rel="canonical" href="https://www.mywebsite.com/page" />

            <!-- Link to CSS stylesheets -->
            <link rel="stylesheet" href="css/reset-minimal.css" />
            <link rel="stylesheet" href="css/font.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/print.css" media="print" />

            <!-- Add google font -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" />
        </head>
        <body>
            <h1>HTML Boilerplate - Full Featured</h1>

            <script src="js/scripts.js"></script>
        </body>
    </html>
    ```

      <br>

-   Meta data

    -   Set character encoding - required for consistent special characters

        ```html
        <meta charset="UTF-8" />
        ```

    <br>

    -   Set viewport defaults - sets the viewport to the width of the screen, and sets the default zoom

        ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ```

    <br>

    -   Set page info - sets info about page displayed in various places

        -   sets title displayed in browser tab, bookmark, search results... etc.

            ```html
            <title>Title of Page</title>
            ```

        <br>

        -   sets page description displayed in search results... etc.

            ```html
            <meta name="description" content="Description of page" />
            ```

        <br>

        -   sets author displayed in search results... etc.

            ```html
            <meta name="author" content="Author Name" />
            ```

    <br>

    -   Set page info for Open Graph - a protocol that provides data for preview objects. These preview objects are what's displayed on social media posts, comments and similar previews

        -   sets title for Open Graph objects - required

            ```html
            <meta property="og:title" content="Title of page" />
            ```

        <br>

        -   sets description for Open Graph objects

            ```html
            <meta property="og:description" content="Description of page" />
            ```

        <br>

        -   sets image for Open Graph objects - required

            ```html
            <meta property="og:image" content="https://example.com/images/og-image.png" />
            ```

        <br>

        -   sets image alt text for Open Graph objects

            ```html
            <meta property="og:image:alt" content="Description of Open Graph image" />
            ```

        <br>

        -   sets native location for Open Graph objects

            ```html
            <meta property="og:locale" content="en_US" />
            ```

        <br>

        -   sets type for Open Graph objects - required

            ```html
            <meta property="og:type" content="website" />
            ```

        <br>

        -   sets url for Open Graph objects - required

            ```html
            <meta property="og:url" content="https://www.example.com/page" />
            ```

    <br>

    -   Set page info for Twitter Cards

        -   sets layout for Twitter card - choose `summary` or `summary_large_image`

            ```html
            <meta name="twitter:card" content="summary" />
            ```

    <br>

    -   Set theme colors - color displayed in device user interface

        -   sets theme color

            ```html
            <meta name="theme-color" content="#008877" />
            ```

        <br>

        -   sets theme color for dark mode

            ```html
            <meta name="theme-color" content="#007766" media="(prefers-color-scheme: dark)" />
            ```

        <br>

        -   sets theme color for light mode

            ```html
            <meta name="theme-color" content="#008877" media="(prefers-color-scheme: light)" />
            ```

    <br>

    -   Set favicons - icons displayed in browser tab, bookmarks... etc. Consider moving to root to follow best practices

        -   sets shortcut to favicon if not hosted in root

            ```html
            <link rel="shortcut icon" href="icons/favicon.ico" />
            ```

        <br>

        -   sets paths to other icon sizes

            ```html
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />

            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
            ```

    <br>

    -   Set other icons

        -   sets icon for apple touch

            ```html
            <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
            ```

        <br>

        -   sets icon and background color for Microsoft App tile

            ```html
            <meta name="msapplication-TileColor" content="#008877" />

            <meta name="msapplication-config" content="icons/browserconfig.xml" />
            ```

        <br>

        -   sets icon for Safari pinned tab

            ```html
            <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#008877" />
            ```

        <br>

        -   sets icon for Android web app

            ```html
            <link rel="manifest" href="icons/site.webmanifest" />
            ```

    <br>

    -   Set canonical URL to combine multiple related URls

        ```html
        <link rel="canonical" href="https://www.mywebsite.com/page" />
        ```

    <br>

    -   Link to CSS stylesheets

        -   CSS reset file

            ```html
            <link rel="stylesheet" href="css/reset-minimal.css" />
            ```

        <br>

        -   CSS font file

            ```html
            <link rel="stylesheet" href="css/font.css" />
            ```

        <br>

        -   CSS stylesheet for page

            ```html
            <link rel="stylesheet" href="css/style.css" />
            ```

        <br>

        -   CSS stylesheet for print

            ```html
            <link rel="stylesheet" href="css/print.css" media="print" />
            ```

        <br>

    -   Placeholder for adding Google font

        -   Preconnect to Google API and Google Fonts

            ```html
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            ```

        <br>

        -   Add font with `display=swap` for optimal fallback performance

            ```html
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" />
            ```
