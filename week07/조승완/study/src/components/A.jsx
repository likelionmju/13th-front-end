const A = (props) => {

    const Change = (e) => {
        props.onChange(e.target.value)
        // props.value = e.tsrget.value
    }

    // console.log(props.value)

    return (
        <div>
            <input type="text" 
            onChange={Change}
            placeholder={props.value}/>
        </div>
    )
}

export default A    