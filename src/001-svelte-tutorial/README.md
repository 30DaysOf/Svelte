# Walk through the default [Svelte Tutorial](https://svelte.dev/tutorial/)

## Learning Objectives
 * Walk through the default[Svelte Tutorial](https://svelte.dev/tutorial/basics) once, end-to-end and understand core concepts. Note that this is different from the [interactive tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) promoted via SvelteKit.
 * Use GitHub Copilot and capture "wow" moments for Svelte+AI pair-programming using a quote format like below. Understand if/how Copilot can speed up Svelte app development.

> ✨ Copilot Assist: <br/> I filled in placeholder items for a row, and it automatically predicted pattern and suggested next rows. It recommended links and description as well but they were not as accurate. So I went with creating blank placeholders to start.
<br/>

## Table Of Contents

This is the table of contents created using Copilot based on the tutorial as seen on Mar 9, 2023.

| Topic (What I Did) | Takeaway (What I Learned) |
|:---|:---|
| **`1. INTRODUCTION`** |  |
| [1.a Basics](https://svelte.dev/tutorial/basics) | |
| [1.b Adding Data](https://svelte.dev/tutorial/adding-data) | |
| [1.c Dynamic Attributes](https://svelte.dev/tutorial/dynamic-attributes) | |
| [1.d Styling](https://svelte.dev/tutorial/styling) | |
| [1.e Nested Components](https://svelte.dev/tutorial/nested-components) | |
| [1.f Making an App](https://svelte.dev/tutorial/making-an-app) | |
| **`2. REACTIVITY`** |  |
| [2.a Assignments](https://svelte.dev/tutorial/reactive-assignments) | |
| [2.b Declarations](https://svelte.dev/tutorial/reactive-declarations) | |
| [2.c Statements](https://svelte.dev/tutorial/reactive-statements) | |
| [2.d Updating Arrays & Objects](https://svelte.dev/tutorial/updating-arrays-and-objects) | |
| **`3. PROPS`** |  |
| [3.a Declaring Props](https://svelte.dev/tutorial/declaring-props) | |
| [3.b Default Values](https://svelte.dev/tutorial/default-values) | |
| [3.c Spread Props](https://svelte.dev/tutorial/spread-props) | |
| **`4. LOGIC`** |  |
| [4.a If blocks](https://svelte.dev/tutorial/if-blocks) | |
| [4.b Else blocks](https://svelte.dev/tutorial/else-blocks) | |
| [4.c Else-if blocks](https://svelte.dev/tutorial/else-if-blocks) | |
| [4.d Each blocks](https://svelte.dev/tutorial/each-blocks) | |
| [4.e Keyed each blocks](https://svelte.dev/tutorial/keyed-each-blocks) | |
| [4.f Await blocks](https://svelte.dev/tutorial/await-blocks) | |
| **`5. EVENTS`** |  |
| [5.a DOM Events](https://svelte.dev/tutorial/dom-events) | |
| [5.b Inline Handlers](https://svelte.dev/tutorial/inline-handlers) | |
| [5.c Event modifiers](https://svelte.dev/tutorial/event-modifiers) | |
| [5.d Component events](https://svelte.dev/tutorial/component-events) | |
| [5.e Event forwarding](https://svelte.dev/tutorial/event-forwarding) | |
| [5.f DOM event forwarding](https://svelte.dev/tutorial/dom-event-forwarding) | |
| **`6. BINDINGS`** |  |
| [6.a Text inputs](https://svelte.dev/tutorial/text-inputs) | |
| [6.b Numeric inputs](https://svelte.dev/tutorial/numeric-inputs) | |
| [6.c Checkbox inputs](https://svelte.dev/tutorial/checkbox-inputs) | |
| [6.d Group inputs](https://svelte.dev/tutorial/group-inputs) | |
| [6.e Textarea inputs](https://svelte.dev/tutorial/textarea-inputs) | |
| [6.f Select bindings](https://svelte.dev/tutorial/select-bindings) | |
| [6.g Select multiple](https://svelte.dev/tutorial/multiple-select-bindings) | |
| [6.h Contenteditable bindings](https://svelte.dev/tutorial/contenteditable-bindings) | |
| [6.i Each block bindings](https://svelte.dev/tutorial/each-block-bindings) | |
| [6.j Media elements](https://svelte.dev/tutorial/media-elements) | |
| [6.k Dimensions](https://svelte.dev/tutorial/dimensions) | |
| [6.l This](https://svelte.dev/tutorial/bind-this) | |
| [6.m Component bindings](https://svelte.dev/tutorial/component-bindings) | |
| [6.n Binding to component instances](https://svelte.dev/tutorial/component-this) | |
| **`7. LIFECYCLES`** |  |
| [7.a onMount](https://svelte.dev/tutorial/onmount) | |
| [7.b onDestroy](https://svelte.dev/tutorial/ondestroy) | |
| [7.c beforeUpdate and afterUpdate](https://svelte.dev/tutorial/update) | |
| [7.d tick](https://svelte.dev/tutorial/tick) | |
| **`8. STORES`** |  |
| [8.a Writable stores](https://svelte.dev/tutorial/writable-stores) | |
| [8.b Auto-subscriptions](https://svelte.dev/tutorial/auto-subscriptions) | |
| [8.c Readable stores](https://svelte.dev/tutorial/readable-stores) | |
| [8.d Derived stores](https://svelte.dev/tutorial/derived-stores) | |
| [8.e Custom stores](https://svelte.dev/tutorial/custom-stores) | |
| [8.f Store bindings](https://svelte.dev/tutorial/store-bindings) | |
| **`9. MOTION`** |  |
| [9.a Tweened](https://svelte.dev/tutorial/tweened) | |
| [9.b Spring](https://svelte.dev/tutorial/spring) | |
| **`10. TRANSITIONS`** |  |
| [10.a The transition directive](https://svelte.dev/tutorial/transition) | |
| [10.b Adding parameters](https://svelte.dev/tutorial/adding-parameters-to-transitions) | |
| [10.c In and out](https://svelte.dev/tutorial/in-and-out) | |
| [10.d Custom CSS transitions](https://svelte.dev/tutorial/custom-css-transitions) | |
| [10.e Custom JS transitions](https://svelte.dev/tutorial/custom-js-transitions) | |
| [10.f Transition events](https://svelte.dev/tutorial/transition-events) | |
| [10.g Local transitions](https://svelte.dev/tutorial/local-transitions) | |
| [10.h Deferred transitions](https://svelte.dev/tutorial/deferred-transitions) | |
| [10.i Key blocks](https://svelte.dev/tutorial/key-blocks) | |
| **`11. ANIMATIONS`** |  |
| [11.a The animate directive](https://svelte.dev/tutorial/animate) | |
| **`12. ACTIONS`**  | |
| [12.a The use directive](https://svelte.dev/tutorial/actions) | |
| [12.b Adding parameters](https://svelte.dev/tutorial/adding-parameters-to-actions) | |
| **`13. ADVANCED STYLING`**  | |
| [13.a The class directive](https://svelte.dev/tutorial/classes) | |
| [13.b Shorthand class directive](https://svelte.dev/tutorial/class-shorthand) | |
| [13.c Inline styles](https://svelte.dev/tutorial/inline-styles) | |
| [13.d The style directive](https://svelte.dev/tutorial/style-directive) | |
| **`14. COMPONENT COMPOSITION`**  | |
| [14.a Slots](https://svelte.dev/tutorial/slots) | |
| [14.b Slot fallbacks](https://svelte.dev/tutorial/slot-fallbacks) | |
| [14.c Named slots](https://svelte.dev/tutorial/named-slots) | |
| [14.d Checking for slot content](https://svelte.dev/tutorial/optional-slots) | |
| [14.e Slot props](https://svelte.dev/tutorial/slot-props) | |
| **`15. CONTEXT API`**  | |
| [15.a setContext and getContext](https://svelte.dev/tutorial/context-api) | |
| **`16. SPECIAL ELEMENTS`**  | |
| [16.a <svelte:self> ](https://svelte.dev/tutorial/svelte-self) | |
| [16.b <svelte:component> ](https://svelte.dev/tutorial/svelte-component) | |
| [16.c <svelte:element> ](https://svelte.dev/tutorial/svelte-element) | |
| [16.d <svelte:window> ](https://svelte.dev/tutorial/svelte-window) | |
| [16.e <svelte:window> bindings ](https://svelte.dev/tutorial/svelte-window-binding) | |
| [16.f <svelte:body> ](https://svelte.dev/tutorial/svelte-body) | |
| [16.g <svelte:head> ](https://svelte.dev/tutorial/svelte-head) | |
| [16.h <svelte:options> ](https://svelte.dev/tutorial/svelte-options) | |
| [16.i <svelte:fragment> ](https://svelte.dev/tutorial/svelte-fragment) | |
| **`17. MODULE CONTEXT`**  | |
| [17.a Sharing code](https://svelte.dev/tutorial/sharing-code) | |
| [17.b Exports](https://svelte.dev/tutorial/module-exports) | |
| **`18. SPECIAL TAGS`**  | |
| [18.1 The Debug Tag](https://svelte.dev/tutorial/debug) | |
| [18.2 HTML Tags](https://svelte.dev/tutorial/html-tags) | |
| **`19. NEXT STEPS`**  | |
| [19.1 Congratulations](https://svelte.dev/tutorial/congratulations) | |
|||