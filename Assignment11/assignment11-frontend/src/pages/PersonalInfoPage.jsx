import axios from 'axios'
import { useEffect, useState } from "react";
import DataCard from '../components/DataCard';
import GenericPage from '../components/GenericPage';

export default function PersonalInfoPage({}){
    const [personalInfo, setPersonalInfo] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:3000/personal").then((response) => {
        setPersonalInfo(response.data);
      });
    }, [])

    return (
        <GenericPage>
            <h1>Personal Information</h1>
            <br/>
            <DataCard data={personalInfo}/>
        </GenericPage>
    );
}