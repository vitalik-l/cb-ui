import React from 'inferno-compat';
export * from 'inferno-compat';
import createContext from 'create-react-context/lib/implementation';
import memo from 'react-memo-polyfill';
React.memo = memo;
// React.memo = (Component) => (props) => <Component {...props} />;
React.createContext = createContext;
export { createContext };
export default React;
