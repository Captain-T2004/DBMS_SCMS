import Login from "../Components/Login/Login"

function LoginPage(){
    return(
      <>
        <div style={{display:"flex", flexDirection:"row"}}>
          <img src="/assets/login_page.svg" alt="Ingress" style={{width:"100vh", borderRadius:"20px"}}/>
          <Login/>
        </div>
      </>
    );
}
export default LoginPage;