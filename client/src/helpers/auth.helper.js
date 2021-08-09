

export const isAuthenticated = () =>{

    const token  = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('userInfo'))   
    if(token &&  user  ){
         return user        
    }
    return false;
}