import axios from 'axios'
import { useEffect, useState } from "react";
import DataCard from '../components/DataCard';
import GenericPage from '../components/GenericPage';

export default function HobbiesPage({}){
    const [hobbies, setHobbies] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:3000/hobbies").then((response) => {
        setHobbies(response.data);
      });
    }, [])

    return (
        <GenericPage>
            <h1>Hobbies</h1>
            <br/>
            <DataCard data={hobbies}/>
        </GenericPage>
    );
}