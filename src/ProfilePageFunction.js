import React, { useEffect, useState } from 'react';

function ProfilePage(props) {
	const [state, setState] = useState(props.user);

	useEffect(()=>{
		setState("HyunWoo")
		console.log(state)
	}, [state])

  const showMessage = () => {
		alert('Followed ' + props.user);
	};

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

export default ProfilePage;
