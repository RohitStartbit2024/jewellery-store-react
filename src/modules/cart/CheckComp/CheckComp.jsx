import { useEffect, useReducer, useState } from "react"
import YourOrder from "./YourOrder"
import { useSelector } from "react-redux";

//
const initialState = {
    name: '',
    company: '',
    phone:'',
    email: '',
    country: '',
    city:'',
    zip:'',
    state: '',
    address:'',
    checkbox: false,
    errors: {}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_COMPANY':
        return { ...state, company: action.value };
      case 'UPDATE_NAME':
        return { ...state, name: action.value };
      case 'UPDATE_EMAIL':
        return { ...state, email: action.value };
      case 'UPDATE_PHONE':
        return { ...state, phone: action.value };
      case 'UPDATE_CHECKBOX':
        return { ...state, checkbox: action.value };
      case 'UPDATE_COUNTRY':
        return { ...state, country: action.value };
      case 'UPDATE_CITY':
        return { ...state, city: action.value };
      case 'UPDATE_ZIP':
        return { ...state, zip: action.value };
      case 'UPDATE_STATE':
        return { ...state, state: action.value };
      case 'UPDATE_ADDRESS':
        return { ...state, address: action.value }; 
      case 'SUBMIT_FORM':
        const errors = {have:false};
        if (!state.name) {
          errors.name = '*Name is required';
          errors.have = true;
        }
        if (!state.company) {
            errors.company = '*Company is required';
            errors.have = true;
          }
        if (!state.country) {
            errors.country = '*Country is required';
            errors.have = true;
          }
          if (!state.city) {
            errors.city = '*City is required';
            errors.have = true;
          }
          if (!state.zip) {
            errors.zip = '*ZIP is required';
            errors.have = true;
          }
          if (!state.state) {
            errors.state = '*State is required';
            errors.have = true;
          }
          if (!state.address) {
            errors.address = '*Address is required';
            errors.have = true;
          } 
        if (!state.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(state.email)) {
          errors.email = ' *Invalid email address';
          errors.have = true;
        }
        if (!state.phone || !/^\d{10}$/.test(state.phone)){
          errors.phone = ' *INVALID PHONE NUMBER';
          errors.have = true;
        }
        if (!state.checkbox) {
          errors.checkbox = ' *Must agree T&C';
          errors.have = true;
        }
        return { ...state, errors };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  };
//   

export default function(props){

    const isLoggedIn = useSelector((state)=>state.customerDetails.LoggedIn)
    //
    const [state, dispatch] = useReducer(reducer, initialState);
    //   


    const cartListDetails=props.cartListDetails
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        var temp = 0
    cartListDetails?.map( item =>
            {temp = temp + (item.price * item.quantity)})
                setTotalPrice(temp)
    },[cartListDetails])

    const handleOrder = (event) => {
        dispatch({ type: 'SUBMIT_FORM' });
        
    };

    useEffect(() => {
        if (state.errors.have===false){ 
          dispatch({ type: 'RESET_FORM' });
          props.next()
        }
      }, [state.errors]);



    return(
        <div className="md:flex md:justify-between">
            <div className="md:w-[68%] text-xs md:text-base">
            <div className={`bg-gray-100 text-[10px] md:text-sm p-1 md:p-3 mb-4 md:mb-16 font-semibold ${isLoggedIn?"hidden":""}`}>RETURNING CUSTOMER? CLICK HERE TO <span className="text-teal-400">LOGIN</span></div>

                <div className="text-base md:text-xl p-1 md:p-3 border-2 border-gray-300 font-serif">Billing details</div>

                <input type="text" placeholder="Company Name*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.company} onChange={(event) => dispatch({ type: 'UPDATE_COMPANY', value: event.target.value })}/>{state.errors.company && <span className='text-red-500 text-xs md:text-sm'>{state.errors.company}</span>}

                <input type="text" placeholder="Vat/GST" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" />

                <input type="text" placeholder="First Name*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.name} onChange={(event) => dispatch({ type: 'UPDATE_NAME', value: event.target.value })}/>{state.errors.name && <span className='text-red-500 text-xs md:text-sm'>{state.errors.name}</span>}
                
                <input type="text" placeholder="Last Name" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2"/>

                <input type="number" placeholder="Phone*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.phone} onChange={(event) => dispatch({ type: 'UPDATE_PHONE', value: event.target.value })}/>{state.errors.phone && <span className='text-red-500 text-xs md:text-sm'>{state.errors.phone}</span>}

                <input type="text" placeholder="E-mail*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.email} onChange={(event) => dispatch({ type: 'UPDATE_EMAIL', value: event.target.value })}/>{state.errors.email && <span className='text-red-500 text-xs md:text-sm'>{state.errors.email}</span>}

                <input type="text" placeholder="Country*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.country} onChange={(event) => dispatch({ type: 'UPDATE_COUNTRY', value: event.target.value })}/>{state.errors.country && <span className='text-red-500 text-xs md:text-sm'>{state.errors.country}</span>}

                <input type="text" placeholder="City*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.city} onChange={(event) => dispatch({ type: 'UPDATE_CITY', value: event.target.value })}/>{state.errors.city && <span className='text-red-500 text-xs md:text-sm'>{state.errors.city}</span>}

                <input type="number" placeholder="Zip Code*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.zip} onChange={(event) => dispatch({ type: 'UPDATE_ZIP', value: event.target.value })}/>{state.errors.zip && <span className='text-red-500 text-xs md:text-sm'>{state.errors.zip}</span>}

                <input type="text" placeholder="State*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.state} onChange={(event) => dispatch({ type: 'UPDATE_STATE', value: event.target.value })}/>{state.errors.state && <span className='text-red-500 text-xs md:text-sm'>{state.errors.state}</span>}

                <input type="text" placeholder="Address Line 1*" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" value={state.address} onChange={(event) => dispatch({ type: 'UPDATE_ADDRESS', value: event.target.value })}/>{state.errors.address && <span className='text-red-500 text-xs md:text-sm'>{state.errors.address}</span>}

                <input type="text" placeholder="Address Line 2" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2" />

                <input type="text" placeholder="Any Other Notes" className="mt-2 md:mt-5 w-full text-xs md:text-base p-1 md:p-2 md:px-3 border-b-2"/>

                <button className={`mt-2 md:mt-5 border-2 md:border-0 md:hover:border-2 bg-teal-400 md:bg-transparent text-white md:text-black p-1 md:p-3 ${isLoggedIn?"hidden":""}`}>Create an account?</button>
            </div>

            <div className="md:w-[30%] mt-4 md:mt-0">
                <div className={`bg-gray-100 text-[10px] md:text-sm p-1 md:p-3 mb-4 md:mb-16 font-semibold`}>HAVE A COUPON?<span className="text-teal-400"> CLICK HERE TO ENTER YOUR CODE</span></div>
                <div className="text-base md:text-xl p-1 md:p-3 border-2 border-b-0 border-gray-300 font-serif">Your order</div>
                <div className="px-2 md:px-3 border-2">
                    <div className="flex justify-between py-2 md:py-4 text-sm md:text-lg border-b-2 font-semibold">
                        <p>PRODUCT</p>
                        <p className="text-right">TOTAL</p>
                    </div>
                    <div className="py-2 md:py-4 border-b-2">
                    {
                        cartListDetails?.map(item => 
                            <YourOrder key={item.sku}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}/>
                        )
                    }
                    <p className="text-xs md:text-base text-right">+flat rate: ${totalPrice/10}</p>
                    </div>
                    <div className="flex justify-between py-2 md:py-4 text-sm md:text-lg border-b-2 font-semibold">
                        <p>Order Total</p>
                        <p className="text-right">${totalPrice + (totalPrice/10)}</p>
                    </div>

                    <div className="py-2 md:py-4">
                        <p className="py-1 md:py-2 text-base md:text-2xl font-semibold">Payment Methods</p>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="radio" value="bank" name="payment" className="accent-teal-400" defaultChecked/>
                                <span className="ml-1 text-sm md:text-lg font-semibold">Direct Bank Transfer</span><br />
                                <p className={`md:ml-4 text-xs md:text-sm`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos provident beatae velit</p>
                            </label>
                        </div>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="radio" value="debit" name="payment" className="accent-teal-400"/>
                                <span className="ml-1 text-sm md:text-lg font-semibold">Debit Card</span>
                            </label>
                        </div>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="radio" value="credit" name="payment" className="accent-teal-400" />
                                <span className="ml-1 text-sm md:text-lg font-semibold" >Credit Card</span>
                            </label>
                        </div>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="radio" value="paypal" name="payment" className="accent-teal-400"/>
                                <span className="ml-1 text-sm md:text-lg font-semibold">Paypal</span>
                            </label>
                        </div>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="radio" value="offline" name="payment" className="accent-teal-400"/>
                                <span className="ml-1 text-sm md:text-lg font-semibold">Offline Payment</span>
                            </label>
                        </div>
                        <div className="py-1 md:py-2">
                            <label>
                                <input type="checkbox" checked={state.checkbox} onChange={(event) => dispatch({ type: 'UPDATE_CHECKBOX', value: event.target.checked })} className="accent-teal-400"/>
                                <span className="ml-1 text-xs md:text-sm accent-teal-400">I have read and accept the Terms & Conditions </span><br />{state.errors.checkbox && <span className='text-red-500 text-xs md:text-sm'>{state.errors.checkbox}</span>}
                            </label>
                        </div>
                    </div> 
                </div>
                <button type="button" className="md:p-3 text-white bg-teal-400 mt-4 p-2 text-sm md:text-base md:mt-8 md:w-full" onClick={handleOrder}>PLACE ORDER</button>
            </div>
        </div>
    )
}