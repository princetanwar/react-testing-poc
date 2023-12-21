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
2.

Tips's

1. how to find the aria-role of the element
   ans. use logRoles method form the react-testing-library

```diff
  	const view  = render(<Component  />);
+	logRoles(view.container);

```

2. how to find the best why to query a element
   ans. use testing playground extension available in chrome store then open dev tool and find the playground section.
