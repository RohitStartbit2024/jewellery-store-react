import FeatureProduct from "../../../Components/FeatureProduct/FeatureProduct"
import React, { useEffect, useState } from 'react';
import { ProductList } from "../../../static-data/ProductList";
import PriceSlider from "../../../Components/PriceSlider/PriceSlider";
import { Link } from "react-router-dom";
export default function(props){

  const[categoryFilter, setCategoryFilter]  = useState(ProductList)
  const[minRange, setMinRange] = useState(999)
  const[maxRange, setMaxRange] = useState(4999)
  const[rangeFilter , setRangeFilter] = useState(categoryFilter)
  const[bronzeC, setBronzeC] = useState(true)
  const[goldC, setGoldC] = useState(true)
  const[whiteC, setWhiteC] = useState(true)
  const[reset, setReset] = useState(false)
  const[finalProducts , setFinalProducts] = useState(rangeFilter)
  const [selectedCategory,  setSelectedCategory] = useState()
  const [subCategory, setSubCategory] = useState("none")

  //Options
  function handleOption(value){
    if(subCategory == value){
      setSubCategory("none")
    }
    else{
      setSubCategory(value)
    }
  }
  
  //clear filter
  function handleClear(){
    setReset(!reset)
    setBronzeC(true)
    setGoldC(true)
    setWhiteC(true)
    setCategoryFilter(ProductList)
    setSelectedCategory("none")
  }
  //all stones
  function handleAll(value){
    const filteredProducts = ProductList?.filter((product) => product.category === value);
    setCategoryFilter(filteredProducts)
    setSelectedCategory(value)
  }

  //handle stones
  function handleStone(value1,value2,value3){
    const filteredProducts = ProductList?.filter((product) => product.category === value1 && product.stone === value2);
    setCategoryFilter(filteredProducts)
    setSelectedCategory(value3)
  }

  //handle metals
  function handleMetal(value){
    const filteredProducts = ProductList?.filter((product) => product.metal===value);
    setCategoryFilter(filteredProducts)
    setSelectedCategory(value)
  }

  //final array of products after range filter
  useEffect(()=>{const filteredProducts =categoryFilter?.filter((product) => product.price>=minRange && product.     price<=maxRange);
  setRangeFilter(filteredProducts)},[categoryFilter])

  //price slider value 
  function valuePass(min, max){
    setMinRange(min)
    setMaxRange(max) 
    const filteredProducts =categoryFilter?.filter((product) => product.price>=min && product.price<=max);
    setRangeFilter(filteredProducts)  
  }

  //color filter
  function filterColor(){
    var array1 = []
    var array2 = []
    var array3 = []
    if(!bronzeC){array1 = rangeFilter?.filter((product) =>product.color != "bronze");}
    else{array1 = rangeFilter}

    if(!goldC){array2 = array1?.filter((product) =>product.color != "gold");}
    else{array2 = array1}

    if(!whiteC){array3 = array2?.filter((product) =>product.color != "white");}
    else{array3 = array2}
    setFinalProducts(array3)
  }
  useEffect(()=>{filterColor()},[rangeFilter,goldC,whiteC,bronzeC])

  //passing filter array function
  function passFilterProducts(){
    props.passedArray(finalProducts)
  }

  //passed array
  useEffect(()=>{passFilterProducts()},[finalProducts])
  
    return(
        <div className={`w-full md:pr-5 md:block`}>
          <Link>
          <div className="flex justify-between items-center p-1 px-1 text-xs md:text-base md:p-3 border border-gray-400 border-b-0 ">
            <p className='font-semibold md:font-bold'>PRODUCT CATEGORIES</p>
            <button type="button" className="border-2 border-teal-400 text-teal-400 rounded-full hover:text-white hover:bg-teal-400 p-1 md:p-2 text-[10px] md:text-sm" onClick={handleClear}>CLEAR ALL</button>
          </div>

          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-b-0 border border-gray-400 border-collapse flex items-center justify-between md:font-semibold' onClick={()=>handleOption("bracelets")}>
            BRACELETS
              <i className={`fa-solid fa-chevron-right ${subCategory == "bracelets"? "hidden" :""}`}></i>
              <i className={`fa-solid fa-chevron-right fa-rotate-90 ${subCategory == "bracelets"? "" :"hidden"}`}></i>
          </div>
          <ul className={`${subCategory == "bracelets"? "" :"hidden"}`}>
            <li className={`${selectedCategory == "bracelets" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300`} onClick={()=>handleAll("bracelets")}>ALL STONES</li>

            <li className={`${selectedCategory == "bracAqua" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("bracelets","aquamarine","bracAqua")}>AQUAMARINES</li>

            <li className={`${selectedCategory == "bracDiamond" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("bracelets","diamonds","bracDiamond")}>DIAMONDS</li>

            <li className={`${selectedCategory == "bracSilver" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("bracelets","sterling silver","bracSilver")}>STERLING SILVER</li>

            <li className={`${selectedCategory == "bracGold" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("bracelets","white gold","bracGold")}>WHITE GOLD</li>
          </ul>

          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-b-0 border border-gray-400 border-collapse flex items-center justify-between md:font-semibold' onClick={()=>handleOption("metal")}>
            BY METAL
              <i className={`fa-solid fa-chevron-right ${subCategory == "metal"? "hidden" :""}`}></i>
              <i className={`fa-solid fa-chevron-right fa-rotate-90 ${subCategory == "metal"? "" :"hidden"}`}></i>
          </div>
          <ul className={`${subCategory == "metal"? "" :"hidden"}`}>
            <li className={`${selectedCategory == "platinum" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2   md:p-3 border border-gray-300`} onClick={()=>handleMetal("platinum")}>PLATINUM</li>

            <li className={`${selectedCategory == "gold" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleMetal("gold")}>GOLD</li>

            <li className={`${selectedCategory == "silver" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleMetal("silver")}>SILVER</li>
          </ul>

          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-b-0 border border-gray-400 border-collapse flex items-center justify-between md:font-semibold' onClick={()=>handleOption("earings")}>
            EARRINGS
              <i className={`fa-solid fa-chevron-right ${subCategory == "earings"? "hidden" :""}`}></i>
              <i className={`fa-solid fa-chevron-right fa-rotate-90 ${subCategory == "earings"? "" :"hidden"}`}></i>
          </div>
          <ul className={`${subCategory == "earings"? "" :"hidden"}`}>
            <li className={`${selectedCategory == "earings" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300`} onClick={()=>handleAll("earings")}>ALL STONES</li>

            <li className={`${selectedCategory == "earAqua" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("earings","aquamarine","earAqua")}>AQUAMARINES</li>

            <li className={`${selectedCategory == "earDiamond" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("earings","diamonds","earDiamond")}>DIAMONDS</li>

            <li className={`${selectedCategory == "earSilver" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("earings","sterling silver","earSilver")}>STERLING SILVER</li>

            <li className={`${selectedCategory == "earGold" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("earings","white gold","earGold")}>WHITE GOLD</li>
          </ul>

          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-b-0 border border-gray-400 border-collapse flex items-center justify-between md:font-semibold' onClick={()=>handleOption("pendants")}>
            PENDANTS
              <i className={`fa-solid fa-chevron-right ${subCategory == "pendants"? "hidden" :""}`}></i>
              <i className={`fa-solid fa-chevron-right fa-rotate-90 ${subCategory == "pendants"? "" :"hidden"}`}></i>
          </div>
          <ul className={`${subCategory == "pendants"? "" :"hidden"}`}>
            <li className={`${selectedCategory == "pendants" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300`} onClick={()=>handleAll("pendants")}>ALL STONES</li>

            <li className={`${selectedCategory == "penAqua" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("pendants","aquamarine","penAqua")}>AQUAMARINES</li>

            <li className={`${selectedCategory == "penDiamond" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("pendants","diamonds","penDiamond")}>DIAMONDS</li>

            <li className={`${selectedCategory == "penSilver" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("pendants","sterling silver","penSilver")}>STERLING SILVER</li>

            <li className={`${selectedCategory == "penGold" ? "bg-teal-400 text-white" : ""} text-[10px] md:text-base px-2 md:p-3 border border-gray-300 border-t-0`} onClick={()=>handleStone("pendants","white gold","penGold")}>WHITE GOLD</li>
          </ul>

          <div className={`${selectedCategory == "platinum" ? "bg-teal-400 text-white" : ""} px-1 text-[12px] md:text-base md:p-3 md:pr-5 border border-gray-400 md:font-semibold`} onClick={()=>handleMetal("platinum")}>
            PLATINUM
          </div>

          <div className={`${selectedCategory == "rings" ? "bg-teal-400 text-white" : ""} px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-t-0 border border-gray-400 md:font-semibold`} onClick={()=>handleAll("rings")}>
            RINGS
          </div>
          </Link>
          
          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-t-0 border border-gray-400 font-semibold'>
          &nbsp;
          </div>
          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-t-0 border border-gray-400 md:font-semibold '>
           PRICE
          </div>
          <div className='px-6 md:text-base md:p-3 md:px-16 border-t-0 border border-gray-400'>
           <PriceSlider reset={reset} 
                        valuesPass={valuePass}/>
          </div>

          <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-t-0 border border-gray-400 md:font-semibold'>
            COLOR
          </div>
          <div className='p-2 flex justify-between md:block text-[12px] md:text-lg md:p-5 border-t-0 border border-gray-400'>
                <label >
                  <input type="checkbox" name="bronze" checked={bronzeC} onChange={()=>setBronzeC(!bronzeC)}/>&nbsp;
                    Bronze
                </label><br/>
                <label >
                  <input type="checkbox" name="gold" checked={goldC} onChange={()=>setGoldC(!goldC)}/>&nbsp;
                    Gold
                </label><br/>
                <label >
                  <input type="checkbox" name="white" checked={whiteC} onChange={()=>setWhiteC(!whiteC)}/>&nbsp;
                    White
                </label>    
          </div>

          <div className='hidden md:block'>
            <div className='px-1 text-[12px] md:text-base md:p-3 md:pr-5 border-t-0 border border-gray-400 md:font-semibold'>
              FEATURE PRODUCT
            </div>
            <div className='md:p-3 md:pr-5 border-t-0 border border-gray-400'>
                {ProductList?.map((product,index)=>{
                        if(index>9&&index<13){
                            return(
                                <FeatureProduct key={product.sku}
                                                id={product.sku}
                                                image={product.image}
                                                name={product.name}
                                                nav="jewellery"
                                                price={"$"+product.price}/>
                            )}})}
            </div>
          </div>
        </div>
    )
}