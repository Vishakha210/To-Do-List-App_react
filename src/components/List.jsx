import React from "react";

function List(props) {
  return (
    <>
      <ul>
        {props.array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default List;

// function List(props) {
//     function add(eachItem) {
//       return <li>{eachItem}</li>;
//     }
//     return (
//       <>
//         <ul>{props.array.map(add)}</ul>
//       </>
//     );
//   }
//   export default List;
