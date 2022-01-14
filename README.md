# CSS Switcher - HTML and Body Height

This is a tool to test different methods of setting height on the html and body elements.

<br>

[Live Demo](https://andentx.github.io/css-switcher-html-and-body-height/)

<br>

## Table of Contents

-   [Purpose](#purpose)
-   [How to Use](#how-to-use)
-   [Option 0](#option0)
-   [Option 1](#option1)
-   [Option 2](#option2)
-   [Option 3](#option3)
-   [Option 4](#option4)
-   [References](#references)

<br>

## <a name="purpose"></a> Purpose

To explore the differences each method has on view size, scrolling, overflow and other behaviors on different browsers.

<br>

## <a name="how-to-use"></a> How to Use

-   Choose a method from the dropdown menu.

-   Each option's first value is the CSS applied for the html element.

-   The second value is the CSS applied on the body element.

-   Click the button to see more information about the applied CSS, color key, and notes on each method.

<br>

## <a name="option0"></a> Option 0

### undefined; undefined;

<br>

-   Applied CSS

    ```css
    html {
    }

    body {
    }
    ```

<br>

-   Notes

    -   **description**

        -   default settings
        -   height default is auto
            <br>
            <br>

    -   **html element**

        -   html has height of auto
        -   html has minimum height of 0
        -   html element will grow to include inner content
            <br>
            <br>

    -   **body element**

        -   body has height of auto
        -   body has minimum height of 0
        -   body element will grow to include inner content
            <br>
            <br>

    -   **behavior**

        -   html and body will not fill full view height unless inner content happens to be taller than the view height
        -   there is no fixed height on either element to reference
            <br>
            <br>

    -   **opinions**

        -   "Not optimal. Behavior can be inconsistent and edge cases aren't accounted for."
            <br> - [**andrew**](https://github.com/andentx)
            <br>
            <br>

<br>
<br>

## <a name="option1"></a> Option 1

### min-height: 100%; min-height: 100%;

<br>

-   Applied CSS

    ```css
    html {
        min-height: 100%;
    }

    body {
        min-height: 100%;
    }
    ```

<br>

-   Notes

    -   **description**

        -   common setting
        -   doesn't work properly
        -   content taller than view height will hide related issues
            <br>
            <br>

    -   **html element**

        -   html height is not set
        -   html min-height set to 100%
        -   html min-height based off viewport height
        -   html element will grow to include inner content
            <br>
            <br>

    -   **body element**

        -   body height is not set
        -   body has minimum height of 0
        -   body is not able to set min-height because the parent element, html, does not have a set height
        -   body element will grow to include inner content
            <br>
            <br>

    -   **behavior**

        -   html and body will not fill full view height unless inner content happens to be taller than the view height
        -   there is no fixed height on the html element to reference
        -   these issues are hidden if content is taller than view height
            <br>
            <br>

    -   **opinions**

        -   "It is not uncommon to see CSS properties applied to both the HTML and body elements like this ...
            <br>
            <br>
            Does it matter? Yes, yes it does.
            <br>
            <br>
            The above style definition creates a problem: Setting min-height to 100% on both elements does not allow the body element to fill the page like you might
            expect."
            <br> - [**freeCodeCamp**](https://www.freecodecamp.org/news/html-page-width-height/)
            <br>
            <br>

        -   "Not optimal. The incorrect use of min-height on the html element leads to inconsistent behavior."
            <br> - [**andrew**](https://github.com/andentx)
            <br>
            <br>

<br>
<br>

## <a name="option2"></a> Option 2

### height: 100%; min-height: 100%;

<br>

-   Applied CSS

    ```css
    html {
        height: 100%;
    }

    body {
        min-height: 100%;
    }
    ```

<br>

-   Notes

    -   **description**

        -   acceptable, functional, but outdated
        -   html has fixed height that body can reference but will overflow
            <br>
            <br>

    -   **html element**

        -   html has height of 100%
        -   html height is fixed to the height of the viewport
        -   html element will not grow to fit inner content
            <br>
            <br>

    -   **body element**

        -   body has minimum height of 100%
        -   body element will grow to fit inner content
            <br>
            <br>

    -   **behavior**

        -   html and body will fill full view height
        -   100% height is calculated from the minimum viewport height on mobile browsers, so content will not be hidden by the browser UI on initial load
        -   body element will overflow html element if it's inner content is taller
            <br>
            <br>

    -   **opinions**

        -   "For years... the ideal height setting for a full responsive page... was this."
            <br> - [**freeCodeCamp**](https://www.freecodecamp.org/news/html-page-width-height/)
            <br>
            <br>
        -   "The old school way"
            <br>
            <br>
            "This solution... used since time immemorial, and it will work, that's for sure!
            <br>
            <br>
            Well... Not quite... because of the fixed html height"
            <br> - [**Leonid Fenko**](https://dev.to/fenok/stretching-body-to-full-viewport-height-the-missing-way-2ghd)
            <br>
            <br>

        -   "Many sources say that this was the preferred way to get a full height, but is now outdated.
            <br>
            <br>
            I have also read that overflowing the html has been considered acceptable, but I think there are better methods."
            <br> - [**andrew**](https://github.com/andentx)
            <br>
            <br>

<br>
<br>

## <a name="option3"></a> Option 3

### undefined; min-height: 100vh;

<br>

-   Applied CSS

    ```css
    html {
    }

    body {
        min-height: 100vh;
    }
    ```

<br>

-   Notes

    -   **description**

        -   a modern, common method
        -   has issues related to mobile browsers
            <br>
            <br>

    -   **html element**

        -   html height is not set
        -   when html height is not set, it assumes the body height
        -   html min-height gets set to match 100vh from body element
        -   html element will grow to include inner content
            <br>
            <br>

    -   **body element**

        -   body has minimum height of 100vh
        -   body element will grow to fit inner content
            <br>
            <br>

    -   **behavior**

        -   html and body will fill full view height
        -   100vh height is calculated from the maximum viewport height on most mobile browsers, so content may be hidden by the browser UI on initial loads
            <br>
            <br>

    -   **opinions**

        -   "The Modern Solution"
            <br>
            <br>
            "For a responsive full page height, set the body element min-height to 100vh."
            <br> - [**freeCodeCamp**](https://www.freecodecamp.org/news/html-page-width-height/)
            <br>
            <br>

        -   "The state-of-the-art way"
            <br>
            <br>
            "Isn't it exactly what we need?
            <br>
            <br>
            Well... Almost.
            <br>
            <br>
            If we open such a page in a typical mobile browser ... even if the page has no content at all, its bottom will still disappear beneath the bottom UI panel of the
            browser!"
            <br> - [**Leonid Fenko**](https://dev.to/fenok/stretching-body-to-full-viewport-height-the-missing-way-2ghd)
            <br>
            <br>

        -   "This method is nice and simple, but I prefer not to use 100vh if it is not consistent on mobile browsers.
            <br>
            <br>
            Setting content to be the full height of a mobile browser, but hidden behind the UI when initially loaded doesn't make sense to me."
            <br> - [**andrew**](https://github.com/andentx)
            <br>
            <br>

<br>
<br>

## <a name="option4"></a> Option 4

### min-height: 100%; flex-grow: 1;

<br>

-   Applied CSS

    ```css
    html {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    body {
        flex-grow: 1;
    }
    ```

-   Notes

    -   **description**

        -   a modern, flex-based method
        -   handles mobile browsers well
            <br>
            <br>

    -   **html element**

        -   html height is not set
        -   html has min-height of 100%
        -   html min-height based off viewport height
        -   html element will grow to include inner content
        -   html display set to flex
            <br>
            <br>

    -   **body element**

        -   body height is not set
        -   body min-height is not set
        -   body gets a default align-self value of stretch
        -   body will stretch to height of html element
        -   body element will grow to fit inner content
            <br>
            <br>

    -   **behavior**

        -   html and body will fill full view height
        -   100% height is calculated from the minimum viewport height on mobile browsers, so content will not be hidden by the browser UI on initial load
        -   setting a parent element to display: flex enables a child element to grow to the entire height of the parent container, without needing to reference a fixed height, while still being able to grow to fit inner content
            <br>
            <br>

    -   **opinions**

        -   "The missing way"
            <br>
            <br>
            "...both html and body can stretch to their content, and, since we're using the percentage height, there are no issues with mobile browsers whatsoever."
            <br> - [**Leonid Fenko**](https://dev.to/fenok/stretching-body-to-full-viewport-height-the-missing-way-2ghd)
            <br>
            <br>

        -   "This is my preferred way to set the html and body height. It is the easiest to control and predict.
            <br>
            <br>
            There is value in setting these parameters even when the issues from not setting them are hidden.
            <br>
            <br>
            Filling the view of a mobile browser to the edges of the UI upon loading instead of the maximum viewheight makes the most sense to me."
            <br> - [**andrew**](https://github.com/andentx)
            <br>
            <br>

<br>
<br>

## <a name="references"></a> References

-   [HTML vs Body: How to Set Width and Height for Full Page Size](https://www.freecodecamp.org/news/html-page-width-height/) <br> - freeCodeCamp

<br>

-   [Stretching body to full viewport height: the missing way]() <br> - Leonid Fenko

<br>

-   [Bug 141832 - Viewport height is taller than the visible part of the document in some mobile browsers](https://bugs.webkit.org/show_bug.cgi?id=141832) <br> - WebKit Bugzilla

<br>

-   [URL Bar Resizing - Web Update](https://developers.google.com/web/updates/2016/12/url-bar-resizing) <br> - Google Developers

<br>
