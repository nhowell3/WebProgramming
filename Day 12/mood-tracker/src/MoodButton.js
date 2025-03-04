import './MoodButton.css'

export default function MoodButton({mood, setCurrentMood}) {
    return (
        <button onClick={() => setCurrentMood(mood)} className='button'>
            {mood.name}
        </button>
    );
}