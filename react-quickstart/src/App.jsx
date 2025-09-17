import MyButton from './MyButton';
import './App.css';

// // 1. Creating and Nesting Components
// function MyButton() {
//   return (
//   <button>I'm a button</button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );

// }

// 2. Writing markup with JSX

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <AboutPage/>
//     </>
//   );
// }

// 3. Adding styles

// function App() {
//   return (
//     <div>
//       <img
//         className="avatar"
//         src="/avatar.png"
//         alt="Avatar" //shows only when the image cannot be loaded
//       />
//     </div>
//   );
// }

// 4. Displaying Data

// function App() {
//   return (
//     <div>
//       <img className="avatar"
//       src="/avatar.png"
//       alt="Avatar"
//       />
//     </div>
//     );
//   }

// 5. Conditional Rendering


//   export default function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// 6. Rendering Lists

// export default function App() {
//   return (
//     <div>
//       <h1>My Shopping List</h1>
//       <ShoppingList /> {/* Use the component here */}
//     </div>
//   );
// }

// 7. Responding To Events
// 8. Updating The Screen / Using Hooks

// App.jsx

export default function App() {
  return (
    <div>
      <h1>Counters that update separately</h1>

      {/* Each of these buttons tracks its own state */}
      <MyButton />
      <MyButton />
    </div>
  );
}