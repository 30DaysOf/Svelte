# Interactive Svelte Tutorial

Walk through _Interactive Svelte Tutorial_ but:
 - take notes as you explore in browser
 - explore GitHub Copilot usage for code/comments generation alongside (look for 👩🏽‍✈️ with `prompt`)
 - 💡 TIP: `Inspect` the tutorial page as you go, to see console messages (e.g., to understand referenced errors)

> Tutorial Roadmap

The tutorial is broken into 4 sections
 - Welcome to Svelte = fundamentals
 - Introduction to SvelteKit = framework
 - Advanced Svelte = more complex usage concepts
 - Advanced SvelteKit = best practices using framework

> Resources
 - [Svelte Team Blog](https://svelte.dev/blog/whats-new-in-svelte-march-2023)- What's new in Svelte
 - [Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) - intro to Svelte and SvelteKit
 - [Docs](https://svelte.dev/docs) - Component Format, Template Sytax, etc.
 - [Code Examples](https://svelte.dev/examples) - Usage snippets, patterns
 - [REPL](https://svelte.dev/repl) - in-browser app development playground
 - [Svelte DevTools](https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn) - Chrome extension for debugging
 - [Svelte For VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - VS Code extension for Svelte

> Community Resources:

 - [Svelte Society](https://sveltesociety.dev/) - Templates, Tools, Recipes
 - [Svelte Summit](https://sveltesummit.com/) - CFP closes Mar 31
 - [Svelte Hacker](https://hack.sveltesociety.dev/) - Feb 17-Apr 17
 - [Awesome-Svelte](https://github.com/TheComputerM/awesome-svelte) - Popular awesome-list for Svelte
 - [Awesome-SvelteKit](https://github.com/janosh/awesome-sveltekit) - Popular awesome-list for SvelteKit

Let's get started!

---

## 1. Dev Environment

1. Install the VS Code Extension for Svelte
2. Install the GitHub Copilot Extension
3. Install the GitHub Copilot Labs Extension
4. `nvm use 18` - using node v18.9.0, npm v8.19.1


## 2. About Svelte

1. 👩🏽‍✈️ | `Svelte` is a compiler that takes your declarative components and converts them into efficient vanilla JavaScript that surgically updates the DOM.
2. 👩🏽‍✈️ | `SvelteKit` is a framework for building web applications of all sizes, with a file-based routing system, pre-rendering, code-splitting and TypeScript support baked in.


## 3. [First Component](https://learn.svelte.dev/tutorial/your-first-component)

* 👩🏽‍✈️ | Applications are composed of components defined in `.svelte` files. Each component has its own scope, and its own CSS.
* 👩🏽‍✈️ | `App.svelte` is the root component of the app. It's the first component that's loaded when the app starts up.
* `<script>` tags define variables scoped to just that component template, but not available outside it.
* Use `{}` to embed JavaScript expressions (e.g., using declared variables) in the component markup.

## 4. [Dynamic Attributes](https://learn.svelte.dev/tutorial/dynamic-attributes)

1. Accessibility = Svelte warns of _inaccessible_ markup with error message like:
    - `A11y: <img> element should have an alt attribute`

2. Shorthand = if _attribute_ and _variable_ names are same. Example: These are equivalent.
    ```html
    <img src={src} alt="Rick-Rolled">
    <img {src} alt="Rick-Rolled">
    ```

## 5. [Styling](https://learn.svelte.dev/tutorial/styling)

 - add `style` tag to component file. The style is scoped only to the component markup (not the entire page). Example: 
    ```html
    <p> 
        Paragraph will be colored red
    </p>  
    <style> 
        p { color: red; } 
    </style>
    ```

## 6. [Nested Components](https://learn.svelte.dev/tutorial/nested-components)

 - `import` component file within script tags
 - use it as element in markup
 - component names are always capitalized to distinguish them from standard HTML elements


## 7. [Reactivity](https://learn.svelte.dev/tutorial/reactive-assignments)

 - Reactivity keeps DOM in sync with application state
 - Define event handler functions inside script tags; these update variable state reactively on events
 - Call event handler functions within elements (on event triggers) to trigger reactive updates to component view.

## 8. [Reactive: Declarations](https://learn.svelte.dev/tutorial/declarations)

 - Svelte updates DOM reactively on state changes.
 - Reactive declarations let Svelte know that a variable X is computed based on state of variable Y (dependency).
 - Svelte uses special `$:` syntax to declare reactive assignments. Example: 
    ```html
    <script>
        let count = 4;
        $: doubled = count*2;
        function increment() {
            count += 1;
        }
    </script>
    ```
 - Reactivity has a cost. Use when the value is used in multiple places or has explicit dependency on _other_ reactive values (which may in turn be computed).


## 9. [Reactive: Statements](https://learn.svelte.dev/tutorial/reactive-statements)

* Use the `$:` syntax in front of a statement to make it reactive. For example, use with conditional statements.
    ```html
    <script>
        let count = 4;
        $: if (count > 10) {
            count = 0;
        }
    </script>
    ```
* Use `$:` in front of a block if you have multiple statements that are reactive together. Example:
    ```html
    <script>
        let count = 4;
        $: {
          console.log("Count is: ${count}");
          alert("Count is now ${count}");
        }
    </script>
    ```

## 10. [Reactive: With Arrays](https://learn.svelte.dev/tutorial/updating-arrays-and-objects)

* Reactivity is triggered by _assignments_ to variables, not by mutating the values themselves.
* Array methods like `push` and `splice` mutate the array, so they don't trigger reactivity.
* (Option 1) Fix by adding explicit assignement:
    ```html
    <script>
        let items = [1, 2, 3];
        function addNumber() {
            items.push(items.length + 1);
            items=items; // <-- explicit assignment
        }
    </script>
    ```
* (Option 2)Use idomatic solutions like the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Example for push alternative below. You can similarly replace pop, shift, unshift, splice, etc.
    ```html
    <script>
        let items = [1, 2, 3];
        function addNumber() {
            items = [...items, items.length + 1];
        }

Note that name of the _updated variable_ will be on LHS of assignment, and is the default reactive target. If that variable is referenced elsewhere (in RHS of an assignment), that is not automatically reactive _unless_ it has an explicit reactive assignment statement defined.