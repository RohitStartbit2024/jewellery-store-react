import { createSlice, nanoid } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
    customer : [{id:"001", Fname:"test", Lname:"lname",  phone:"9876543210", email:"test@gmail.com", pass:"test@gmail.com" },
                {id:"002", Fname:"test2", Lname:"lname",  phone:"9876554321", email:"test2@gmail.com", pass:"test2@gmail.com" }
    ],
    LoggedIn : false,
    currentCus : "",
    created: false
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers:{
        //signUp
        signUp: (state, action) => {
              const  Fullname = (action.payload.name).split(' ')
              const rePass = action.payload.repass
              const accept = action.payload.accept
              const newId = nanoid()
            const credentials ={
                id: newId,
                Fname: Fullname[0],
                Lname: Fullname[Fullname.length - 1],
                phone: action.payload.phone,
                email: (action.payload.email).toLowerCase(),
                pass: action.payload.pass
            }
            if(credentials.Fname && credentials.phone && credentials.email && credentials.pass && rePass){
                if(accept){
                    if(credentials.pass == rePass){
                        if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(credentials.email)){
                            if(/^\d{10}$/.test(credentials.phone)){
                                var emailExists = false
                                state.customer.map(e=>{
                                    if(e.email == credentials.email){emailExists=true}
                                })
                                if(!emailExists){
                                    state.customer.push(credentials)
                                    state.created = true
                                    alert("Signed Up Successfully!")
                                }
                                else{
                                    alert("Email already exists!")
                                }
                            }
                            else{
                                alert("Invalid phone number")
                            }
                        }
                        else{
                            alert("Invalid Email")
                        }
                    }
                    else{
                        alert("Passwords doesn't Matches")
                    }
                }
                else{
                    alert("Accept Terms & Conditions first")
                }
            }
            else{
                alert("Fill all necessary fields")
            }      
        },
        // signIn
        signIn:(state,action) => {
            const credentials ={
                email: (action.payload.email).toLowerCase(),
                pass: action.payload.pass,
                checked: action.payload.check
            }
            var emailCheck = false
            if(credentials.email && credentials.pass){
                state.customer.map(e=>{
                    if(e.email == credentials.email){emailCheck=true}
                })
                if(emailCheck){
                    var passCheck = false
                    state.customer.map(e=>{
                        if(e.email == credentials.email){
                            if(e.pass == credentials.pass){
                                state.currentCus = e
                                state.LoggedIn = true
                                state.currentCus = e.id
                                passCheck = true}
                        }
                    })
                    if(passCheck){
                        // correct
                        if(credentials.checked){
                            localStorage.setItem("user",JSON.stringify(credentials))
                        }
                        alert("Signed In Successfully!")
                        }
                    else{alert("Incorrect Password")}
                }
                else{
                    alert("Customer didn't exists!")
                }
            }
            else{
                alert("Input all necessary fields!")
            }  
        },
        signOut: (state, action)=> {
                state.LoggedIn = false
                state.currentCus = ""
        },
        resetCreated: (state,action)=> {
            state.created = false
        }     
    }
})

export const {signUp,resetCreated, signIn, signOut} = customerSlice.actions

export default customerSlice.reducer