import { Navigate, Outlet } from 'react-router-dom'

function useAuth(element) {
    if (element === 'patient') {
        return true
    } else {
        return false
    }
    // const user = localStorage.getItem('user')
    // if (user) {
    //     let data = JSON.parse(user)
    //     if (data) {
    //         if ("patient" === element.data) {
    //             return true
    //         }
    //         return false
    //     }
    //     return false
    // }
    // return false
}

function ProtectedRoutes(props) {
    // console.log(element)
    const { element } = props
    console.log('element', element?.data);
    const isAuth = useAuth(element?.data)
    console.log('isAuth', isAuth);
    return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
