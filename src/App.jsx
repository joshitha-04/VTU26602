import {useEffect,useState} from "react";
import {getNotifications} from "./services/api";
import { Log } from "./services/logger";
function App(){
  const[notifications,setNotifications]=useState([]);
  const [filter,setFilter]=useState("All");
  const [viewed, setViewed] = useState([]);
  const [page,setPage]=useState(1);
  const limit=10;
  const getPriority=(type)=>{
    if(type ==="Placement") return 3;
    if(type ==="Result") return 2;
    return 1;
  }
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const data=await getNotifications(page,
  limit,
  filter === "All" ? "" : filter);
        await Log(
      "frontend",
      "info",
      "component",
      "Notifications fetched successfully"
    );
          console.log("Page:", page);
  console.log("Filter:", filter);
  console.log("Notifications:", data.notifications);
        const sortedNotifications=data.notifications.sort((a,b)=>{
          const priorityDiff= getPriority(b.Type)-getPriority(a.Type);
          if(priorityDiff!==0){
            return priorityDiff;
          }
          return (
            new Date(b.Timestamp)-new Date(a.Timestamp)
          );
        });
       setNotifications(sortedNotifications);
      }catch(error){
        console.error(error);
      await Log(
        "frontend",
      "error",
      "component",
      "Fetch failed"
    );
  }
};
    fetchData();
  }, [page, filter]);
  const filteredNotifications =
  filter === "All"
    ? notifications
    : notifications.filter(
        (item) => item.Type === filter
      );
 const markAsViewed = async (id) => {
  if (!viewed.includes(id)) {
    setViewed((prev) => [...prev, id]);

    await Log(
      "frontend",
      "info",
      "component",
      "Notification viewed"
    );
  }
};
  return (

    <div style={{maxWidth:"900px",margin:"auto",textAlign:"center",padding:"20px"}}>
      <h1>Campus Notifications</h1>
      <select value={filter} onChange={(e)=>{setFilter(e.target.value);setPage(1);}}
        style={{padding:"8px",marginBottom:"20px"}}>
        <option value="All">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
        </select>
      {filteredNotifications.map((item)=>(
        <div key={item.ID}
        onClick={()=>markAsViewed(item.ID)}
        style={{
          backgroundColor:viewed.includes(item.ID)?"#f0f0f0":"#fff",
          padding:"10px",
          margin:"10px 0",
          border:"1px solid #ccc",
          borderRadius:"5px",
          cursor:"pointer",
        }}>
        <h3>{item.Type}</h3>
        <p>{item.Message}</p>
        <small>{item.Timestamp}</small>
        <p style={{fontWeight:"bold",marginTop:"10px"}}>
          {viewed.includes(item.ID)?"Viewed":"New"}
          </p>
        <hr />
        </div>))}
     <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            setPage(page > 1 ? page - 1 : 1)
          }
        >
          Previous
        </button>

        <span
          style={{
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Page {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;