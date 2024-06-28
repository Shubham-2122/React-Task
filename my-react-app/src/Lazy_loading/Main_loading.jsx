// In simple terms, lazy loading is a design pattern. It allows you to load parts of your 
// application on-demand to reduce the initial load time. For example, you can initially load 
// the components and modules related to user login and registration. Then, you can load the 
// rest of the components based on user navigation.

// You might not feel much difference when using lazy loading for small-scale applications. 
// But it significantly impacts large-scale applications by reducing the initial load time.
//  Ultimately, it improves both the user experience and the application’s performance.

// Advantages of Lazy Loading

// Reduces initial loading time by reducing the bundle size.
// Reduces browser workload.
// Improves application performance in low bandwidth situations.
// Improves user experience at initial loading.
// Optimizes resource usage.

// Disadvantages of Lazy Loading

// Not suitable for small-scale applications.
// Placeholders can slow down quick scrolling.
// Requires additional communication with the server to fetch resources.
// Can affect SEO and ranking

// npm i axios :- install frist then loading data from api
import React, { Suspense, lazy } from 'react'
import Hello from './Hello'

// const Moraining = lazy(() => 
// {
//     return new Promise(resolve => setTimeout(resolve, 1000)).then(
//       () => import("./Mornig")
//     );
//   }
// )

// const Moraining = lazy(() => import("./Mornig"))

const Moraining = lazy(() => {
    return new Promise(resolve => setTimeout(resolve,2000)).then(
        ()=> import("./Mornig")
    )
} )

function Main_loading() {
  return (
    <div>
        <h1>Hi i am Main Component</h1>
        
        <Suspense fallback={<Hello />} >
            <Moraining />
        </Suspense>
    </div>
  );
}



export default Main_loading
