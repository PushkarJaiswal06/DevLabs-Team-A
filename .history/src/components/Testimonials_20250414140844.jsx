import React from 'react';

const testimonials = [
  {
    name: "Anushka Singh",
    rating: 5,
    title: "Highly Engaging and Practical!",
    text: "Unlike other workshops, this one focused on practical application. We got to build real apps instead of just learning theory. A fantastic experience that I'd recommend to all tech enthusiasts!",
    date: "03/04/25"
  },
  {
    name: "Ananya",
    rating: 5,
    title: "Incredibly Insightful Workshop!",
    text: "Native Nexus was an eye-opener! The hands-on sessions helped me grasp React-Na",
    date: "03/04/25"
  },
  {
    name: "Devdutt",
    rating: 5,
    title: "Best Learning Experience!",
    text: "This workshop gave me a strong foundation in React Native. The interactive approach, real-world examples, and coding challenges made learning fun. I now feel confident to build my own apps!",
    date: "03/04/25"
  }
];

export default function Testimonial() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ color: "#fff", fontSize: "30px", textAlign: "center", marginBottom: "30px" }}>What Our Students Say</h2>
      
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {testimonials.map((t, index) => (
          <div
          key={index}
          style={{
            backgroundColor: "#111",
            color: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "300px",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
        
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#e1ff01",
                marginRight: "10px"
              }}></div>
              <div>
                <strong>{t.name}</strong><br />
                <small>{t.date}</small>
              </div>
            </div>

            <div>{'⭐'.repeat(t.rating)}</div>

            <p style={{ fontWeight: "bold", marginTop: "10px" }}>{`"${t.title}"`}</p>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
