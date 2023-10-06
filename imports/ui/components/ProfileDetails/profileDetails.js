import React from 'react'
import { studentCollection } from '../../../api/links';
import { useTracker } from 'meteor/react-meteor-data';
import { useFind } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

function profileDetails() {

  const li = useFind(() => studentCollection.find());
  const { loading, links } = useTracker(() => {
    const handle = Meteor.subscribe('sample.all');
    return {
      loading: !handle.ready(),
      links: studentCollection.find().fetch()
    };
  });

  // const user = useTracker(() => Meteor.user());
  const currentUser = useTracker(() => Meteor.user());

  if (loading) {
    console.log(loading);
    return <div>Loading data...</div>;
  }

  // const currentUser = useTracker(() => {
  //   return Meteor.user(); // Get the currently logged-in user (an object)
  // });
  const items = (item, index) => {
    console.log(index);
    const id = index; // Declare id as a constant
    return (
      <div key={id} style={{ width: "300px", backgroundColor: "lightblue", color: "white" }}>
        <p>{item._id}</p>
        <p>{item.email}</p>
      </div>
    );
  };

  return (
    <div>
      <div>
        {links.map(items)}
      </div>

      {/* <div>
        {currentUser ? (
          <div>
            <h1>Welcome, {currentUser.profile.name}!</h1>
            <p>Email: {currentUser.emails[0].address}</p>
           
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div> */}

      {/* <div>
        {currentUser ? (
          <div>
            <h1>Welcome, {currentUser.profile.name}!</h1>
            <p>Email: {currentUser.emails[0].address}</p>
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
      {localStorage.getItem('userValue')}
      {console.log(localStorage.getItem('userValue'))}
      {console.log(localStorage.getItem('loginUserValue'))}
      {/* {localStorage.removeItem('loginUserValue')} */}
      {/*     
      <div>
        <h2>User Profile</h2>
        {user ? (
          <div>
            <p>Email: {user.emails[0].address}</p>
            
          </div>
        ) : (
          <p>User not logged in</p>
        )}
      </div> */}
    </div>
  );
}

export default profileDetails;

