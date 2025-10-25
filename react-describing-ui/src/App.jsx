// How to write your first React component

// function Profile() {
//   return <img src="https://i.imgur.com/MK3eW3As.jpg"
//   alt="Katherine Johnson" />;
// }

// export default function Gallery() {
//   return (
//     <>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       {/* <Profile> */}
//     </>
//   );
// }

// When and how to create multi-component files

// import Profile from './components/Profile.jsx';

// export default function Gallery() {
//   return (
//     <>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </>
//   );
// }

// How to add markup to JavaScript with JSX

// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

// How to use curly braces with JSX to access JavaScript functionality from your components

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
