export default function MyForm({data, setData}) {

  return (
    <form>
      <label><h3>JSONify:</h3>
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