import React from 'react';
import {
  CalendarDays, Clock, MapPin, UsersRound, Eye, Tags
} from 'lucide-react';

function Hero() {
  const events = [
    {
      title: "Annual Tech Fest 2025",
      description: "Join us for the biggest tech event of the year featuring hackathons, workshops, and guest speakers from top tech companies.",
      date: "Saturday, March 15, 2025",
      time: "09:00",
      location: "Main Auditorium",
      attendees: 234,
      targetYears: ["2nd Year", "3rd Year", "4th Year"],
      departments: ["CS", "ECE", "IT"],
      category: "Technical",
      organizer: "Tech Club",
      status: "Past Event"
    },
    {
      title: "Machine Learning Workshop",
      description: "Hands-on workshop covering the fundamentals of machine learning and practical applications.",
      date: "Saturday, January 25, 2025",
      time: "14:00",
      location: "Lab 205",
      attendees: 45,
      targetYears: ["3rd Year", "4th Year"],
      departments: ["CS", "IT"],
      category: "Academic",
      organizer: "CS Department",
      status: "Past Event"
    },
    {
      title: "Cultural Night 2025",
      description: "Celebrate diversity with performances, food, and cultural exhibitions from around the world.",
      date: "Friday, February 14, 2025",
      time: "18:00",
      location: "Student Center",
      attendees: 190,
      targetYears: ["Open to All Students"],
      departments: [],
      category: "Cultural",
      organizer: "Cultural Committee",
      status: "Past Event"
    },
    {
      title: "Inter-College Football Championship",
      description: "Compete in the annual football tournament with colleges from across the region.",
      date: "Friday, February 28, 2025",
      time: "10:00",
      location: "Sports Complex",
      attendees: 89,
      targetYears: ["Open to All Students"],
      departments: [],
      category: "Sports",
      organizer: "Sports Committee",
      status: "Past Event"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {events.map((event, index) => (
          <div className="col-md-6" key={index}>
            <div className="border rounded-4 p-3 h-100 shadow-sm position-relative">
              
              {/* Category Badge */}
              <span className="badge bg-light text-dark position-absolute top-0 end-0 mt-3 me-3 px-3 py-1 text-capitalize">
                {event.category}
              </span>

              {/* Event Info */}
              <h5 className="fw-bold">{event.title}</h5>
              <p className="text-secondary">{event.description}</p>

              <div className="d-flex flex-column gap-2 text-secondary mb-2">
                <div><CalendarDays size={16} className="me-2" /> {event.date}</div>
                <div><Clock size={16} className="me-2" /> {event.time}</div>
                <div><MapPin size={16} className="me-2" /> {event.location}</div>
                <div><UsersRound size={16} className="me-2" /> {event.attendees} attending</div>
              </div>

              <div className="mb-3">
                <div className="mb-1">
                  <Eye size={16} className="me-1 text-muted" />
                  <span className="fw-semibold">Target Years:</span>{" "}
                  {event.targetYears.map((year, i) => (
                    <span key={i} className="badge bg-primary-subtle text-primary me-2">{year}</span>
                  ))}
                </div>
                {event.departments.length > 0 && (
                  <div>
                    <Tags size={16} className="me-1 text-muted" />
                    <span className="fw-semibold">Departments:</span>{" "}
                    {event.departments.map((dept, i) => (
                      <span key={i} className="badge bg-success-subtle text-success me-2">{dept}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Line + Organized by */}
              <hr className="my-3" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="small text-muted">
                  <span className="d-block">Organized by</span>
                  <strong>{event.organizer}</strong>
                </div>
                <button className="btn btn-light border">{event.status}</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
