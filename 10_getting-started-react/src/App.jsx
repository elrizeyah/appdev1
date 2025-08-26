import './App.css';

function App() {
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #ffffff, #e341ffff)',
      color: '#3a0a4d',
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
        Why I Want to Learn Git & GitHub?
      </h1>

      <p style={{ fontSize: '1.1rem' }}>
        As an aspiring professional in the field of Information Systems, I recognize the importance of mastering tools like Git and GitHub. Git allows for efficient version control, enabling me to track changes and avoid losing progress, while GitHub provides a collaborative platform to share my work and contribute to group projects.
      </p>

      <p style={{ fontSize: '1.1rem' }}>
        Gaining proficiency in these tools will strengthen my project management skills, enhance my ability to work in team environments, and prepare me for real-world software development workflows. Learning Git and GitHub is a key step in staying current and competitive in the ever-evolving tech industry.
      </p>
    </div>
  );
}

export default App;
