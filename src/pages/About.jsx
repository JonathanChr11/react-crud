import axios from "axios";
import { useEffect, useState } from "react";
import AboutCard from "../components/AboutCard";
import SearchAbout from "../components/SearchAbout";

const About = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [about, setabout] = useState([]);
  
    useEffect(() => {
      const fetchabout = async () => {
        const res = await axios.get("http://localhost:4000/about");
        setabout(res.data);
      };
      fetchabout();
    }, []);
  
    const renderAbout = () => {
      let AboutList = about;
      if (searchQuery) {
        AboutList = AboutList.filter(({ title }) =>
          title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
  
      return AboutList.map(({ title, detail, id }) => {
        return <AboutCard title={title} detail={detail} id={id} key={id} />;
      });
    };
  
    return (
      <>
        <SearchAbout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="list">{renderAbout()}</div>
      </>
    );
};
export default About;
