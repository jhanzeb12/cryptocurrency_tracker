export type ICardProps = {
    title?: string;
    body?: string;
    children?: any;
}

const Card = ({ title, body, children }: ICardProps) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                {title && <h2 className="card-title">{title}</h2>}
                {body && <p>{body}</p>}
                {children}
            </div>
        </div>
    );
}

export default Card;

