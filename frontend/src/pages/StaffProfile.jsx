import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserContext } from '../utilities/UserContext';
import { useFetchUrl } from '../utilities/useFetchUrl';

const StaffProfile = () => {

    const {user} = useUserContext();
    // console.log(user)

    const { id } = useParams();
    const { data: staff, loading } = useFetchUrl(`staffs/${id}`)

    const nameInitials = () => {
        
        if(staff) {
            const fname = staff.name.split(' ')[1];
            const lname = staff.name.split(' ')[2];

            if(staff.name.split(' ').length === 3 && (staff.name.split(' ')[0] === 'Prof' || staff.name.split(' ')[0] === 'Dr' || staff.name.split(' ')[0] === 'Mr' || staff.name.split(' ')[0] === 'Mrs' || staff.name.split(' ')[0] === 'Miss')) {
                
                return fname.split('')[0] + lname.split('')[0];

            } else if(staff.name.split(' ').length === 2 && (staff.name.split(' ')[0] === 'Prof' || staff.name.split(' ')[0] === 'Dr' || staff.name.split(' ')[0] === 'Mr' || staff.name.split(' ')[0] === 'Mrs' || staff.name.split(' ')[0] === 'Miss')) {

                return fname.split('')[0] + fname.split('')[1];

            }
        }
    }

  return (
    <>
        { loading ? <div>Loading...</div> : 
            <div className="staff-profile">
                <div className="profile">
                    <div className="image">
                        <h1>{ nameInitials() }</h1>
                    </div>

                    <input 
                        type="text" 
                        value={ staff && staff.name }
                        className="name" 
                    />
                    <input 
                        type="text" 
                        value={ staff && staff.department }
                        className="dept" 
                        
                    />
                    {/* <h2>{ staff && staff.name }</h2> */}
                    {/* <small>{staff && staff.department }</small> */}
                </div>

            </div>
        }
    </>
  )
}

export default StaffProfile