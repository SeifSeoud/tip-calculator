import { useState } from "react";

const options = [
  {
    option: "Dissatisfied (0%)",
    val: 0,
    isSelected: true,
  },
  { option: "It was okay (5%)", val: 0.05, isSelected: false },
  { option: "It was good (10%)", val: 0.1, isSelected: false },
  { option: "Absoluttely amazing (20%)", val: 0.2, isSelected: false },
];
function App() {
  const [sumMe, setSumMe] = useState([0]);
  const [sumFriend, setSumFriend] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);
  const handleOptionFriendChange = (selectedVal) => {
    setSumFriend(selectedVal);
  };
  const handleOptionMeChange = (selectedVal) => {
    setSumMe(selectedVal);
  };
  const handleInputChange = (event) => {
    // Parse the input value to a number and update the sumTotal state
    setSumTotal(parseFloat(event.target.value));
  };

  return (
    <div className="App">
      <Price handleInputChange={handleInputChange} sumTotal={sumTotal} />
      <MyOpinion
        optis={options}
        handleOptionChange={handleOptionFriendChange}
      />
      <FriendOpinion
        optis={options}
        handleOptionChange={handleOptionMeChange}
      />
      <Output
        sumMe={Math.round(sumMe * 100)}
        sumFriend={Math.round(sumFriend * 100)}
        sumTotal={sumTotal}
      />
    </div>
  );
}

function Price({ handleInputChange, sumTotal }) {
  return (
    <div>
      How Much was The bill ?
      <input
        type="text"
        value={sumTotal || ""}
        placeholder="Enter text here"
        onChange={handleInputChange}
      />
    </div>
  );
}
function MyOpinion({ optis, handleOptionChange }) {
  const handleChange = (event) => {
    const selectedVal = Number(event.target.value);
    handleOptionChange(selectedVal);
  };
  return (
    <div>
      How did you like the Service ?
      <select id="serviceRating" className="input-box" onChange={handleChange}>
        {optis.map((optio, index) => (
          <option key={index} value={optio.val}>
            {`${optio.option}`}
          </option>
        ))}
      </select>
    </div>
  );
}
function FriendOpinion({ optis, handleOptionChange }) {
  const handleChange = (event) => {
    const selectedVal = Number(event.target.value);
    handleOptionChange(selectedVal);
  };
  return (
    <div>
      How did your friend like the Service ?
      <select id="serviceRating" className="input-box" onChange={handleChange}>
        {/* <option value="">Select an option</option> */}
        {optis.map((optio, index) => (
          <option key={index} value={optio.val}>
            {`${optio.option}`}
          </option>
        ))}
      </select>
    </div>
  );
}
function Output({ sumMe, sumFriend, sumTotal }) {
  return (
    <div>
      <h2>{`You Paid $ ${sumMe + sumFriend + sumTotal} (${sumTotal} + ${
        sumMe + sumFriend
      } tip)`}</h2>
    </div>
  );
}

export default App;
