import HorizontalRule from "./HorizontalRule";
import "./App.css";
import RedButton from "./RedButton";
import ContactCard from "./ContactCard";
import ShoppingCart from "./ShoppingCart";
import Avatar from "./Avatar";
import FriendList from "./FriendList";
import Grid from "./Grid";
import Counter from "./Counter";
import Form from "./Form";
import ContactForm from "./ContactForm";
import SearchForm from "./SearchForm";
import BigCoin from "./BigCoin";
import React from 'react';
import GuestList from "./GuestList";
const cartItems= [
  {
    id: 'hk123',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
    imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
    title: '“Hello Kitty” Coffee Machine',
    price: '89.99',
    inStock: true,
  },
  {
    id: 'co999',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
    imageAlt: 'A black can opener',
    title: 'Safety Can Opener',
    price: '19.95',
    inStock: false,
  },
  {
    id: 'cnl333',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
    imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
    title: 'Astro-pup Night Light',
    price: '130.00',
    inStock: true,
  },
  {
    id: 'scb777',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
    imageAlt: 'A pink backpack with a unicorn illustration',
    title: 'Magical Unicorn Backpack',
    price: '74.98',
    inStock: true,
  },
];

const avatarData = [
  {
    id: "001",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];
const data = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

function App() {
    const [numOfCoins, setNumOfCoins] = React.useState(0);
    const [guestList,setGuestList]=React.useState([])
     function addNewGuest(label) {
    const newGuest = {
      id: Math.random(),
      label,
    };

    const nextGuests = [...guestList, newGuest];
    setGuestList(nextGuests);
  }
   function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`);
  }
  
      let instockItems=cartItems.filter((item)=>item.inStock)
    let outStockItems=cartItems.filter((item)=>!item.inStock)
  return (
    <>
      <p>Section One</p>
      <HorizontalRule size={250} />
      <p>Section Two</p>
      <HorizontalRule />
      <RedButton>Click Me -this text is called children</RedButton>
      <RedButton color="red" borderColor="red">
        Cancel
      </RedButton>
      <RedButton color="blue" borderColor="blue">
        Confirm
      </RedButton>
      <ul>
        <ContactCard
          name="Henderson G. Sterling II"
          email="abc@gmail.com"
          jobTitle="Doctor"
        />
        {data.map((card,index) => {
          return (
            <ContactCard
            key={index}
              name={card.name}
              email={card.email}
              jobTitle={card.job}
            />
          );
        })}
      </ul>
      {avatarData.map((item) => {
        return (
          <Avatar
            key={item.id}
            src={`https://sandpack-bundler.vercel.app/img/avatars/${item.id}.png`}
            alt={item.alt}
          />
        );
      })}

      <h2>Shopping cart</h2>
      <ShoppingCart items={instockItems}/>
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
            <ShoppingCart items={outStockItems}/>


            <h1>solving Accessibility issue</h1>
           <FriendList name="Andrew" isOnline={false} />
                <FriendList name="nicole" isOnline={true}/>
                     <FriendList name="rulph" isOnline={true}/>
                          <FriendList name="shruti" isOnline={false}  />



                          ------------------------------------

                           <Grid
      numRows={3}
      numCols={6}
    />

    -----------------------------

    <Counter />
    ............................................................
    <Form/>
    ................................................................................
    <ContactForm/>
    ..........................................................
     <SearchForm runSearch={runSearch} />
       <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins}/>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
      ------------------------------------------------------------------------------------------------
      <ol>
        {guestList.map((guest) => (
          <li key={guest.id}>{guest.label}</li>
        ))}
      </ol>
    
  <GuestList addNewGuest={addNewGuest} />
   
    </>
  );
}

export default App;
