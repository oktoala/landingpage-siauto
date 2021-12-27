
const Button = (props) => {
    return (
        <button type="button" className="btn btn-primary hover:shadow-xl hover:brightness-105">{props.children}</button>
    );
}

export default Button;