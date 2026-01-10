
import HorizontalRule from './HorizontalRule'
import './App.css'
import RedButton from './RedButton'
import ContactCard from './ContactCard'
function App() {


  return (
    <>
      <p>Section One</p>
      <HorizontalRule size={250}/>
      <p>Section Two</p>
   <HorizontalRule />
   <RedButton>Click Me -this text is called children</RedButton>
<ul>
   <ContactCard name="Henderson G. Sterling II" email="abc@gmail.com" jobTitle="Doctor"/>
    </ul></>
  )
}

export default App
