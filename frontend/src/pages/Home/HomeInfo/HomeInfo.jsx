import React from 'react';

const chooseData = [
  {
    id: 1,
    icon: "1",
    name: "one",
    desc: ""
  },
  {
    id: 2,
    icon: "2",
    name: "two",
    desc: ""
  },
  {
    id: 3,
    icon: "3",
    name: "three",
    desc: ""
  },
  {
    id: 4,
    icon: "4",
    name: "four",
    desc: ""
  },
];

const HomeInfo = () => {
  const names = chooseData.map((item) => item.name);

  return (
    <div>
      <div className="head">
        <h1>Best Products</h1>
        <h1>Why choose us</h1>
        <hr />
      </div>
      <div className="contents">
        {names.map((name, id) => (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInfo;
