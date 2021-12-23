
const Button = (props) => {
    return (
        <button type="button" className="btn btn-primary hover:bg-bookmark-white hover:text-black">{props.children}</button>
    );
}

export default Button;