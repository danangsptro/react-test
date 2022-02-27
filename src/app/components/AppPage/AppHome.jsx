import React from "react";

function AppHome() {
  return (
    <div className="p-10 text-center">
      <div className="p-10 shadow-lg rounded-lg bg-green-100 text-gray-700 mt-10">
        <marquee behavior="" direction=""><i>Have a nice dream :)</i></marquee>
        <h2 className="font-semibold text-3xl mb-5">Welcome to Dashboard</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-6 border-gray-300" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
    </div>
  );
}

export default AppHome;
