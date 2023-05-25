import React, { useEffect, useState } from "react";
import axios from "axios";
// import BackgroundAnimation from "../BackgroundAnimation";
import DashboardStats from "../components/Dashboard";
import NavBar from "../components/Navbar";

const Dashboard = () => {
  const [urlsPerDay, setUrlsPerDay] = useState(0);
  const [urlsPerMonth, setUrlsPerMonth] = useState(0);

  useEffect(() => {
    // Fetch data from the server to get the counts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/urls");
        const urls = response.data;

        // Calculate the counts
        const urlsCreatedPerDay = calculateUrlsCreatedPerDay(urls);
        const urlsCreatedPerMonth = calculateUrlsCreatedPerMonth(urls);

        // Set the state with the counts
        setUrlsPerDay(urlsCreatedPerDay);
        setUrlsPerMonth(urlsCreatedPerMonth);
      } catch (error) {
        console.error("Error fetching URL data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateUrlsCreatedPerDay = (urls) => {
    
    const today = new Date().toISOString().split("T")[0];
    const urlsCreatedToday = urls.filter((url) => url.createdAt.startsWith(today));

    return urlsCreatedToday.length;
  };

  const calculateUrlsCreatedPerMonth = (urls) => {
 
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 

    const urlsCreatedThisMonth = urls.filter((url) => {
      const createdAt = new Date(url.createdAt);
      const year = createdAt.getFullYear();
      const month = createdAt.getMonth() + 1; 

      return year === currentYear && month === currentMonth;
    });

    return urlsCreatedThisMonth.length;
  };

  return (
    <div>
        <NavBar/>
    <div className="mt-5">
      <h2 className="text-center">URLs Created</h2>
      {/* <BackgroundAnimation /> */}
      <DashboardStats urlsPerDay={urlsPerDay} urlsPerMonth={urlsPerMonth} />
    </div>
    </div>
  );
};

export default Dashboard;
