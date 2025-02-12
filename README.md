++++++++++++++++++++++ start my react journey +++++++++++++++++++

Q- why React ?
Ans- Make easy to manage and build complex frontend.

or 

{
Component-Based Architecture – React allows developers to build reusable UI components, making development efficient and scalable.
Fast Rendering with Virtual DOM – React optimizes performance by updating only the necessary parts of the UI instead of reloading the entire page.
Strong Ecosystem & Community Support – With a vast library of tools, frameworks, and a large developer community, React makes development easier and more flexible.
Easy to Learn & SEO-Friendly – React has a simple learning curve compared to other frameworks and improves SEO performance    with server-side rendering (SSR) using Next.js.
}


Q- why react was created ?
Ans- 1. To resolve the Phantom Message Problem (Ghost Message Issue).
     2. To sync the relationship between the DOM and State (e.g., Facebook notification issue).
     3. To eliminate consistency and syncing problems in UI updates.


Q- React is framework or library?
Ans- React is a library, not a framework.
     why?
     1. Focuses only on UI – Doesn't provide built-in routing or state management.
     2. Lightweight & Flexible – Allows using external tools as needed.
     3. Unopinionated – No strict project structure like frameworks.
     4. Needs additional tools – For full functionality (e.g., React Router, Redux).


Q- Features & benefits of Reactjs?
Ans - Features & Benefits of React.js
      1. Component-Based Architecture – Enables reusability and modular development.
      2. Virtual DOM – Enhances performance by updating only necessary parts of the UI.
      3. Fast Rendering – Efficiently updates UI without reloading the whole page.
      4. Declarative Syntax – Makes UI development easier with JSX.
      5. SEO-Friendly – Improves search engine ranking with SSR (via Next.js).
      6. Strong Community Support – Large ecosystem with plenty of resources.
      7. Cross-Platform Development – Can be used for web (React.js) and mobile (React Native).
      8. Easy Integration – Works well with other libraries and frameworks.


Q- what problme solve next js which is not solved by reactjs?
Ans - 

Server-Side Rendering (SSR) – React only supports Client-Side Rendering (CSR), whereas Next.js improves performance and SEO with SSR.
Static Site Generation (SSG) – Next.js pre-renders pages at build time, making them faster and more efficient.
SEO Optimization – Next.js helps with better SEO by serving fully rendered pages to search engines.
File-Based Routing – Unlike React’s manual routing (React Router), Next.js provides an automatic file-based routing system.
API Routes – Next.js allows backend API development within the same project (/api folder), eliminating the need for a separate backend.
Performance Optimization – Features like image optimization (next/image), automatic code splitting, and lazy loading improve app speed.
Built-in Support for Internationalization (i18n) – Helps in managing multi-language applications easily.
In short: Next.js enhances React by solving performance, SEO, and routing issues while adding backend capabilities. 




++++++++++++++++++++++++++++ L4 ( Custom React ) +++++++++++++++++++++++++++++++++++++++++++++++++

Defination : Custom React refers to creating tailored components, hooks, or renderers to extend React’s functionality beyond its default behavior. It includes custom UI components, reusable hooks, or even a custom renderer for non-DOM environments like React Native or Three.js.


**********imp**********


const IsLoggedIn = "Wlecome to our website"

export default function App(){
  return (
    <h1>Hello Ankit! {IsLoggedIn}</h1>
  )
}

here {} is use to show final return result by {} // but here we can not use any js code.
{} -> know as evaluated expression
