// const  Cybrom=(props)=>{
//     return(
//       <>
//       <h1>MY COLLEGE IS:{props.nm}</h1>
//       <h1>MY fees IS:{props.fs}</h1>
//       <h1>MY city IS:{props.ct}</h1>
//       <h1>MY subject IS:{props.sub}</h1>
     
//       </>
//     )
//    }
//    export default Cybrom;

//.................children is a key word.......................
const Cybrom=({children})=>{
  
  return(
    <>
    <h1>welcome to cybrom</h1>
    {children}</>
    
  )
}
export default Cybrom;
