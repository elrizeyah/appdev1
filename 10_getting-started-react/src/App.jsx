import './App.css';

function App() {
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #ffffff, #e341ffff)',
      color: '#37064bff',
      padding: '50px',
      borderRadius: '16px',
      maxWidth: '900px',
      margin: '60px auto',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      lineHeight: '1.8',
      transition: '0.3s ease',
    }}>

      <h1 style={{
        fontFamily: "'Brush Script MT', cursive",
        color: '#9c27b0',
        fontSize: '3.5rem',  // bigger
        fontWeight: '700',   // bolder
        marginBottom: '30px',
        textShadow: '1.5px 1.5px 5px rgba(156, 39, 176, 0.3)'
      }}>
        About Me
      </h1>

      <p style={{ fontSize: '1.1rem', textAlign: 'left' }}>
        <strong>Name:</strong> Ellissea Montes<br />
        <strong>Course/Year:</strong> BS Information Systems – 3rd Year, Section A<br />
        <strong>Fun Fact:</strong> If we share hobbies, chances are we’ll get along fast — no awkward intros needed.
      </p>

      <hr style={{
        margin: '40px 0',
        border: 'none',
        borderTop: '2px dashed #6f0083ff'
      }} />

      <h1 style={{
        fontFamily: "'Brush Script MT', cursive",
        color: '#8e24aa',
        fontSize: '3rem',  // bigger
        fontWeight: '700', // bolder
        marginBottom: '20px',
        textAlign: 'center',
        textShadow: '1.5px 1.5px 5px rgba(142, 36, 170, 0.3)'
      }}>
        Why I Want to Learn React?
      </h1>

      <p style={{ fontSize: '1.1rem' }}>
        I want to learn React because it is a modern and in demand technology, widely used in both web and mobile development. Gaining knowledge in React will help me strengthen my skills, and prepare me to work on more advanced projects. I see it as an essential step in keeping up with the evolving trends in the tech industry.
      </p>

      <p style={{ fontSize: '1.1rem' }}>
        Although I am still in the process of learning, I am determined to improve and grow my expertise. Mastering React will not only allow me to apply it effectively in future work but also help me maintain professionalism by continuously developing my abilities. I believe that investing time and effort into learning this framework will give me an advantage in my career journey.
      </p>
    </div>
  );
}

export default App;
