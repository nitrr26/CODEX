import React from 'react';

const Guidence = () => {
  return (
    <>
      <div>
        <h1 className='gh'>Guidlines</h1><br />
        <div>
          {/* <h1>How It Works</h1> */}
          <ul className='list'>
            <li>Know Your Needs</li>
            <p>
              Answer a few quick questions and get a mentor recommendation right away.
            </p>
            <li>Get Matched</li>
            <p>
              Choose the recommended mentor or talk to a matching expert who will connect you with the right mentor based on your needs.
            </p>
            <li>Schedule A Session</li>
            <p>
              Choose a convenient time slot and get an appointment with your mentor.
            </p>

            <li>Get Therapy</li>
            <p>At the scheduled time, join the session with your mentor using the mobile application or web browser.</p>

            <li>Regular Messages</li>
            <p>In addition to the scheduled video sessions, you can reach out to your mentor via voice messages or chat. The mentor will respond 1-2 times a day, based on availability.</p>
            <li>Continuous Support</li>
            <p>You have the flexibility to reschedule sessions or change the counsellor at any point. For any issues or support, Felicity helpdesk has you covered.</p>

            <li>choose your current situation</li>
            <p>Decide on the number of sessions you would like to opt for.</p>
          </ul>
        </div>
        <button className='btn2'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/moc";
          }}
        >
          {" "}
          Stess</button>
        <button className='btn2'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/moc";
          }}
        >
          {" "}Anxiety</button>
        <button className='btn2'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/moc";
          }}
        >
          {" "}Anger</button>
        <button className='btn2'
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/moc";
          }}
        >
          {" "}Grif</button>
        <button className='btn2' type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/moc";
          }}
        >
          {" "}
          Dpression</button>
      </div>
    </>
  );
}

export default Guidence;
