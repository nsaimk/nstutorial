import { Link, Outlet } from 'react-router-dom';
import Logo from "./images/NStutorial.jpg";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/">
                    <img className="mt-3" src={Logo} alt="movie tickets" style={{ width: '100px', height: '100px' }}></img>
                    </Link>
                </div>
                <div className="col text-end">
                    <Link to="/login"><span className="badge bg-success">Login</span></Link>
                </div>
                <hr className="mb-3"></hr>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <p>Beginner</p>
                            <Link to="/level1" className="list-group-item list-group-item-action">Level 1: Variables</Link>
                            <Link to="/level2" className="list-group-item list-group-item-action">Level 2: Data Types</Link>
                            <Link to="/level3" className="list-group-item list-group-item-action">Level 3: Operators</Link>
                            <Link to="/level4" className="list-group-item list-group-item-action">Level 4: Conditionals</Link>
                            <Link to="/level5" className="list-group-item list-group-item-action">Level 5: Data Structures</Link>
                            <Link to="/level6" className="list-group-item list-group-item-action">Level 6: Loops</Link>
                            <Link to="/level7" className="list-group-item list-group-item-action">Level 7: Functions</Link>
                            <Link to="/level8" className="list-group-item list-group-item-action">Level 8: Common Methods</Link>
                            <Link to="/level9" className="list-group-item list-group-item-action">Level 9: Advanced Functions</Link>
                            <Link to="/level10" className="list-group-item list-group-item-action">Level 10: DOM Manipulation</Link>
                            <Link to="/level11" className="list-group-item list-group-item-action">Level 11: Event Handling</Link>
                            <Link to="/level12" className="list-group-item list-group-item-action">Level 12: Basic Debugging</Link>
                            <hr></hr>
                            <p>Intermediate</p>
                            <Link to="/level13" className="list-group-item list-group-item-action">Level 13: Error Handling</Link>
                            <Link to="/level14" className="list-group-item list-group-item-action">Level 14: Important Operators</Link>
                            <Link to="/level15" className="list-group-item list-group-item-action">Level 15: Asynchronous JavaScript</Link>
                            <Link to="/level16" className="list-group-item list-group-item-action">Level 16: APIs</Link>
                            <Link to="/level17" className="list-group-item list-group-item-action">Level 17: Object-Oriented JavaScript</Link>
                            <Link to="/level18" className="list-group-item list-group-item-action">Level 18: Prototypal Inheritance</Link>
                            <Link to="/level19" className="list-group-item list-group-item-action">Level 19: Module System</Link>
                            <Link to="/level20" className="list-group-item list-group-item-action">Level 20: Tooling</Link>
                            <Link to="/level21" className="list-group-item list-group-item-action">Level 21: Functional Programming Basics</Link>
                            <hr></hr>
                            <p>Advanced</p>
                            <Link to="/level22" className="list-group-item list-group-item-action">Level 22: Asynchronous Patterns</Link>
                            <Link to="/level23" className="list-group-item list-group-item-action">Level 23: DOM & Web APIs</Link>
                            <Link to="/level24" className="list-group-item list-group-item-action">Level 24: State Management</Link>
                            <Link to="/level25" className="list-group-item list-group-item-action">Level 25: Advanced Object-Oriented JavaScript</Link>
                            <Link to="/level26" className="list-group-item list-group-item-action">Level 26: Functional Programming</Link>
                            <Link to="/level27" className="list-group-item list-group-item-action">Level 27: Advanced Error Handling</Link>
                            <Link to="/level28" className="list-group-item list-group-item-action">Level 28: Performance Optimization</Link>
                            <Link to="/level29" className="list-group-item list-group-item-action">Level 29: Security Essentials</Link>
                            <Link to="/level30" className="list-group-item list-group-item-action">Level 30: Testing</Link>
                            <Link to="/level31" className="list-group-item list-group-item-action">Level 31: Build Tools & Automation</Link>
                            <hr></hr>
                            <p>Master</p>
                            <Link to="/level32" className="list-group-item list-group-item-action">Level 32: Design Patterns</Link>
                            <Link to="/level33" className="list-group-item list-group-item-action">Level 33: Advanced State Management</Link>
                            <Link to="/level34" className="list-group-item list-group-item-action">Level 34: Advanced Performance Optimization</Link>
                            <Link to="/level35" className="list-group-item list-group-item-action">Level 35: Type Systems</Link>
                            <Link to="/level36" className="list-group-item list-group-item-action">Level 36: Server-Side JavaScript</Link>
                            <Link to="/level37" className="list-group-item list-group-item-action">Level 37: Full-Stack Development</Link>
                            <Link to="/level38" className="list-group-item list-group-item-action">Level 38: Modern Frameworks</Link>
                            <Link to="/level39" className="list-group-item list-group-item-action">Level 39: Architecture & Scalability</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;


/* 
-- Beginner --
Variables: var, let, const
Data Types: Strings, Numbers, Booleans, null, undefined.
Operators: Arithmetic, Assignment, Comparison, Logical, 
Conditionals
Control Flow: if/else, switch, ternary operator.
Basic Data Structures: Arrays, Objects, Mutability.
Loops: for, while, do...while, iterating over arrays with forEach.
Functions: Declaration, Invocation, Return, Parameters vs Arguments.
Common Methods
Sets, Maps
Advanced Functions: Arrow functions, default parameters, rest parameters.
Scope
DOM Manipulation: Selecting and changing webpage elements, handling user input.
Event Handling: addEventListener, handling clicks, form submissions.
Basic Debugging: using browser dev tools, debugger.

-- Intermediate --
Error Handling: try...catch, throwing custom errors.
Important operators: null coalescing, optional chaining, ternary operator
Asynchronous JavaScript: Callbacks, Promises, async/await.
APIs: Fetch API, working with JSON, making HTTP requests.
Object-Oriented JavaScript: this, new, constructor functions, class syntax.
Prototypal Inheritance: Prototype chain, creating prototypes, inheritance patterns.
Module System: ES6 modules (import/export), CommonJS (require/module.exports).
Tooling: npm, basic webpack, Babel.
Functional Programming Basics: Pure functions, higher-order functions, closures, .map(), .filter(), .reduce().

-- Advanced --
Advanced Asynchronous Patterns: Microtasks, Macrotasks, Event Loop, Web Workers.
Advanced DOM & Web APIs: IntersectionObserver, WebSockets, localStorage/sessionStorage.
State Management: Understanding State, Introduction to State Management Libraries (e.g., Redux).
Advanced Object-Oriented JavaScript: Factory Functions, Mixins, Composition.
Functional Programming: Immutability, Recursion, Function Composition, Currying.
Advanced Error Handling: Custom error types, error tracking.
Performance Optimization: Lazy loading, Debouncing and Throttling, Memoization.
Security Essentials: XSS, CSRF, CORS, Content Security Policy.
Testing: Unit Testing, Integration Testing, E2E Testing, Frameworks (Jest, Mocha/Chai).
Build Tools & Automation: Advanced webpack, Gulp, npm scripts.

-- Expert/Master --
Design Patterns: Module Pattern, Factory, Singleton, Observer, etc.
Advanced State Management: State Machines, Redux Middleware
Advanced Performance Optimization: Code Splitting, Tree Shaking, Web Assembly.
Type Systems: TypeScript, Flow.
Server-Side JavaScript: Node.js, Express, RESTful API design, GraphQL.
Full-Stack Development: MERN Stack, Server-Side Rendering.
Modern Frameworks: In-depth understanding of frameworks like React, Angular, Vue.
Architecture & Scalability: Microservices, Load Balancing, Caching Strategies, CDN.
*/