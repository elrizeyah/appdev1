function Card({ children }) {
  return (
    <div className="card" style={{ border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '250px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff', }}>
      {children}
    </div>
  );
}

export default Card;
