import { useState } from "react"

/* -------- Landing -------- */
function LandingPage(){
  return (
    <div style={{padding:"40px"}}>
      <h1>AI Fashion Try-On</h1>
      <p>Upload your photo and preview outfits with AI.</p>
    </div>
  )
}

/* -------- Catalog -------- */
function CatalogPage(){
  return (
    <div style={{padding:"40px"}}>
      <h1>Catalog</h1>
      <p>👕 White Shirt</p>
      <p>🧥 Black Hoodie</p>
      <p>👖 Blue Jeans</p>
      <p>⌚ Watch</p>
    </div>
  )
}

/* -------- Try-On -------- */
function TryOnPage(){
  return (
    <div style={{display:"flex", gap:"40px", padding:"40px"}}>

      {/* Left panel */}
      <div style={{width:"250px", background:"#222", padding:"20px", color:"white"}}>
        <h3>Clothing Items</h3>
        <p>White Shirt</p>
        <p>Black Hoodie</p>
        <p>Blue Jeans</p>
        <p>Watch</p>
      </div>

      {/* Right panel */}
      <div>
        <h2>Upload Photo</h2>

        <input type="file" />

        <br/><br/>

        <button>Generate Try-On</button>

        <div style={{
          width:"400px",
          height:"400px",
          border:"2px solid gray",
          marginTop:"20px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          Result Preview
        </div>
      </div>

    </div>
  )
}

/* -------- App -------- */
function App(){

  const [page, setPage] = useState("home")

  return (

    <div>

      {/* Navbar */}
      <div style={{
        padding:"20px",
        background:"#111",
        display:"flex",
        gap:"20px",
        color:"white"
      }}>

        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("catalog")}>Catalog</button>
        <button onClick={() => setPage("tryon")}>Try On</button>

      </div>


      {/* Page switch */}
      {page === "home" && <LandingPage />}
      {page === "catalog" && <CatalogPage />}
      {page === "tryon" && <TryOnPage />}

    </div>

  )
}

export default App