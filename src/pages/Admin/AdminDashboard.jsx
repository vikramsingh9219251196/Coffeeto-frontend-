import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../components/Context/auth'
const AdminDashboard = () => {
    const[auth]=useAuth();
  return (
    <Layout>
     <div className='container-fluid m-5 p-5'  style={{position:"relative",top:"24rem"}}>
        <div className='row' style={{marginRight:"4rem"}}>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <div className='card w-75 p-3' style={{position:"relative",top:"2.5rem",textAlign:"center"}}>
                    <h3 style={{textTransform:"lowercase"}}>Admin Name: {auth?.user?.name}</h3>
                    <h3 style={{textTransform:"lowercase"}}>Admin Email: {auth?.user?.email}</h3>
                    <h3 style={{textTransform:"lowercase"}}>Admin Contact: {auth?.user?.phone}</h3>
                </div>
            </div>
        </div>
     </div>
    </Layout>
  )
}

export default AdminDashboard
