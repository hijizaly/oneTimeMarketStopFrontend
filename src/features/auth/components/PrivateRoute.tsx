import { Navigate } from 'react-router-dom'
import DashboardLayout from "../../dashboard/components/DashboardLayout.tsx";
import {nativeJwtDecoder} from "../../../common/utilities/jwtUtilities.ts";
import {authLocalStorage} from "../../../common/utilities/authLocalStorage.ts";

const PrivateRoute = () => {
    console.log("PRV")
    try {
        // @ts-ignore :RUSHING TO DEPLOYMENT
        if (authLocalStorage.getAccessToken()) {
            console.log("AUTH GET",authLocalStorage.getAccessToken())
            const decodedToken = nativeJwtDecoder(authLocalStorage.getAccessToken())
            switch (decodedToken?.role) {
                case 'USER':
                    console.log("USER HIT")
                    return <DashboardLayout />
                // break
                default:
                    break
            }
        } else return <Navigate to='/' />
    } catch (e) {
        return <Navigate to='/' />
    }
}

export default PrivateRoute
