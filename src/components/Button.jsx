export default function Button({children, onClick, className, setClassName }){
    if (setClassName) className += setClassName;

    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}