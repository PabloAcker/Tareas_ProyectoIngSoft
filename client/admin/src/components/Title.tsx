const Title = (props: { description: any; color: any; setCont: any; cont: any; }) => {
    // Destructura objetos
    const { description, color, setCont, cont } = props;
    // const description = props.description;
    // const color = props.color;
    const decrement = ()=> {
        setCont(cont-1);
    }
    return (
        <>
    <h1 style={{color: color }}> {description}</h1>
    <button onClick={decrement}>Decrement</button></>);
}
export default Title;