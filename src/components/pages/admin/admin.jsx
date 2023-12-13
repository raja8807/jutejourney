import Login from "./login/login"

const { default: CustomContainer } = require("@/components/ui/custom_container/custom_container")

const AdminScreen = ()=>{
    return <CustomContainer>
        <Login/>
    </CustomContainer>
}

export default AdminScreen