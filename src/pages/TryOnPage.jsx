export default function TryOnPage() {
  return (
    <div style={{display:"flex", padding:"40px", gap:"40px"}}>

      <div style={{width:"250px", background:"#222", padding:"20px"}}>
        <h3>Clothing Items</h3>

        <p>White Shirt</p>
        <p>Black Hoodie</p>
        <p>Blue Jeans</p>
        <p>Watch</p>
      </div>

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