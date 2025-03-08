import Header from './components/Header'
import Text from './components/Text'
import Page from './components/Page'
import './App.css'

function App() {
  return (
    <>
      <Page>
        <Header>Nicholas Howell</Header>
        <img src='./me.jpg' alt='Picture of me' className='mx-auto rounded-2xl w-[50%]'/>
        <Text>
          I'm an ATU student about to graduate with a Bachelor's in Computer Science.
          (maybe put something here that makes more sense assuming I'm sending this out to get a job)
        </Text>
        <br></br>
        <Header>Contact:</Header>
        <div className='flex flex-row justify-center gap-8'>
          <a href='tel:+5555555555'><Text>(555) 555-5555</Text></a>
          <a href='mailto:nhowell3@atu.edu'><Text>nhowell3@atu.edu</Text></a>
        </div>
        <br></br>
        <Header>Education:</Header>
        <ul>
          <li><Text>Bachelor's in Computer Science</Text></li>
          <li><Text>Bachelor's in Interactive Media and Game Design</Text></li>
          <li><Text>Morrilton High School Graduate</Text></li>
        </ul>
      </Page>
    </>
  )
}

export default App
