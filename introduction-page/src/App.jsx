import Header from './components/Header'
import Text from './components/Text'
import Page from './components/Page'
import FlexContainer from './components/FlexContainer'
import FlexItem from './components/FlexItem'
import SubHeader from './components/SubHeader'
import Content from './components/Content'
import LimitWidthDiv from './components/LimitWidthDiv'
import './App.css'

function App() {
  return (
    <>
      <Page>
        {/* NAME AND PHOTO */}
        <Content>
          <FlexContainer>
            <FlexItem className='flex flex-col justify-center md:text-right'>
                <Header>Nicholas Howell</Header>
                <SubHeader>Full Stack Developer</SubHeader>
            </FlexItem>
            <FlexItem className='overflow-hidden'>
              <img src='./me.jpg' alt='Picture of me' className='mt-8 mx-auto rounded-4xl max-w-2xs md:mx-0 md:mt-0 shadow-xl'/>
            </FlexItem>
          </FlexContainer>
        </Content>
        {/* BIO */}
        <Content transparent={false}>
          <LimitWidthDiv>
            <FlexContainer>
              <FlexItem>
                <Text className='text-left max-w-[433px] mx-auto'>
                  Hello, I am Nicholas Howell. I'm an ATU graduate with a Bachelor's of Art in Interactive Media and Game Design, and am about to graduate with a Bachelor's of Science in Computer Science.
                </Text>
              </FlexItem>
              <FlexItem className='hidden md:flex md:flex-col md:justify-center'>
                <Header>Bio</Header>
              </FlexItem>
            </FlexContainer>
          </LimitWidthDiv>
        </Content>
        {/* EDUCATION */}
        <Content>
          <LimitWidthDiv>
            <FlexContainer>
              <FlexItem className="flex flex-col justify-center">
                <Header>Education</Header>
              </FlexItem>
              <FlexItem>
                <ul className='mt-8 text-left list-disc text-white max-w-[433px] mx-auto md:mt-0'>
                  <li><Text>Bachelor's in Computer Science</Text></li>
                  <li><Text>Bachelor's in Interactive Media and Game Design</Text></li>
                  <li><Text>Morrilton High School Graduate</Text></li>
                </ul>
              </FlexItem>
            </FlexContainer>
          </LimitWidthDiv>
        </Content>
        {/* CONTACT */}
        <Content transparent={false} className='pt-auto h-full'>
          <Header>Contact:</Header>
          <div className='mt-8 flex flex-row justify-center gap-8 md:mt-8'>
            <a href='tel:+5555555555'><Text>(555) 555-5555</Text></a>
            <Text>&bull;</Text>
            <a href='mailto:nhowell3@atu.edu'><Text>nhowell3@atu.edu</Text></a>
          </div>
        </Content>
      </Page>
    </>
  )
}

export default App
