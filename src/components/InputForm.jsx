export default function MyForm({data, setData}) {

  return (
    <form>
      <label><h3>JSONify:</h3>
	  	<h4>EXAMPLE:</h4>
		<h6>Select 1, 2 or all 3 lines. Drag and drop on the text area to see JSON output.</h6>
	  	<h6>SpawnObject( "DNA_Lockout_WallSmallSlim", "5863.370117 7.100000 13875.500000", "0.000000 0.000000 -0.000000" );<br/>
			SpawnObject( "DNA_Lockout_Yellow", "5863.410156 7.650000 13875.500000", "179.999985 0.000000 -0.000000" );<br/>
			SpawnObject( "DNA_Crate_Yellow", "5864.819824 5.900000 13873.900391", "-90.000000 0.000000 0.000000" );</h6>
        <textarea
		placeholder="Enter functions and params"
		cols="40" 
       	rows="5"
		style={{width: "100%", height: "40vh"}}
		autoFocus
        type="text" 
        value={data}
        onChange={(e) => setData(e.target.value)}
        />
      </label>
    </form>
  )
}