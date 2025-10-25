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

export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}
