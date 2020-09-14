import React from 'react'

 const Profile=()=> {
    return (
        <div>
        <div style={{
            display:'flex',
            justifyContent:'space-arround'
            
        }}>
            <div>
            <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            </div>
            <div>
                <h4>Ahmad Zafar</h4>
            </div>
        </div>
        </div>
    )
}
export default Profile
