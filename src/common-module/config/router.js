import Student from "../../module/student"
import NotFound from "../../module/not-found"

const AppRouter = [
    {
        id: 0,
        path: "*",
        element: <NotFound/>
    },
    {
        id: 1,
        path: "/student",
        element: <Student/>
    }
]

export default AppRouter