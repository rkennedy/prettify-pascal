This is a plug-in for the [Google Prettify syntax-highlighting library][1].
It highlights Pascal-like languages with a bias toward Delphi.

To use it, include *prettify.js* and *lang-pascal.js* from this project
in your HTML page. Then put your code in an HTML tag:

    <pre class="prettyprint lang-pas">(Pascal code)</pre>

Features and improvements over Prettify's default syntax highlighting:

* Accepts backslashes inside string literals without treating them like escape characters
* Recognizes brace-style comments
* Recognizes character literals (starting with `#`, not `^`)
* Knows most Delphi reserved words
* Accepts `&` for [escaping reserved words][2]

[1]: http://code.google.com/p/google-code-prettify/
[2]: http://stackoverflow.com/q/1512109/33732
