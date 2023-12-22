# which get method should i use to query elements

## your test should resemble how users interact with your code (component, page, etc.) as much as possible. With this in mind, we recommend this order of priority:

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText (img, area, input and any custom element)
7. getByTitle
8. getByTestId

| Type of Query     | 0 Matches   | 1 Match        | >1 Matches   | Retry (Async/Await) |
| ----------------- | ----------- | -------------- | ------------ | ------------------- |
| Single Element    |             |                |              |                     |
| getBy...          | Throw error | Return element | Throw error  | No                  |
| queryBy...        | Return null | Return element | Throw error  | No                  |
| findBy...         | Throw error | Return element | Throw error  | Yes                 |
| Multiple Elements |             |                |              |                     |
| getAllBy...       | Throw error | Return array   | Return array | No                  |
| queryAllBy...     | Return []   | Return array   | Return array | No                  |
| findAllBy...      | Throw error | Return array   | Return array | Yes                 |

# what to test in React

1. test if the component is rendered properly
2. test user event click,scroll etc.
3. custom hooks

Tips's

1. how to find the aria-role of the element
   - use logRoles method form the react-testing-library

```diff
  	const view  = render(<Component  />);
+	logRoles(view.container);

```

2. how to find the best why to query a element

   - use testing playground extension available in chrome store then open dev tool and find the playground section.

   </br>

3. use es-lint with testing to make static analysis can happened and ensure the code is well written.
   </br>

4. use prettier with testing to make sure team follow the same code styling.

5. use husky npm module to automate linting and code formatting.

6. use lint-staged npm module to run es-lint and prettier only on the file that are change sins last commit and avoid running es-lint and prettier on complete code base as it is unnecessary.

7. use msw (mock service worker) to mock api for test.
