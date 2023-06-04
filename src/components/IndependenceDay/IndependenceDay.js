import React, { useState, useEffect } from 'react';

const IndependenceDay = () => {
  const [IndependenceDay, setIndependenceDay] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const independenceDay = new Date('1776-07-04');
    const timeDiff = Math.abs(currentDate.getTime() - independenceDay.getTime());
    const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    setIndependenceDay(yearsDiff);
  }, []);

  return (
    <span>{IndependenceDay}
    </span>
  );
};

export default IndependenceDay;