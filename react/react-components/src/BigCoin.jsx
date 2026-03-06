


function BigCoin({numOfCoins,setNumOfCoins}) {

  
  return (
    <div className="coin-wrapper">
      <button
        className="coin"
        onClick={() => setNumOfCoins(numOfCoins + 2)}
      >
        <span className="visually-hidden">
          Add 2 coins
        </span>
        
      </button>
    </div>
  );
}

export default BigCoin;