import React, { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(null);

  const getTime = () => {
    let myTime = new Date().getTime(); // get your number
    let myDate = new Date(myTime); // create Date object
    myDate = myDate.toTimeString().split(' ')[0]; // take only the time
    let hour = myDate.substring(0, 2); // get hours
    const pm = [
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
    ];
    let minsAndSecs = myDate.substring(myDate.length - 6); // get rest of time
    if (pm.includes(hour)) {
      let newHour = (parseInt(hour, 10) - 12).toString(); // convert base-12 hours
      let newDate = `${newHour + minsAndSecs} pm`; // make new time
      setTime(newDate); // set new time state
    } else if (myDate.substring(0, 2) === '00') {
      let newDate = `12${minsAndSecs} am`;
      setTime(newDate);
    } else if (myDate.substring(0, 1) === '0') {
      myDate = `${myDate.substring(1, myDate.length)} am`;
      setTime(myDate);
    } else {
      myDate = `${myDate} am`;
      setTime(myDate); // set time state
    }
    setTimeout(getTime, 1000);
  };

  useEffect(() => {
    getTime();
  });

  return (
    <div>
      <h3 style={{ color: 'blue' }}>{time}</h3>
    </div>
  );
};

export default Time;
