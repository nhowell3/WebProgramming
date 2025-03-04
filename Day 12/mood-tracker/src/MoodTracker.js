import {useState} from 'react';
import MoodButton from './MoodButton';
import { RelaxedStyle, GoofyStyle, ColdStyle, TiredStyle } from './MoodStyles';
import './MoodTracker.css'

export default function MoodTracker() {
    const moods = [
        {
            emoji: "😎",
            description: "Everything is goin good",
            image: '/Relaxed.gif',
            memory: "I remember last week getting all my assignments done early and getting to relax most of the week.",
            name: "Relaxed",
            style: RelaxedStyle
        },
        {
            emoji: "🤪",
            description: "This emoji is a pretty accurate depiction of when I'm with friends.",
            image: '/Goofy.gif',
            memory: "I remember one of my teachers in high school being annoyed cause I never talk, and another one being annoyed cause I wouldn't shut up. The difference was the people in the class.",
            name: "Goofy",
            style: GoofyStyle
        },
        {
            emoji: "🥶",
            description: "Me no like cold. Avoid this at all cost.",
            image: '/Cold.gif',
            memory: "I remember taking out the trash mid winter with super strong winds and wanting to die.",
            name: "Cold",
            style: ColdStyle
        },
        {
            emoji: "🥱",
            description: "I need a nap.",
            image: '/Tired.gif',
            memory: "The memory here is just my life. zzzzzzzzzzzzzzzzzzzzzz",
            name: "Tired",
            style: TiredStyle
        }
    ]

    const [currentMood, setCurrentMood] = useState(moods[0]);

    return (
        <div className='container' style={{background: currentMood.style.background}}>
            <div className='content'>
                <h1 className='header' style={{fontFamily: currentMood.style.font, color: currentMood.style.color}}>Mood Tracker</h1>
                <p className='text' style={{fontFamily: currentMood.style.font, color: currentMood.style.color}}>Current Mood: {currentMood.name}</p>
                <div className='button-container'>
                    {
                        moods.map((mood,index) => (
                            <MoodButton
                                key={index}
                                mood={mood}
                                setCurrentMood={setCurrentMood}
                            />
                        ))
                    }
                </div>
                <img className='image' src={currentMood.image} />
                <div className='memory-container'>
                    <p className='text' style={{fontFamily: currentMood.style.font, color: currentMood.style.color}}>Memory: {currentMood.memory}</p>
                </div>
            </div>
        </div>
    );

}