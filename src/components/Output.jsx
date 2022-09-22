import ReactDOMServer from 'react-dom/server'

export default function Output({ data }) {
  let bigArr = data.split(/\r?\n/);

  let editedArr = bigArr.map(
    (item, i) =>
      (item = item
        .match(/\(([^)]+)\)/)[1]
        .trim()
        .split('"')
        .join("")
        .split(/[ ,]+/))
  );

  const output = () => (
  	<pre>{
`{
	"Objects": [`}{editedArr.map(
	(val, i) =>
	`
		{
			"name": "${val[0]}",
			"pos": [
				${JSON.parse(val[1])},
				${JSON.parse(val[2])},
				${JSON.parse(val[3])}
			],
			"ypr": [
				${JSON.parse(val[4])},
				${JSON.parse(val[5])},
				${JSON.parse(val[6])}
			]
		}${i !== editedArr.length-1 ? `,` : ''}`)}{`
	]
}`
	}</pre>
  )

  return output()

}
