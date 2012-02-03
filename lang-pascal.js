// Copyright (C) 2011 Rob Kennedy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * Registers a language handler for Pascal and Delphi.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-pas">(my Pascal code)</pre>
 *
 * @author Rob Kennedy (kennedyri+github@gmail.com)
 */

PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      // Whitespace
      [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
      // A single-quoted string; chars start with #
      [PR.PR_STRING, /^(?:'[^\n\r']*'|#(?:\d+|\$[\da-f]+))+/i, null, '\'#'],
      // A number
      [PR.PR_LITERAL, /^(?:\$[\da-f]+|\d+(?:\.\d*)?(?:e[-+]?\d+)?)/i, null, '$0123456789'],
      // A curly-brace-style comment
      [PR.PR_COMMENT, /^{[^}]*}/, null, '{']
    ],
    [
      // A comment is delimited by {} or (**), or starts with //
      [PR.PR_COMMENT, /^(?:\(\*[\s\S]*?\*\)|\/\/.*)/],

      [PR.PR_KEYWORD, /^(?:absolute|abstract|and|array|as|asm|assembler|at|begin|case|cdecl|class|const|constructor|destructor|dispinterface|div|do|downto|dynamic|else|end|except|external|finalization|finally|for|forward|function|goto|if|implementation|in|inherited|inline|initialization|interface|label|library|message|mod|nil|not|object|of|on|or|otherwise|out|overload|override|package|packed|pascal|private|procedure|program|property|protected|public|published|raise|record|register|repeat|safecall|set|shl|shr|stdcall|strict|string|then|threadvar|to|try|type|unit|until|uses|var|virtual|while|with|xor)\b/i, null],

      // T, I, or P followed by another capital letter probably indicates
      // a type name, unless it's _all_ capitals, and then it's probably
      // just an ordinary identifier for a constant.
      [PR.PR_TYPE, /^[IPT][A-Z]\w*[a-z]\w*/],
      [PR.PR_TYPE, /^(?:bool(?:ean)?|(?:byte|word|long)bool|(?:short|small|long|nativeu?)int|u?int(?:8|16|32|64)|byte|(?:long)?word|integer|cardinal|single|double|extended|real(?:48)?|comp|currency|(?:ansi|wide)?char|(?:ansi|wide|unicode|short)string|(?:ole)?variant|pointer)\b/i],

      // A number is a hex integer literal, a decimal real literal, or in
      // scientific notation.
      [PR.PR_LITERAL, /^[+-]?(?:\$[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[-+]?\d+)?))/i],

      // Functions -- identifiers that are followed by parentheses
      // Disabled until issue 187 is resolved
      //['fun', /^&?[A-Za-z_][A-Za-z0-9_]*(?=\()/],

      // An identifier
      [PR.PR_PLAIN, /^&?[A-Za-z_]\w*/],
      [PR.PR_PLAIN, /^[\t\n\r \xA0]+/],

      // A run of punctuation
      [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0&\'#\-\+=./{(]*/]
    ]),
  ['pas', 'pp', 'dpr']);
