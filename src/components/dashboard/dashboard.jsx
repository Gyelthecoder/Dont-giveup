import React from 'react';
import BookingForm from './bookingForm';

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      {/* Display user-specific dashboard content */}
      <BookingForm />
      {/* You can add more components or content specific to the user's dashboard */}
    </div>
  );
};

export default Dashboard;
