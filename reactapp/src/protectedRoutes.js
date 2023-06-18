import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import _ from "lodash";



function useAuth(element) {
    // if (element === 'admin') {
    //     return true
    // } else {
    //     return false
    // }
    // const user = useSelector((s) => s?.user?.value)
    // if (!_.isEmpty(user)) {
    //     if (user === element) {
    //         return true
    //     } else {
    //         return false
    //     }
    // } else {
    //     return false
    // }

  //  console.log('sss',user);
    const role = localStorage.getItem('Role')
    if (role) {
        // let data = JSON.stringify(role)
        let data=role
        if (data) {
            if (data === element) {
                console.log('trueee');
                return true
            }
            return false
        }
        return false
    }
    return false
}

function ProtectedRoutes(props) {

    // console.log(element)
    const { element } = props
    const isAuth = useAuth(element?.data)
    return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
