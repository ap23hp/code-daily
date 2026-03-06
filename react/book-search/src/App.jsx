import React from "react";

import TextInput from "./TextInput.jsx";
import SearchResult from "./SearchResults";

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request,
  with a query parameter of `searchTerm`.
  Eg. `/api/book-search?searchTerm=winter`
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
  
  To test the results, here are some suggested
  search terms:
  
    • `fifth` — 1 result
    • `a` — 18 results
    • `becky` — 4 results
    • `hello` — 0 results
*/

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(null);
  //idle,loading,success,error,empty
  const [status, setStatus] = React.useState("idle");
  const url = `${ENDPOINT}?searchTerm=${searchTerm}`;
  async function handleSearch(event) {
    event.preventDefault();
    setStatus("loading");
    const response = await fetch(url);
    const json = await response.json();
    if (json.ok) {
      setSearchResults(json.results);
      if (json.results.length > 0) {
        setStatus("success");
      } else {
        setStatus("empty");
      }
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
          <TextInput
            required={true}
            label="Search"
            placeholder="The Fifth Season"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Go!</button>
        </form>
      </header>

      <main>
        {status === "loading" && <p>Searching...</p>}
        {status === "idle" && <p>Welcome to book search!</p>}
        {status === "error" && <p>Something went wrong!</p>}
        {status === "empty" && <p>No results</p>}
        {status === "success" && (
          <div className="search-results">
            <h2>Search Results:</h2>
            {searchResults?.map((results) => {
              return <SearchResult key={results.isbn} result={results} />;
            })}
          </div>
        )}
      </main>
    </>
  );
}

const EXAMPLE = {
  isbn: "9781473621442",
  name: "A Closed and Common Orbit",
  author: "Becky Chambers",
  coverSrc:
    "https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg",
  abstract:
    "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
};

export default App;
