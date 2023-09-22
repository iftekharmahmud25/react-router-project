import { Link } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
          
            <div className="w-[20%] shadow-lg py-10 ml-9 px-5 space-y-5 text-2xl font-semibold">
           <ul>
                  <li>
                  <Link to='/'>Dashbord</Link>
                  </li>
                  <li>
                  <Link to='/dashbord/profile'>Profile</Link>
                  </li>               
                  <li>
                  <Link to='/dashbord/editprofile'>Edit Profile</Link>
                  </li>               
                  <li>
                  <Link to='/dashbord/editprofile'>Log Out</Link>
                  </li>               
           </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;