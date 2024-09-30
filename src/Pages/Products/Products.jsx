import { useEffect, useState } from 'react'
import { ProductList } from '../../static-data/ProductList'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Header from '../../Components/Header/Header'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { Pagination } from '@mui/material'
import PriceSlider from '../../Components/PriceSlider/PriceSlider'
import BarLayout from '../../Components/BarLayout/BarLayout'
import ProductCard2 from '../../Components/ProductCard2/ProductCard2'

export default function(props){
    const params = useParams()
    const keyWord = params?.result.toLowerCase()
    const type = props.type
    const [visibleArray, setVisibleArray] = useState([])
    const [finalArray, setFinalArray] = useState([])
    const [itemsPage, setItemsPage] = useState(9)
    const [totalPage, setTotalPage] = useState(1)
    const [page, setPage] = useState(1)
    const startIndex = (page - 1) * itemsPage
    const endIndex = startIndex + itemsPage
    const [sortType, setSortType] = useState('default')
    const [showFilter, setShowFilter] = useState(false)
    const [priceRange, setPriceRange ] = useState([999,4999])
    const [reset, setReset] = useState(false)
    const [color, setColor] = useState(["gold","white"])
    const [white , setWhite] = useState(true)
    const [gold , setGold] = useState(true)
    const [stone , setStone] = useState(["aquamarine", "sterling silver", "diamonds", "white gold"])
    const [aquamarine , setAquamarine] = useState(true)
    const [sSilver , setSSilver] = useState(true)
    const [diamonds , setDiamonds] = useState(true)
    const [wGold , setWGold] = useState(true)
    const [metal, setMetal] = useState(["platinum", "gold", "silver"])
    const [platinum, setPlatinum] = useState(true)
    const [mGold, setMGold] = useState(true)
    const [silver, setSilver] = useState(true)
    const [barLayout, setBarLayout] = useState(1)

    useEffect(()=>{
        const pref = localStorage.getItem("grid_col")
    if(pref){
        setBarLayout(JSON.parse(pref))
    } 
    },[])
    
    useEffect(()=>{
        if(type == "category"){
            setVisibleArray(ProductList?.filter(item=> item.category == keyWord))
        }
        if(type == "search"){
            setVisibleArray(ProductList?.filter(item => item.name.toLowerCase().includes(keyWord)))
        } 
    },[type,keyWord])

    useEffect(()=>{
        setFinalArray(visibleArray
            .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1] && color.includes(product.color) && stone.includes(product.stone) && metal.includes(product.metal)))
    },[visibleArray,priceRange,color, stone, metal])

    useEffect(()=>{
        setTotalPage(Math.ceil(finalArray.length/itemsPage))
    },[finalArray, itemsPage])

    const handleChange = (event, value) => {
            setPage(value);
            };
    
    // sorting
    const sortProducts = (type) => {
        const sorted = [...finalArray].sort((a, b) => {
            switch (type) {
                case 'price-l-h':
                    return parseFloat(a.price) - parseFloat(b.price);
                case 'price-h-l':
                    return parseFloat(b.price) - parseFloat(a.price);
                case 'name-z-a':
                    return a.name.localeCompare(b.name);
                case 'name-a-z':
                    return b.name.localeCompare(a.name);
                case 'sku':
                    return b.sku.localeCompare(a.sku);
                default:
                    return 0;
            }
        });
        setFinalArray(sorted);
        setSortType(type);
        setPage(1);
    };
    function handleRange(v1,v2){
        setPriceRange([v1,v2])
    }

    useEffect(()=>{setSortType('default')
        setPage(1)
        setReset(!reset)
        setPriceRange([999,4999])
        setGold(true)
        setWhite(true)
        setAquamarine(true)
        setDiamonds(true)
        setWGold(true)
        setSSilver(true)
        setShowFilter(false)
        setItemsPage(9)
    },[visibleArray])
    useEffect(()=>{},[visibleArray])

    useEffect(()=>{setPage(1)},[itemsPage])

    useEffect(()=>{
        const preference = JSON.stringify(barLayout)
        localStorage.setItem("grid_col", preference)
    },[barLayout])

    return(
        <>
            <Header page={type == "category" ? keyWord : ""}/>



            <div className='min-h-screen flex flex-col justify-between px-2 md:container md:mx-auto'>
                <div>
                    
                    <div className='bg-teal-400  text-xs text-white md:font-semibold md:text-sm flex justify-between mt-3 md:mt-6'>

                    <div className='p-2 md:p-4 md:px-4'>
                    <label>SORT : 
                    <select value={sortType} onChange={(e) => sortProducts(e.target.value)} className="bg-teal-400 outline-none">  
                         <option value="default">DEFAULT</option>
                        <option value="price-l-h">Price: Low to High</option>
                        <option value="price-h-l">Price: High to Low</option>
                        <option value="name-z-a">Name: A to Z</option>
                        <option value="name-a-z">Name: Z to A</option>
                        <option value="sku">Latest</option>
                    </select>
                    </label>
                    <label className='ml-2'>
                        Items/Page : 
                        <input type="number" value={itemsPage} onChange={(e)=>setItemsPage(e.target.value)} className='bg-teal-400 ml-2 w-10'/>
                    </label>
                    </div>
        
                    <div className='flex'>
                        <div className='hover:bg-teal-500 p-4' onClick={()=>setShowFilter(!showFilter)}>
                            <i className="fa-solid fa-filter" ></i>
                        </div>
                        <div className='hover:bg-teal-500 p-3 ml-8' onClick={()=>{setBarLayout(1)
                            localStorage.setItem("grid_pref", "1")
                        }}>
                            <i className={`fa-solid fa-bars-staggered p-1 ${barLayout==1 ? "border-2 border-teal-700 rounded":""}`} ></i> 
                        </div>
                        <div className='hover:bg-teal-500 p-3' onClick={()=>{setBarLayout(2)
                            localStorage.setItem("grid_pref", "2")
                        }}>
                            <i className={`fa-solid fa-table-cells-large p-1 ${barLayout==2 ? "border-2 border-teal-700 rounded":""}`} ></i> 
                        </div>
                        <div className='hover:bg-teal-500 p-3' onClick={()=>{setBarLayout(3)
                            localStorage.setItem("grid_pref", "3")
                        }}>
                            <i className={`fa-solid fa-table-cells p-1 ${barLayout==3 ? "border-2 border-teal-700 rounded":""}`} ></i> 
                        </div>
                    </div>

                    </div>

                    <div className={`flex flex-col items-end ${showFilter? "block" : "hidden"}`}>
                        <div className='md:flex md:justify-between w-full'>
                        <p className='border-2 md:border-r-0 p-2 px-4 md:w-1/4'>
                            PRICE :
                            <PriceSlider reset={reset}
                                         valuesPass={handleRange}/>
                        </p>
                        <p className='border-2 md:border-r-0 p-2 px-4 flex md:w-1/4 justify-between flex-wrap'>
                            <p className='w-full'>COLOR :</p>
                            <label>
                                <input type="checkbox" className='mr-1' checked={gold} onChange={()=>{
                                    if(!gold){
                                        setColor([...color, "gold"]) 
                                    }
                                    else {
                                        setColor(color.filter(e => e != "gold" ))
                                    }
                                    setGold(!gold)}} />
                                Gold
                            </label>
                            <label>
                                <input type="checkbox" className='mr-1' checked={white} onChange={()=>{
                                    if(!white){
                                        setColor([...color, "white"])
                                    }
                                    else {
                                        setColor(color.filter(e => e != "white" ))
                                    }
                                    setWhite(!white)}}/>
                                White
                            </label>
                        </p>
                        <p className='border-2 md:border-r-0 p-2 px-4 flex md:w-1/4 justify-between flex-wrap'>
                            <p className='w-full'>STONE :</p>
                            <label>
                                <input type="checkbox" className='mr-1' checked={aquamarine} onChange={()=>{
                                    if(!aquamarine){
                                        setStone([...stone, "aquamarine"]) 
                                    }
                                    else{
                                        setStone(stone.filter(e => e != "aquamarine" ))
                                    }
                                    setAquamarine(!aquamarine)}} />
                                AQUAMARINES
                            </label>
                            <label>
                                <input type="checkbox" className='mr-1' checked={diamonds} onChange={()=>{
                                    if(!diamonds){
                                        setStone([...stone, "diamonds"]) 
                                    }
                                    else {
                                        setStone(stone.filter(e => e != "diamonds" ))
                                    }
                                    setDiamonds(!diamonds)}} />
                                DIAMONDS
                            </label>
                            <label>
                                <input type="checkbox" className='mr-1' checked={sSilver} onChange={()=>{
                                    if(!sSilver){
                                        setStone([...stone, "sterling silver"]) 
                                    }
                                    else {
                                        setStone(stone.filter(e => e != "sterling silver" ))
                                    } 
                                    setSSilver(!sSilver)}} />
                                STERLING SILVER
                            </label>
                            <label>
                                <input type="checkbox" className='mr-1' checked={wGold} onChange={()=>{
                                    if(!wGold){
                                        setStone([...stone, "white gold"]) 
                                    }
                                    else {
                                        setStone(stone.filter(e => e != "white gold" ))
                                    }
                                    setWGold(!wGold)}} />
                                WHITE GOLD
                            </label>
                            </p>
                        <p className='border-2 p-2 px-4 flex md:w-1/4 justify-between flex-wrap'>
                        <p className='w-full'>METAL :</p>
                        <label>
                                <input type="checkbox" className='mr-1' checked={platinum} onChange={()=>{
                                    if(!platinum){
                                        setMetal([...metal, "platinum"]) 
                                    }
                                    else{
                                        setMetal(metal.filter(e => e != "platinum" ))
                                    }
                                    setPlatinum(!platinum)}} />
                                PLATINUM
                        </label>
                        
                        <label>
                                <input type="checkbox" className='mr-1' checked={mGold} onChange={()=>{
                                    if(!mGold){
                                        setMetal([...metal, "gold"]) 
                                    }
                                    else{
                                        setMetal(metal.filter(e => e != "gold" ))
                                    }
                                    setMGold(!mGold)}} />
                                GOLD
                        </label>
                        
                        <label>
                                <input type="checkbox" className='mr-1' checked={silver} onChange={()=>{
                                    if(!silver){
                                        setMetal([...metal, "silver"]) 
                                    }
                                    else{
                                        setMetal(metal.filter(e => e != "silver" ))
                                    }
                                    setSilver(!silver)}} />
                                SILVER
                        </label>
                        </p>
                        </div>
                    </div>

                    {finalArray?.length == 0 ? <p className='text-center min-h-screen text-red-700  text-xl pt-10'>No Results Found : (</p> :
                    <div className={`${barLayout<2 ? "" :"flex flex-wrap justify-start gap-[3%]"} mt-4 md:mt-16  md:px-32`}>
                    {finalArray?.slice(startIndex, endIndex).map(product => {
                            const commonProps = { key: product.sku,
                                                    id: product.sku,
                                                    image: product.image,
                                                    name: product.name,
                                                    category: product.category,
                                                    price: product.price,};

                                                    if (barLayout === 1) {
                                                        return <BarLayout {...commonProps} />;
                                                    } else if (barLayout === 2) {
                                                        return <ProductCard2 {...commonProps} />;
                                                    } 
                                                    else if (barLayout === 3) {
                                                        return <ProductCard {...commonProps} />;
                                                    }
                            })}
                    </div>}
                </div>

                <div className={`${totalPage <=1 ? "hidden " : "flex"} mb-3 justify-center md:mb-6`}>
                    <Pagination count={totalPage} page={page} onChange={handleChange} />
                </div>

            </div>

            <NewsLetter/>
            <Footer/>

        </>
    )
}