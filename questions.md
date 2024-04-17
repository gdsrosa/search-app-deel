# React Questions

1. What is the difference between Component and PureComponent? Give an example where it might break my app.

- A: Basically the difference is that `Component` doens't have built-in mechanisms to avoid unnecessary re-renders. For instance, if the parent
of the `Component` children re-renders by an update of its props and state the child `Component` will also re-render. Now, on `PureComponent` it has a lifecycle method called `shouldComponentUpdate` that helps avoid unnecessary re-renders optimizing the component's performance.
  - Example: You're app might break by using `PureComponent` when you have a scenario where you are receiving props as objects or arrays and it references are being changed on every render. So, the `PureComponent` does a comparison with the props and it won't detect any change, and then the re-render doesn't happen.

2.Context + ShouldComponentUpdate might be dangerous. Why is that?

- A: I believe it's dangerous because the `shouldComponentUpdate` lifecycle hook is "watching" to every state or props changes in order re-render the component tree, and having a Context that's updates the
state from other parts of the code this combination can be tricky to handle bugs.

3.Describe 3 ways to pass information from a component to its PARENT.

- A: Props and Callbacks, Context API and Custom Events.

4.Give 2 ways to prevent components from re-rendering.

- A: Using `React.memo()` and the `PureComponent` (for class based Components), both have the same purpose which is to improve the performance of the application.
The `memo` function is a HOC that uses the memoization approach to prevent re-renders if there are not changes in the props. And the `PureComponent` with the help of `shouldComponentUpdate` that makes a
shallow prop and state comparison automatically to avoid the re-render.

5.What is a fragment and why do we need it? Give an example where it might break my app.

- A: Fragment is an way to group more than one children element in a node tree, so instead of using a `div` for example we can use `Fragment`, and we need to wrap up the sibling elements to a parent. It's a good alternative to DOM elements as well.

- Example:

    ```jsx
    function App() {
      // This will cause an error because you have to siblings element without a parent Wrapper
        return (
          <h1>Hello</h1>
          <p>World</p>
        );
    }


    // To fix we can wrap up in a Fragment for example
    function App() {
      // No more errors :)
        return (
          <React.Fragment>
            <h1>Hello</h1>
            <p>World</p>
          </React.Fragment>
        );
    }
    ```

6.Give 3 examples of the HOC pattern.

- A:

```jsx
import { Redirect } from 'router-lib';

// 1
const withAuthenticator = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const isAuthenticated = checkAuthentication();
        if (!isAuthenticated) {
            return <Redirect to="/login" />;
        }
        return <WrappedComponent {...props} />;
    };
    return AuthComponent;
};

// 2
const withTranslations = (WrappedComponent) => {
    const TranslatedComponent = (props) => {

      return <WrappedComponent {...props} translation={props.translation.english} />;
    };

    return TranslatedComponent;
};

// 3
const withLogger = (WrappedComponent) => {
    const LoggerComponent = (props) => {
      const { logger, eventData } = useLogger();

      useEffect(() => {
        logger.log('Event', eventData);
      }, [eventData]);

        return <WrappedComponent {...props} />;
    };

    return LoggerComponent;
};
```

7.What's the difference in handling exceptions in promises, callbacks and async...await?

- A: Basically the difference is the syntax because all 3 follows the same structure to solve the issue which is handling the success case and the failure case.

  - `Promises`: you need to use the 2 builtin function `then` and `catch` to handle exeptions, where `then` is in case of success and `catch` for failure.

  ```js
    fetchData().then(response => {
        // handle response
    }).catch(error => {
      // handle error
    })
  ```

  - `Callbacks`: you have a callback function that have 2 parameters the first one being the `error` and second the `result`.

  ```js
    callback((error, result) => {
      if(error) {
        // error handling
      } else {
        // result handling
      }
    });
  ```

  - `async...await`: you need to use a `try...catch` block to handle your exeptions.

  ```js
  async function fetchData() {
    try {
        const result = await getData();
        // handle result
    } catch (error) {
        // handle error
    }
  }
  ```

  At the end the key differences are `syntax` and `readability`

8.How many arguments does setState take and why is it async.

- A: `setState` takes 2 arguments when using the callback approach, the first is the previous state of `State` and the second one is the props to be change the current state.  It's async because React breakdown the state updates for performance improvement, scheduling them in subsequent rendering phases rather than applying them immediately. Nevertheless usually the setState only take 1 parameter receiving the piece of the state.

9.List the steps needed to migrate a Class to Function Component.

- A:
  1. Identify the component
  2. Check the Class Based Component and what is needed to change
  3. Create the function to the new component
  4. In case it has some `State` convert to `useState` hook
  5. Check the lifecycle methods, in case it has `componentDidMount` this needed to be converted to a `useEffect` with a empty array of dependencies
  
  ```jsx
    useEffect(() => { ...your code here }, [])
  ```

  6. Rewrite the methods to be pure Javascript functions
  7. Check the props and convert them to be an argument of the new functional component
  8. Test and ensure the implementation is still working as expected
  9. Refactor the components tests, like unit, integration and/or End-to-end


10.List a few ways styles can be used with components.

- A: It can be `inline`, separated files like `CSS Modules` and/or with third party library using `CSS in JS` approach.

```css
/* styles.module.css */
.container {
  background-color: red;
}
```

```jsx
import styled from 'styled-components';
import styles from './styles.module.css';

const StyledDiv = styled.div`
  background-color: red;
`


function App() {
  // Inline
  return <div style={{ backgroundColor: 'red' }}>Hello World</div>;

  // CSS Modules
  return <div className={styles.container}>Hello World</div>;

  // CSS in JS
  return <StyledDiv />
}
```

11.How to render an HTML string coming from the server.
  
- A: React allow us to do this via the `dangerouslySetInnerHTML` property. The pitfall here is that the application gets
vunarable to XSS (Cross-Site Scripting), so it's recommended to always sanitize the string before rendering in your application.
